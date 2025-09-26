import { PasswordAnalysis } from '@/types/password';

const COMMON_PASSWORDS = new Set([
  'password', '123456', '12345678', 'qwerty', 'abc123', 'password123',
  'admin', 'letmein', 'welcome', 'monkey', '1234567890', 'iloveyou'
]);

const COMMON_PATTERNS = [
  /(.)\1{2,}/,                    // Repeated characters (aaa, 111)
  /123|234|345|456|567|678|789/,  // Sequential numbers
  /abc|bcd|cde|def|efg|fgh/i,     // Sequential letters
  /qwer|asdf|zxcv/i,              // Keyboard patterns
  /password|admin|login/i,         // Common words
];

export function analyzePassword(password: string): PasswordAnalysis {
  if (!password) {
    return {
      score: 0,
      strength: 'very-weak',
      entropy: 0,
      length: 0,
      hasUppercase: false,
      hasLowercase: false,
      hasNumbers: false,
      hasSymbols: false,
      hasCommonPatterns: false,
      isCommonPassword: false,
      feedback: ['Enter a password to see analysis'],
      crackTime: 'instant'
    };
  }

  const analysis: PasswordAnalysis = {
    score: 0,
    strength: 'very-weak',
    entropy: calculateEntropy(password),
    length: password.length,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSymbols: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    hasCommonPatterns: COMMON_PATTERNS.some(pattern => pattern.test(password)),
    isCommonPassword: COMMON_PASSWORDS.has(password.toLowerCase()),
    feedback: [],
    crackTime: 'instant'
  };

  // Calculate base score
  let score = 0;
  
  // Length scoring
  if (analysis.length >= 8) score += 20;
  if (analysis.length >= 12) score += 10;
  if (analysis.length >= 16) score += 10;
  
  // Character variety scoring
  if (analysis.hasUppercase) score += 10;
  if (analysis.hasLowercase) score += 10;
  if (analysis.hasNumbers) score += 10;
  if (analysis.hasSymbols) score += 15;
  
  // Entropy bonus
  if (analysis.entropy > 40) score += 15;
  if (analysis.entropy > 60) score += 10;
  
  // Penalties
  if (analysis.isCommonPassword) score -= 40;
  if (analysis.hasCommonPatterns) score -= 20;
  if (analysis.length < 8) score -= 30;
  
  // Ensure score is between 0 and 100
  analysis.score = Math.max(0, Math.min(100, score));
  
  // Determine strength level
  if (analysis.score < 20) analysis.strength = 'very-weak';
  else if (analysis.score < 40) analysis.strength = 'weak';
  else if (analysis.score < 60) analysis.strength = 'fair';
  else if (analysis.score < 80) analysis.strength = 'good';
  else analysis.strength = 'strong';
  
  // Generate feedback
  analysis.feedback = generateFeedback(analysis);
  
  // Calculate crack time
  analysis.crackTime = calculateCrackTime(analysis.entropy);
  
  return analysis;
}

function calculateEntropy(password: string): number {
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/\d/.test(password)) charset += 10;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) charset += 32;
  
  return Math.log2(Math.pow(charset, password.length));
}

function generateFeedback(analysis: PasswordAnalysis): string[] {
  const feedback: string[] = [];
  
  if (analysis.length < 8) {
    feedback.push('Password should be at least 8 characters long');
  } else if (analysis.length >= 12) {
    feedback.push('Good password length');
  }
  
  if (!analysis.hasUppercase) {
    feedback.push('Add uppercase letters (A-Z)');
  }
  
  if (!analysis.hasLowercase) {
    feedback.push('Add lowercase letters (a-z)');
  }
  
  if (!analysis.hasNumbers) {
    feedback.push('Add numbers (0-9)');
  }
  
  if (!analysis.hasSymbols) {
    feedback.push('Add special characters (!@#$%^&*)');
  }
  
  if (analysis.isCommonPassword) {
    feedback.push('This is a commonly used password - avoid it');
  }
  
  if (analysis.hasCommonPatterns) {
    feedback.push('Avoid predictable patterns like "123" or "abc"');
  }
  
  if (analysis.score >= 80) {
    feedback.push('Excellent password strength!');
  }
  
  return feedback;
}

function calculateCrackTime(entropy: number): string {
  const attempts = Math.pow(2, entropy - 1); // Average case
  const attemptsPerSecond = 1e9; // 1 billion attempts per second
  const seconds = attempts / attemptsPerSecond;
  
  if (seconds < 1) return 'instant';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} years`;
  return 'centuries';
}
