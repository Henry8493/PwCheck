export interface PasswordAnalysis {
  score: number;
  strength: 'very-weak' | 'weak' | 'fair' | 'good' | 'strong';
  entropy: number;
  length: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  hasCommonPatterns: boolean;
  isCommonPassword: boolean;
  feedback: string[];
  crackTime: string;
}

export interface ComplianceResult {
  standard: string;
  passed: boolean;
  score: number;
  requirements: ComplianceRequirement[];
  feedback: string;
}

export interface ComplianceRequirement {
  description: string;
  passed: boolean;
  severity: 'error' | 'warning' | 'info';
}

export interface GeneratorOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}

export type ComplianceStandard = 'NIST' | 'GDPR' | 'ISO27001' | 'PCI-DSS';
