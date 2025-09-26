import { PasswordAnalysis } from '@/types/password';

const COMMON_PASSWORDS = new Set([
  // Top 50 most common passwords from breaches
  'password', '123456', '12345678', 'qwerty', 'abc123', 'password123',
  'admin', 'letmein', 'welcome', 'monkey', '1234567890', 'iloveyou',
  'password1', '123456789', 'football', 'baseball', 'welcome123',
  'superman', 'batman', 'master', 'hello', 'login', 'passw0rd',
  'trustno1', 'dragon', 'shadow', 'michael', 'jennifer', 'jordan',
  'hunter', 'fuckyou', '000000', 'sunshine', 'princess', 'charlie',
  'aa123456', 'donald', 'freedom', 'whatever', 'qwertyuiop', 'zxcvbnm',
  'asdfgh', 'harley', 'robert', 'matthew', 'daniel', 'abc123456',
  'michelle', 'mindy', 'patrick', 'computer', 'hockey', 'startrek'
]);

const COMMON_PATTERNS = [
  /(.)\1{2,}/,                    // Repeated characters (aaa, 111)
  /123|234|345|456|567|678|789|890|901|012/,  // Sequential numbers
  /987|876|765|654|543|432|321|210|109|098/,  // Reverse sequential numbers
  /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i, // Sequential letters
  /zyx|yxw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|jih|ihg|hgf|gfe|fed|edc|dcb|cba/i, // Reverse sequential letters
  /qwer|wert|erty|rtyu|tyui|yuio|uiop|asdf|sdfg|dfgh|fghj|ghjk|hjkl|zxcv|xcvb|cvbn|vbnm/i, // Keyboard patterns
  /poiu|oiuy|iuyt|uytr|ytre|trew|rewq|lkjh|kjhg|jhgf|hgfd|gfds|fdsa|mnbv|nbvc|bvcx|vcxz/i, // Reverse keyboard patterns
  /\b(password|pass|pwd)\b/i, // Specific password-related patterns
  /^\d{4,8}$/,                    // Only digits (4-8 chars)
  /^[a-z]+$/i,                    // Only letters
  /\b(19|20)\d{2}\b/,             // Years (1900-2099)
  /\b(0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])[-/]\d{2,4}\b/, // Dates
  /^(.{1,3})\1+$/,                // Short repeated patterns
];

function containsDictionaryWords(password: string): boolean {
  const lowerPassword = password.toLowerCase();
  const commonWords = ['password', 'admin', 'login', 'user', 'guest', 'test', 'demo', 'root', 'pass', 'word', 'secret', 'private', 'master', 'super', 'access'];
  
  return commonWords.some(word => lowerPassword.includes(word));
}

function findDictionaryWords(password: string): string[] {
  const lowerPassword = password.toLowerCase();
  const commonWords = ['password', 'admin', 'login', 'user', 'guest', 'test', 'demo', 'root', 'pass', 'word', 'secret', 'private', 'master', 'super', 'access'];
  
  return commonWords.filter(word => lowerPassword.includes(word));
}

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
      hasDictionaryWords: false,
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
    hasDictionaryWords: containsDictionaryWords(password),
    feedback: [],
    crackTime: 'instant'
  };

  // Calculate sophisticated score based on entropy and security factors
  let score = calculateAdvancedScore(analysis);
  
  // Ensure score is between 0 and 100
  analysis.score = Math.max(0, Math.min(100, score));
  
  // Determine strength level
  if (analysis.score < 20) analysis.strength = 'very-weak';
  else if (analysis.score < 40) analysis.strength = 'weak';
  else if (analysis.score < 60) analysis.strength = 'fair';
  else if (analysis.score < 80) analysis.strength = 'good';
  else analysis.strength = 'strong';
  
  // Generate feedback
  analysis.feedback = generateFeedback(analysis, password);
  
  // Calculate crack time
  analysis.crackTime = calculateCrackTime(analysis.entropy);
  
  return analysis;
}

function calculateEntropy(password: string): number {
  // Advanced entropy calculation considering patterns and predictability
  let baseEntropy = calculateBaseEntropy(password);
  let patternPenalty = calculatePatternPenalty(password);
  let repetitionPenalty = calculateRepetitionPenalty(password);
  let dictionaryPenalty = calculateDictionaryPenalty(password);
  
  // Apply penalties to reduce entropy for predictable passwords
  let adjustedEntropy = baseEntropy - patternPenalty - repetitionPenalty - dictionaryPenalty;
  
  return Math.max(0, adjustedEntropy);
}

