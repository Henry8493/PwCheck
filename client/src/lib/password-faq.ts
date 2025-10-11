import { FaqCategory, FaqEntry } from '@/types/faq';

const FAQ_ENTRIES: ReadonlyArray<FaqEntry> = [
  {
    id: 'what-makes-password-strong',
    category: 'Password Basics',
    question: 'What makes a password strong?',
    answer:
      'A strong password is long (at least 12–16 characters), unpredictable, and unique to each account. Mixing upper and lowercase letters, numbers, and symbols increases entropy, while avoiding common words, keyboard patterns, and personal details reduces the chance of guessing or brute-force attacks.',
    keyTakeaways: [
      'Aim for a minimum of 12–16 characters',
      'Avoid personal information and common patterns',
      'Use a mix of character types for higher entropy'
    ],
    relatedQuestions: [
      'are-password-length-or-complexity-more-important',
      'should-i-use-password-phrases'
    ],
    tags: ['strength', 'entropy', 'complexity', 'best practices']
  },
  {
    id: 'are-password-length-or-complexity-more-important',
    category: 'Password Basics',
    question: 'Is password length more important than complexity?',
    answer:
      'Length provides the biggest security gain because every additional character exponentially increases the number of possible combinations. Complexity still matters, but a long passphrase made of unrelated words can be stronger and easier to remember than a short password packed with symbols.',
    keyTakeaways: [
      'Prioritize length first, then add complexity',
      'Long passphrases are often stronger than short complex passwords',
      'Avoid predictable substitutions like 0 for o or 3 for e'
    ],
    relatedQuestions: [
      'what-makes-password-strong',
      'should-i-use-password-phrases'
    ],
    tags: ['length', 'passphrase', 'complexity']
  },
  {
    id: 'should-i-use-password-phrases',
    category: 'Password Creation',
    question: 'Should I use a passphrase instead of a traditional password?',
    answer:
      'Passphrases built from unrelated words are easier to remember and provide high entropy because of their length. Choose at least four or five random words, include punctuation or numbers if allowed, and avoid famous quotes or song lyrics that appear in attacker dictionaries.',
    keyTakeaways: [
      'Use multiple random words to create memorable but strong passphrases',
      'Avoid common phrases or pop-culture references',
      'Add separators, numbers, or symbols when supported'
    ],
    relatedQuestions: [
      'what-makes-password-strong',
      'how-often-to-change-passwords'
    ],
    tags: ['passphrase', 'memorability', 'entropy']
  },
  {
    id: 'how-often-to-change-passwords',
    category: 'Password Management',
    question: 'How often should I change my passwords?',
    answer:
      'Modern guidance recommends changing passwords when you suspect compromise, when prompted after a breach, or when sharing access is no longer necessary. Frequent scheduled resets can lead to weaker, predictable passwords. Instead, rely on unique passwords stored in a manager and rotate only when risk changes.',
    keyTakeaways: [
      'Change passwords after suspected compromise or exposure',
      'Avoid forced frequent resets that encourage weak patterns',
      'Use unique passwords so a single breach does not impact other accounts'
    ],
    relatedQuestions: [
      'how-to-know-password-compromised',
      'do-i-need-password-manager'
    ],
    tags: ['rotation', 'best practices', 'breach response']
  },
  {
    id: 'do-i-need-password-manager',
    category: 'Password Management',
    question: 'Do I really need a password manager?',
    answer:
      'Password managers securely store and autofill unique passwords for every site, reducing the temptation to reuse credentials. They encrypt your vault with a master password and many offer breach monitoring and secure sharing, making it easier to maintain strong hygiene across dozens of accounts.',
    keyTakeaways: [
      'Managers help maintain unique, complex passwords across accounts',
      'Choose a reputable manager with strong encryption and multi-factor support',
      'Secure the vault with a long master password and enable MFA'
    ],
    relatedQuestions: [
      'how-to-store-passwords-safely',
      'how-to-know-password-compromised'
    ],
    tags: ['password manager', 'storage', 'best practices']
  },
  {
    id: 'how-to-store-passwords-safely',
    category: 'Password Management',
    question: 'What is the safest way to store my passwords?',
    answer:
      'Use a trusted password manager that encrypts data locally before syncing. Avoid writing passwords in plain text documents or email drafts. If you must record a recovery key offline, store it in a secure location such as a safe deposit box.',
    keyTakeaways: [
      'Prefer encrypted password managers over spreadsheets or notes',
      'Protect backups and recovery keys in secure offline locations',
      'Enable multi-factor authentication for the manager itself'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'what-is-mfa'
    ],
    tags: ['storage', 'encryption', 'password manager']
  },
  {
    id: 'what-is-mfa',
    category: 'Security & Threats',
    question: 'What is multi-factor authentication (MFA) and why does it matter?',
    answer:
      'MFA requires something you know (a password) plus something you have or are (like a phone prompt or security key). Even if attackers learn your password, they cannot sign in without the second factor, dramatically reducing account takeover risk.',
    keyTakeaways: [
      'Enable MFA wherever available, especially for email and financial accounts',
      'Prioritize phishing-resistant factors such as authenticator apps or security keys',
      'Keep backup codes in a secure offline location'
    ],
    relatedQuestions: [
      'how-to-spot-phishing',
      'how-to-recover-account-lost-mfa'
    ],
    tags: ['mfa', 'two-factor', 'security']
  },
  {
    id: 'how-to-spot-phishing',
    category: 'Security & Threats',
    question: 'How can I tell if a request for my password is a phishing attempt?',
    answer:
      'Phishing attempts often create urgency, use mismatched sender addresses, or direct you to unfamiliar URLs. Always verify the domain, avoid clicking suspicious links, and never share passwords over email or chat. When unsure, navigate to the site directly or contact support using trusted channels.',
    keyTakeaways: [
      'Inspect URLs and sender details before entering credentials',
      'Be wary of urgent or threatening language demanding immediate action',
      'Use browser password managers or security keys to block fraudulent sites'
    ],
    relatedQuestions: [
      'what-is-mfa',
      'how-to-know-password-compromised'
    ],
    tags: ['phishing', 'social engineering', 'threats']
  },
  {
    id: 'how-to-know-password-compromised',
    category: 'Security & Threats',
    question: 'How can I tell if my password has been compromised?',
    answer:
      'Monitor breach-notification emails, enable alerts from your password manager, and use services that check if your email appears in known data breaches. Unexpected login alerts, password reset emails you did not request, or new devices in account activity logs are warning signs that require immediate password changes.',
    keyTakeaways: [
      'Watch for breach notifications and unexpected account activity',
      'Change compromised passwords immediately and enable MFA',
      'Do not reuse breached passwords on other accounts'
    ],
    relatedQuestions: [
      'how-often-to-change-passwords',
      'what-to-do-after-breach'
    ],
    tags: ['breach', 'monitoring', 'security alerts']
  },
  {
    id: 'what-to-do-after-breach',
    category: 'Account Recovery',
    question: 'What should I do after a password breach?',
    answer:
      'Change the affected password right away, enable multi-factor authentication, and review account activity for unauthorized changes. If the password was reused, update it everywhere else and monitor associated financial or personal accounts for suspicious transactions.',
    keyTakeaways: [
      'Reset breached passwords immediately and unique replacements',
      'Enable MFA and verify recovery information',
      'Monitor financial and email accounts for suspicious behavior'
    ],
    relatedQuestions: [
      'how-to-know-password-compromised',
      'how-to-recover-account-lost-mfa'
    ],
    tags: ['breach', 'incident response', 'recovery']
  },
  {
    id: 'how-to-recover-account-lost-mfa',
    category: 'Account Recovery',
    question: 'How do I regain access if I lose my MFA device?',
    answer:
      'Use backup codes, hardware keys, or secondary authenticators you saved during setup. If those are unavailable, contact the service provider with verification documents. After recovery, replace lost devices, update backup factors, and remove any unrecognized trusted devices.',
    keyTakeaways: [
      'Store backup codes securely when enabling MFA',
      'Register multiple authenticators when possible',
      'Review trusted devices and update recovery information after regaining access'
    ],
    relatedQuestions: [
      'what-is-mfa',
      'what-to-do-after-breach'
    ],
    tags: ['mfa', 'recovery', 'account access']
  },
  {
    id: 'do-passwords-need-compliance',
    category: 'Compliance & Policy',
    question: 'Do my passwords need to meet compliance standards like NIST or PCI DSS?',
    answer:
      'If you handle regulated data, aligning with frameworks such as NIST SP 800-63B or PCI DSS helps satisfy audit requirements. These standards emphasize minimum lengths, screening against breach lists, and user-friendly policies that avoid forced periodic resets unless compromise is suspected.',
    keyTakeaways: [
      'Follow the standards relevant to your industry or data type',
      'Adopt minimum length, breach screening, and MFA controls',
      'Document your policies to demonstrate compliance during audits'
    ],
    relatedQuestions: [
      'how-often-to-change-passwords',
      'are-password-length-or-complexity-more-important'
    ],
    tags: ['compliance', 'policy', 'standards']
  }
];

