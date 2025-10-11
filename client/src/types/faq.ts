export type FaqCategory =
  | 'Password Basics'
  | 'Password Creation'
  | 'Password Management'
  | 'Security & Threats'
  | 'Account Recovery'
  | 'Compliance & Policy';

export interface FaqEntry {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  keyTakeaways: string[];
  relatedQuestions: string[];
  tags: string[];
}
