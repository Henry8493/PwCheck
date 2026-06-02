export type PasswordImplementationGrade = 'A' | 'B' | 'C' | 'D' | 'F';

export type PasswordImplementationSeverity = 'pass' | 'info' | 'warning' | 'fail';

export interface PasswordImplementationCheck {
  id: string;
  label: string;
  severity: PasswordImplementationSeverity;
  points: number;
  maxPoints: number;
  summary: string;
  recommendation: string;
  evidence?: string;
}

export interface PasswordImplementationScanResult {
  inputUrl: string;
  scannedUrl: string;
  finalUrl: string;
  fetchedAt: string;
  grade: PasswordImplementationGrade;
  score: number;
  formsFound: number;
  passwordFieldsFound: number;
  checks: PasswordImplementationCheck[];
  highlights: string[];
  limitations: string[];
}

export interface PasswordImplementationScanRequest {
  url: string;
}