const FAQ_INDEX = new Map(FAQ_ENTRIES.map(entry => [entry.id, entry]));

export function getAllPasswordFaqs(): FaqEntry[] {
  return [...FAQ_ENTRIES];
}

export function getPasswordFaqById(id: string): FaqEntry | undefined {
  return FAQ_INDEX.get(id);
}

export function getPasswordFaqsByCategory(category: FaqCategory): FaqEntry[] {
  return FAQ_ENTRIES.filter(entry => entry.category === category);
}

export function searchPasswordFaqs(query: string): FaqEntry[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [...FAQ_ENTRIES];
  }

  return FAQ_ENTRIES.filter(entry => {
    const haystacks = [
      entry.question,
      entry.answer,
      entry.category,
      ...entry.keyTakeaways,
      ...entry.tags
    ].map(value => value.toLowerCase());

    return haystacks.some(value => value.includes(normalizedQuery));
  });
}

export function getRelatedPasswordFaqs(id: string, limit = 3): FaqEntry[] {
  const current = FAQ_INDEX.get(id);
  if (!current) {
    return [];
  }

  const relatedIds = new Set(current.relatedQuestions);

  const directMatches = FAQ_ENTRIES.filter(entry => relatedIds.has(entry.id));

  if (directMatches.length >= limit) {
    return directMatches.slice(0, limit);
  }

  const additionalMatches = FAQ_ENTRIES.filter(entry =>
    entry.id !== id &&
    entry.category === current.category &&
    !relatedIds.has(entry.id)
  );

  return [...directMatches, ...additionalMatches].slice(0, limit);
}

export function getPasswordFaqCategories(): FaqCategory[] {
  return Array.from(new Set(FAQ_ENTRIES.map(entry => entry.category)));
}
