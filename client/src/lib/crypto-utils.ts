/**
 * Hash a password using SHA-1
 * Uses the Web Crypto API (browser-native, no external dependencies)
 * 
 * @param password - The password to hash
 * @returns Promise resolving to uppercase SHA-1 hash hex string
 */
export async function hashPasswordSHA1(password: string): Promise<string> {
  // Convert password to bytes
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  
  // Hash using SHA-1
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  
  // Convert buffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
  
  return hashHex;
}

/**
 * Get the first N characters of a hash (for k-anonymity)
 * 
 * @param hash - The full hash string
 * @param length - Number of characters to return (default: 5)
 * @returns The prefix of the hash
 */
export function getHashPrefix(hash: string, length: number = 5): string {
  return hash.substring(0, length);
}

/**
 * Get the suffix of a hash (everything after the prefix)
 * 
 * @param hash - The full hash string
 * @param prefixLength - Length of the prefix to skip (default: 5)
 * @returns The suffix of the hash
 */
export function getHashSuffix(hash: string, prefixLength: number = 5): string {
  return hash.substring(prefixLength);
}
