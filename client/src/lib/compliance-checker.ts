import { ComplianceResult, ComplianceRequirement, PasswordAnalysis, ComplianceStandard } from '@/types/password';

export function checkCompliance(password: string, analysis: PasswordAnalysis, standard: ComplianceStandard): ComplianceResult {
  switch (standard) {
    case 'NIST':
      return checkNISTCompliance(password, analysis);
    case 'GDPR':
      return checkGDPRCompliance(password, analysis);
    case 'ISO27001':
      return checkISO27001Compliance(password, analysis);
    case 'PCI-DSS':
      return checkPCIDSSCompliance(password, analysis);
    default:
      throw new Error(`Unknown compliance standard: ${standard}`);
  }
}

function checkNISTCompliance(password: string, analysis: PasswordAnalysis): ComplianceResult {
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Minimum 8 characters',
      passed: analysis.length >= 8,
      severity: analysis.length >= 8 ? 'info' : 'error'
    },
    {
      description: 'Maximum 64 characters',
      passed: analysis.length <= 64,
      severity: analysis.length <= 64 ? 'info' : 'error'
    },
    {
      description: analysis.hasDictionaryWords ? 'Avoid dictionary words in passwords' : 
                  analysis.hasCommonPatterns ? 'Avoid predictable password patterns' :
                  'Not a common password',
      passed: !analysis.isCommonPassword && !analysis.hasDictionaryWords && !analysis.hasCommonPatterns,
      severity: (analysis.isCommonPassword || analysis.hasDictionaryWords || analysis.hasCommonPatterns) ? 'error' : 'info'
    },
    {
      description: 'No composition rules enforced',
      passed: true,
      severity: 'info'
    }
  ];

  const passed = requirements.every(req => req.passed);
  const score = (requirements.filter(req => req.passed).length / requirements.length) * 100;

  return {
    standard: 'NIST SP 800-63B',
    passed,
    score,
    requirements,
    feedback: passed ? 'Password meets all NIST requirements' : 'Password fails NIST requirements'
  };
}

function checkGDPRCompliance(password: string, analysis: PasswordAnalysis): ComplianceResult {
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Appropriate security measures',
      passed: analysis.score >= 60,
      severity: analysis.score >= 60 ? 'info' : 'warning'
    },
    {
      description: 'Personal data protection',
      passed: analysis.length >= 10,
      severity: analysis.length >= 10 ? 'info' : 'warning'
    },
    {
      description: 'Risk-based approach',
      passed: analysis.entropy >= 40,
      severity: analysis.entropy >= 40 ? 'info' : 'warning'
    }
  ];

  const passed = requirements.every(req => req.passed);
  const score = (requirements.filter(req => req.passed).length / requirements.length) * 100;

  return {
    standard: 'GDPR Requirements',
    passed,
    score,
    requirements,
    feedback: passed ? 'Password meets GDPR requirements' : 'Password needs improvement for GDPR compliance'
  };
}

function checkISO27001Compliance(password: string, analysis: PasswordAnalysis): ComplianceResult {
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Minimum 8 characters',
      passed: analysis.length >= 8,
      severity: analysis.length >= 8 ? 'info' : 'error'
    },
    {
      description: 'Mixed case letters',
      passed: analysis.hasUppercase && analysis.hasLowercase,
      severity: (analysis.hasUppercase && analysis.hasLowercase) ? 'info' : 'error'
    },
    {
      description: 'Contains numbers',
      passed: analysis.hasNumbers,
      severity: analysis.hasNumbers ? 'info' : 'error'
    },
    {
      description: 'Contains special characters',
      passed: analysis.hasSymbols,
      severity: analysis.hasSymbols ? 'info' : 'warning'
    },
    {
      description: 'No common patterns',
      passed: !analysis.hasCommonPatterns,
      severity: analysis.hasCommonPatterns ? 'warning' : 'info'
    }
  ];

  const passed = requirements.filter(req => req.severity === 'error').every(req => req.passed);
  const score = (requirements.filter(req => req.passed).length / requirements.length) * 100;

  return {
    standard: 'ISO 27001',
    passed,
    score,
    requirements,
    feedback: passed ? 'Password meets ISO 27001 requirements' : 'Password fails ISO 27001 requirements'
  };
}

function checkPCIDSSCompliance(password: string, analysis: PasswordAnalysis): ComplianceResult {
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Minimum 7 characters',
      passed: analysis.length >= 7,
      severity: analysis.length >= 7 ? 'info' : 'error'
    },
    {
      description: 'Contains numeric characters',
      passed: analysis.hasNumbers,
      severity: analysis.hasNumbers ? 'info' : 'error'
    },
    {
      description: 'Contains alphabetic characters',
      passed: analysis.hasUppercase || analysis.hasLowercase,
      severity: (analysis.hasUppercase || analysis.hasLowercase) ? 'info' : 'error'
    },
    {
      description: 'Unique password required',
      passed: !analysis.isCommonPassword,
      severity: analysis.isCommonPassword ? 'error' : 'info'
    }
  ];

  const passed = requirements.every(req => req.passed);
  const score = (requirements.filter(req => req.passed).length / requirements.length) * 100;

  return {
    standard: 'PCI DSS',
    passed,
    score,
    requirements,
    feedback: passed ? 'Password meets PCI DSS requirements' : 'Password fails PCI DSS requirements'
  };
}
