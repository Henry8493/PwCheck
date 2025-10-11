export type FaqCategory =
  | 'Password Basics'
  | 'Password Creation'
  | 'Password Management'
  | 'Security & Threats'
  | 'Account Recovery'
  | 'Compliance & Policy'
  | 'Passkeys & FIDO2'
  | 'Multi-Factor Authentication'
  | 'Password Managers'
  | 'Threats & Hygiene'
  | 'Special Situations'
  | 'Recovery & Safety Nets'
  | 'Organizations & Developers'
  | 'Compliance & Governance'
  | 'Myths & UX'
  | 'Site Transparency';

export interface FaqEntry {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  keyTakeaways: string[];
  relatedQuestions: string[];
  tags: string[];
}
