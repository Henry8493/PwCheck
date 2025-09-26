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
  // NIST SP 800-63B §5.1.1.2 establishes minimum length guidance and
  // §5.1.1.2/§5.1.1.1 require screening against common passwords.
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Minimum 8 characters (NIST SP 800-63B §5.1.1.2)',
      passed: analysis.length >= 8,
      severity: analysis.length >= 8 ? 'info' : 'error'
    },
    {
      description: 'Accept at least 64 characters (NIST SP 800-63B §5.1.1.2)',
      passed: analysis.length <= 64,
      severity: analysis.length <= 64 ? 'info' : 'error'
    },
    {
      description: analysis.hasDictionaryWords ?
        'Avoid dictionary words in passwords (NIST SP 800-63B §5.1.1.2)' :
        analysis.hasCommonPatterns ?
          'Avoid predictable password patterns (NIST SP 800-63B §5.1.1.2)' :
          'Not found in common password lists (NIST SP 800-63B §5.1.1.2)',
      passed: !analysis.isCommonPassword && !analysis.hasDictionaryWords && !analysis.hasCommonPatterns,
      severity: (analysis.isCommonPassword || analysis.hasDictionaryWords || analysis.hasCommonPatterns) ? 'error' : 'info'
    },
    {
      description: 'No composition rules enforced',
      passed: true,
      severity: 'info'
    }
  ];

  const blockingRequirements = requirements.filter(req => req.severity !== 'info');
  const passed = blockingRequirements.every(req => req.passed);
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
  // GDPR Article 32 emphasises "appropriate security" proportional to risk, so we
  // surface these thresholds as warnings instead of hard failures.
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Appropriate security measures (GDPR Article 32)',
      passed: analysis.score >= 60,
      severity: analysis.score >= 60 ? 'info' : 'warning'
    },
    {
      description: 'Personal data protection (GDPR Articles 5 & 32)',
      passed: analysis.length >= 10,
      severity: analysis.length >= 10 ? 'info' : 'warning'
    },
    {
      description: 'Risk-based strength aligned to data sensitivity (GDPR Article 32)',
      passed: analysis.entropy >= 40,
      severity: analysis.entropy >= 40 ? 'info' : 'warning'
    }
  ];

  const blockingRequirements = requirements.filter(req => req.severity !== 'info');
  const passed = blockingRequirements.every(req => req.passed);
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
  // ISO/IEC 27001 Annex A (A.9.4.3, A.9.2.4) expects organisations to define
  // risk-based password controls. We expose recommended baselines as warnings.
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Policy-defined length (recommend ≥12 characters for privileged access - ISO/IEC 27002 Control 5.17)',
      passed: analysis.length >= 12,
      severity: analysis.length >= 12 ? 'info' : 'warning'
    },
    {
      description: 'Mixed case letters aligned with classification (ISO/IEC 27001 A.9.4.3)',
      passed: analysis.hasUppercase && analysis.hasLowercase,
      severity: (analysis.hasUppercase && analysis.hasLowercase) ? 'info' : 'warning'
    },
    {
      description: 'Includes numbers for stronger verification (ISO/IEC 27002 Control 5.17)',
      passed: analysis.hasNumbers,
      severity: analysis.hasNumbers ? 'info' : 'warning'
    },
    {
      description: 'Special characters where justified by risk (ISO/IEC 27002 Control 5.17)',
      passed: analysis.hasSymbols,
      severity: analysis.hasSymbols ? 'info' : 'warning'
    },
    {
      description: 'Avoid common or predictable patterns (ISO/IEC 27001 A.9.2.4)',
      passed: !analysis.hasCommonPatterns,
      severity: analysis.hasCommonPatterns ? 'warning' : 'info'
    }
  ];

  const blockingRequirements = requirements.filter(req => req.severity !== 'info');
  const passed = blockingRequirements.every(req => req.passed);
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
  // PCI DSS v4.0 Requirement 8.3.6 raises the minimum length to 12 characters
  // and requires both alphabetic and numeric characters for user passwords.
  const requirements: ComplianceRequirement[] = [
    {
      description: 'Minimum 12 characters (PCI DSS v4.0 Req. 8.3.6)',
      passed: analysis.length >= 12,
      severity: analysis.length >= 12 ? 'info' : 'error'
    },
    {
      description: 'Contains numeric characters (PCI DSS v4.0 Req. 8.3.6)',
      passed: analysis.hasNumbers,
      severity: analysis.hasNumbers ? 'info' : 'error'
    },
    {
      description: 'Contains alphabetic characters (PCI DSS v4.0 Req. 8.3.6)',
      passed: analysis.hasUppercase || analysis.hasLowercase,
      severity: (analysis.hasUppercase || analysis.hasLowercase) ? 'info' : 'error'
    },
    {
      description: 'Unique password required (PCI DSS v4.0 Req. 8.3.5)',
      passed: !analysis.isCommonPassword,
      severity: analysis.isCommonPassword ? 'error' : 'info'
    },
    {
      description: 'Change credentials if compromise suspected (PCI DSS v4.0 Req. 8.3.7)',
      passed: true,
      severity: 'info'
    }
  ];

  const blockingRequirements = requirements.filter(req => req.severity !== 'info');
  const passed = blockingRequirements.every(req => req.passed);
  const score = (requirements.filter(req => req.passed).length / requirements.length) * 100;

  return {
    standard: 'PCI DSS',
    passed,
    score,
    requirements,
    feedback: passed ? 'Password meets PCI DSS requirements' : 'Password fails PCI DSS requirements'
  };
}