function calculateBaseEntropy(password: string): number {
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/\d/.test(password)) charset += 10;
  if (/[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\|;':\",.<>?~`]/.test(password)) charset += 32;
  if (/[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>_+\-=\[\]\\|;':\",.<>?~`]/.test(password)) charset += 20; // Extended unicode
  
  return Math.log2(Math.pow(charset, password.length));
}

function calculatePatternPenalty(password: string): number {
  let penalty = 0;
  
  // Sequential patterns penalty
  if (/123|234|345|456|567|678|789|890|901|012/.test(password)) penalty += 10;
  if (/987|876|765|654|543|432|321|210|109|098/.test(password)) penalty += 10;
  if (/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i.test(password)) penalty += 8;
  
  // Keyboard patterns penalty
  if (/qwer|asdf|zxcv|qaz|wsx|edc/i.test(password)) penalty += 12;
  
  // Date patterns penalty
  if (/\b(19|20)\d{2}\b/.test(password)) penalty += 8;
  if (/\b(0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])[-/]\d{2,4}\b/.test(password)) penalty += 10;
  
  return penalty;
}

function calculateRepetitionPenalty(password: string): number {
  let penalty = 0;
  let charCounts = new Map<string, number>();
  
  // Count character frequency
  for (let char of password.toLowerCase()) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  
  // Penalty for repeated characters
  Array.from(charCounts.entries()).forEach(([char, count]) => {
    if (count > 2) {
      penalty += (count - 2) * 2; // Increase penalty for excessive repetition
    }
  });
  
  // Penalty for repeated sequences
  const repeatedSequences = password.match(/(.{2,})\1+/g);
  if (repeatedSequences) {
    penalty += repeatedSequences.length * 5;
  }
  
  return penalty;
}

function calculateDictionaryPenalty(password: string): number {
  let penalty = 0;
  const lowerPassword = password.toLowerCase();
  
  // Check for common words and substrings
  const commonWords = ['password', 'admin', 'login', 'user', 'guest', 'test', 'demo', 'root', 'pass', 'word', 'secret', 'private', 'master', 'super', 'access'];
  
  for (let word of commonWords) {
    if (lowerPassword.includes(word)) {
      penalty += word.length * 2; // Penalty proportional to word length
    }
  }
  
  // Check for common number sequences
  const commonNumbers = ['123', '456', '789', '000', '111', '222', '333', '444', '555', '666', '777', '888', '999'];
  for (let num of commonNumbers) {
    if (password.includes(num)) {
      penalty += 3;
    }
  }
  
  return penalty;
}

function generateFeedback(analysis: PasswordAnalysis, password: string): string[] {
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
  
  // Enhanced feedback for dictionary words
  if (analysis.hasDictionaryWords) {
    const foundWords = findDictionaryWords(password);
    if (foundWords.length > 0) {
      feedback.push(`Contains common word${foundWords.length > 1 ? 's' : ''}: ${foundWords.join(', ')}`);
    }
  } else if (analysis.isCommonPassword && !analysis.hasCommonPatterns) {
    // Only show generic common password message if no specific patterns or dictionary words detected
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

function calculateAdvancedScore(analysis: PasswordAnalysis): number {
  let score = 0;
  
  // Entropy-based scoring (primary factor)
  if (analysis.entropy >= 80) score += 40;
  else if (analysis.entropy >= 60) score += 35;
  else if (analysis.entropy >= 40) score += 25;
  else if (analysis.entropy >= 25) score += 15;
  else score += Math.max(0, analysis.entropy * 0.5);
  
  // Length scoring with diminishing returns
  const lengthScore = Math.min(25, Math.max(0, (analysis.length - 4) * 2));
  score += lengthScore;
  
  // Character variety bonus
  let varietyBonus = 0;
  if (analysis.hasLowercase) varietyBonus += 5;
  if (analysis.hasUppercase) varietyBonus += 5;
  if (analysis.hasNumbers) varietyBonus += 5;
  if (analysis.hasSymbols) varietyBonus += 10;
  
  // Bonus for using all character types
  if (analysis.hasLowercase && analysis.hasUppercase && analysis.hasNumbers && analysis.hasSymbols) {
    varietyBonus += 10;
  }
  score += varietyBonus;
  
  // Severe penalties for security issues
  if (analysis.isCommonPassword) score -= 50;
  if (analysis.hasCommonPatterns) score -= 25;
  if (analysis.length < 8) score -= 20;
  
  // Additional entropy-based adjustments
  if (analysis.entropy < 20) score -= 15;
  if (analysis.entropy > 100) score += 5; // Bonus for extremely high entropy
  
  return score;
}

function calculateCrackTime(entropy: number): string {
  // More realistic crack time calculation considering modern hardware
  const attempts = Math.pow(2, entropy - 1); // Average case
  
  // Different attack scenarios
  const scenarios = {
    online: 1e3,     // 1,000 attempts/sec (rate limited)
    offline: 1e10,   // 10 billion attempts/sec (modern GPU)
    massive: 1e12    // 1 trillion attempts/sec (botnet/specialized hardware)
  };
  
  // Use offline scenario as default (most common for stolen hashes)
  const attemptsPerSecond = scenarios.offline;
  const seconds = attempts / attemptsPerSecond;
  
  if (seconds < 1) return 'instant';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 86400 * 30) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 86400 * 365) return `${Math.round(seconds / (86400 * 30))} months`;
  if (seconds < 86400 * 365 * 100) return `${Math.round(seconds / (86400 * 365))} years`;
  if (seconds < 86400 * 365 * 1000) return `${Math.round(seconds / (86400 * 365))} years`;
  return 'millennia';
}
