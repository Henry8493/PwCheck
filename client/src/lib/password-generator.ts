import { GeneratorOptions } from '@/types/password';

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const SIMILAR_CHARS = 'il1Lo0O';
const AMBIGUOUS_CHARS = '{}[]()/\\\'"`~,;<>.';

export function generatePassword(options: GeneratorOptions): string {
  let charset = '';
  let password = '';
  
  // Build charset based on options
  if (options.includeUppercase) charset += UPPERCASE;
  if (options.includeLowercase) charset += LOWERCASE;
  if (options.includeNumbers) charset += NUMBERS;
  if (options.includeSymbols) charset += SYMBOLS;
  
  if (!charset) {
    throw new Error('At least one character type must be selected');
  }
  
  // Remove similar/ambiguous characters if requested
  if (options.excludeSimilar) {
    charset = charset.split('').filter(char => !SIMILAR_CHARS.includes(char)).join('');
  }
  
  if (options.excludeAmbiguous) {
    charset = charset.split('').filter(char => !AMBIGUOUS_CHARS.includes(char)).join('');
  }
  
  // Ensure at least one character from each selected type
  const requiredChars: string[] = [];
  if (options.includeUppercase) {
    const upperChars = UPPERCASE.split('').filter(char => 
      (!options.excludeSimilar || !SIMILAR_CHARS.includes(char)) &&
      (!options.excludeAmbiguous || !AMBIGUOUS_CHARS.includes(char))
    );
    if (upperChars.length > 0) {
      requiredChars.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
    }
  }
  
  if (options.includeLowercase) {
    const lowerChars = LOWERCASE.split('').filter(char => 
      (!options.excludeSimilar || !SIMILAR_CHARS.includes(char)) &&
      (!options.excludeAmbiguous || !AMBIGUOUS_CHARS.includes(char))
    );
    if (lowerChars.length > 0) {
      requiredChars.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
    }
  }
  
  if (options.includeNumbers) {
    const numberChars = NUMBERS.split('').filter(char => 
      (!options.excludeSimilar || !SIMILAR_CHARS.includes(char)) &&
      (!options.excludeAmbiguous || !AMBIGUOUS_CHARS.includes(char))
    );
    if (numberChars.length > 0) {
      requiredChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    }
  }
  
  if (options.includeSymbols) {
    const symbolChars = SYMBOLS.split('').filter(char => 
      (!options.excludeSimilar || !SIMILAR_CHARS.includes(char)) &&
      (!options.excludeAmbiguous || !AMBIGUOUS_CHARS.includes(char))
    );
    if (symbolChars.length > 0) {
      requiredChars.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }
  }
  
  // Generate remaining characters
  const remainingLength = options.length - requiredChars.length;
  for (let i = 0; i < remainingLength; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  
  // Add required characters
  password += requiredChars.join('');
  
  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

export function getDefaultGeneratorOptions(): GeneratorOptions {
  return {
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false
  };
}
