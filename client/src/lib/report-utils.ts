import { PasswordAnalysis, ComplianceResult } from '@/types/password';

/**
 * Shareable report data structure
 * This contains all analysis data EXCEPT the actual password
 */
export interface ShareableReportData {
  timestamp: number;
  analysis: {
    score: number;
    strength: PasswordAnalysis['strength'];
    entropy: number;
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    hasCommonPatterns: boolean;
    isCommonPassword: boolean;
    hasDictionaryWords: boolean;
    crackTime: string;
    breachCheck?: {
      isBreached: boolean;
      breachCount: number;
    };
  };
  compliance?: {
    standard: string;
    passed: boolean;
    score: number;
    feedback: string;
  };
}

/**
 * Sanitize compliance feedback to remove any password-derived strings
 * This ensures that shared reports never contain actual password content
 * @param feedback - Original compliance feedback
 * @param passed - Whether compliance check passed
 * @returns Sanitized generic feedback
 */
function sanitizeComplianceFeedback(feedback: string, passed: boolean): string {
  // If passed, return a generic success message
  if (passed) {
    return 'Password meets all requirements for this compliance standard.';
  }
  
  // For failed compliance, return generic guidance without password specifics
  // Remove any specific password content while keeping the general category of issue
  const genericFeedback = feedback
    .replace(/contains? (the )?(word|pattern|sequence|substring) ["'].*?["']/gi, 'contains predictable patterns')
    .replace(/replace ["'].*?["'] with/gi, 'replace predictable elements with')
    .replace(/avoid using ["'].*?["']/gi, 'avoid using predictable content')
    .replace(/\b\d{2,}\b/g, 'N') // Replace specific numbers with N
    .replace(/["'][^"']{1,20}["']/g, "'***'"); // Replace quoted strings with ***
  
  // If the feedback became too generic or empty, provide a standard message
  if (genericFeedback.trim().length < 20 || genericFeedback === feedback) {
    return 'Password does not meet all requirements. Consider using a longer password with mixed character types and avoiding common patterns.';
  }
  
  return genericFeedback;
}

/**
 * Create shareable report data from analysis results
 * @param analysis - Password analysis results
 * @param complianceResult - Optional compliance results
 * @returns Shareable report data object
 */
export function createReportData(
  analysis: PasswordAnalysis,
  complianceResult?: ComplianceResult | null
): ShareableReportData {
  return {
    timestamp: Date.now(),
    analysis: {
      score: analysis.score,
      strength: analysis.strength,
      entropy: analysis.entropy,
      length: analysis.length,
      hasUppercase: analysis.hasUppercase,
      hasLowercase: analysis.hasLowercase,
      hasNumbers: analysis.hasNumbers,
      hasSymbols: analysis.hasSymbols,
      hasCommonPatterns: analysis.hasCommonPatterns,
      isCommonPassword: analysis.isCommonPassword,
      hasDictionaryWords: analysis.hasDictionaryWords,
      crackTime: analysis.crackTime,
      breachCheck: analysis.breachCheck ? {
        isBreached: analysis.breachCheck.isBreached,
        breachCount: analysis.breachCheck.breachCount
      } : undefined
    },
    compliance: complianceResult ? {
      standard: complianceResult.standard,
      passed: complianceResult.passed,
      score: complianceResult.score,
      feedback: sanitizeComplianceFeedback(complianceResult.feedback, complianceResult.passed)
    } : undefined
  };
}

/**
 * Encode report data into a URL-safe string
 * @param reportData - Report data to encode
 * @returns Base64 URL-safe encoded string
 */
export function encodeReportData(reportData: ShareableReportData): string {
  const json = JSON.stringify(reportData);
  const base64 = btoa(json);
  // Make URL-safe by replacing + with -, / with _, and removing =
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * Decode report data from URL-safe string
 * @param encoded - Encoded report data string
 * @returns Decoded report data object or null if invalid
 */
export function decodeReportData(encoded: string): ShareableReportData | null {
  try {
    // Reverse URL-safe replacements
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }
    const json = atob(base64);
    const data = JSON.parse(json) as ShareableReportData;
    
    // Basic validation
    if (!data.timestamp || !data.analysis) {
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Failed to decode report data:', error);
    return null;
  }
}

/**
 * Generate shareable URL for a report
 * @param reportData - Report data
 * @returns Full shareable URL
 */
export function generateShareableUrl(reportData: ShareableReportData): string {
  const encoded = encodeReportData(reportData);
  const baseUrl = window.location.origin;
  return `${baseUrl}/report/${encoded}`;
}

/**
 * Format timestamp for display
 * @param timestamp - Unix timestamp
 * @returns Formatted date string
 */
export function formatReportDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Get a human-readable summary of the report
 * @param reportData - Report data
 * @returns Text summary suitable for copying
 */
export function getReportSummary(reportData: ShareableReportData): string {
  const { analysis, compliance } = reportData;
  
  const lines = [
    '🔒 Password Strength Report - SecureCheck',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `Overall Score: ${analysis.score}/100 (${analysis.strength.toUpperCase()})`,
    `Password Length: ${analysis.length} characters`,
    `Entropy: ${analysis.entropy.toFixed(2)} bits`,
    `Estimated Crack Time: ${analysis.crackTime}`,
    '',
    '✓ Character Types:',
    `  ${analysis.hasUppercase ? '✓' : '✗'} Uppercase letters`,
    `  ${analysis.hasLowercase ? '✓' : '✗'} Lowercase letters`,
    `  ${analysis.hasNumbers ? '✓' : '✗'} Numbers`,
    `  ${analysis.hasSymbols ? '✓' : '✗'} Special symbols`,
    '',
    '⚠ Security Checks:',
    `  ${analysis.isCommonPassword ? '✗ Common password detected' : '✓ Not a common password'}`,
    `  ${analysis.hasDictionaryWords ? '✗ Contains dictionary words' : '✓ No dictionary words'}`,
    `  ${analysis.hasCommonPatterns ? '✗ Contains common patterns' : '✓ No common patterns'}`,
  ];
  
  if (analysis.breachCheck) {
    lines.push('');
    if (analysis.breachCheck.isBreached) {
      lines.push(`🚨 Breach Check: Found in ${analysis.breachCheck.breachCount.toLocaleString()} data breaches`);
    } else {
      lines.push('✓ Breach Check: Not found in known breaches');
    }
  }
  
  if (compliance) {
    lines.push('');
    lines.push(`📋 ${compliance.standard} Compliance: ${compliance.passed ? 'PASSED ✓' : 'FAILED ✗'}`);
    lines.push(`   ${compliance.feedback}`);
  }
  
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Generated: ${formatReportDate(reportData.timestamp)}`);
  lines.push('Analyzed with SecureCheck - Professional Password Analyzer');
  
  return lines.join('\n');
}
