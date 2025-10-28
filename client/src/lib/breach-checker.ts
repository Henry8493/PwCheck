import { hashPasswordSHA1, getHashPrefix, getHashSuffix } from './crypto-utils';

const HIBP_API_URL = 'https://api.pwnedpasswords.com/range/';

export interface BreachCheckResult {
  isBreached: boolean;
  breachCount: number;
  error?: string;
}

/**
 * Check if a password has been found in data breaches
 * Uses the Have I Been Pwned Pwned Passwords API with k-anonymity
 * 
 * How it works:
 * 1. Hash the password with SHA-1 locally
 * 2. Send only the first 5 characters of the hash to the API
 * 3. Receive all hashes starting with those 5 characters
 * 4. Check locally if the full hash is in the response
 * 
 * This ensures the password never leaves the browser and HIBP cannot
 * determine which specific password is being checked.
 * 
 * @param password - The password to check
 * @returns Promise with breach check result
 */
export async function checkPasswordBreach(password: string): Promise<BreachCheckResult> {
  if (!password) {
    return {
      isBreached: false,
      breachCount: 0,
      error: 'No password provided'
    };
  }

  try {
    // Step 1: Hash the password locally using SHA-1
    const hash = await hashPasswordSHA1(password);
    
    // Step 2: Get the first 5 characters (k-anonymity prefix)
    const hashPrefix = getHashPrefix(hash, 5);
    const hashSuffix = getHashSuffix(hash, 5);
    
    // Step 3: Query the HIBP API with only the prefix
    const response = await fetch(`${HIBP_API_URL}${hashPrefix}`, {
      headers: {
        'Add-Padding': 'true' // Optional: adds random padding to responses for additional privacy
      }
    });
    
    if (!response.ok) {
      throw new Error(`HIBP API error: ${response.status} ${response.statusText}`);
    }
    
    // Step 4: Parse the response (format: HASHSUFFIX:COUNT\r\n)
    const responseText = await response.text();
    const hashes = responseText.split('\r\n');
    
    // Step 5: Check locally if our hash suffix is in the results
    for (const line of hashes) {
      const [responseSuffix, countStr] = line.split(':');
      
      if (responseSuffix === hashSuffix) {
        // Found! This password has been breached
        return {
          isBreached: true,
          breachCount: parseInt(countStr, 10)
        };
      }
    }
    
    // Not found in any breaches
    return {
      isBreached: false,
      breachCount: 0
    };
    
  } catch (error) {
    console.error('Breach check error:', error);
    return {
      isBreached: false,
      breachCount: 0,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Format breach count for display
 * @param count - Number of times password was found in breaches
 * @returns Formatted string for user display
 */
export function formatBreachCount(count: number): string {
  if (count === 0) {
    return 'Not found in any known breaches';
  }
  
  if (count === 1) {
    return 'Found in 1 data breach';
  }
  
  if (count < 1000) {
    return `Found in ${count.toLocaleString()} data breaches`;
  }
  
  if (count < 1000000) {
    const thousands = Math.floor(count / 1000);
    return `Found in over ${thousands}K data breaches`;
  }
  
  const millions = (count / 1000000).toFixed(1);
  return `Found in over ${millions}M data breaches`;
}
