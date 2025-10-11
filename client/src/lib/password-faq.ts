import { FaqCategory, FaqEntry } from '@/types/faq';

const FAQ_ENTRIES: ReadonlyArray<FaqEntry> = [
  {
    id: 'what-makes-password-strong',
    category: 'Password Basics',
    question: 'What makes a password strong?',
    answer:
      'A strong password is long (at least 12–16 characters), unpredictable, and unique to each account so that one breach cannot cascade across your digital life. Mixing upper- and lowercase letters, numbers, and symbols increases entropy, while avoiding common words, keyboard patterns, and personal details reduces the chance of guessing or brute-force attacks. Password managers make it practical to generate and store these long combinations without needing to memorize them all.',
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
      'Length provides the biggest security gain because every additional character exponentially increases the number of possible combinations attackers must try. Complexity still matters, but a long passphrase made of unrelated words can be stronger and easier to remember than a short password packed with symbols. If you must choose, prioritize length first and then sprinkle in complexity that feels natural, such as punctuation or capitalization that does not follow predictable patterns.',
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
      'Passphrases built from unrelated words are easier to remember and provide high entropy because of their length, making them excellent choices for accounts you sign into frequently. Choose at least four or five random words, include punctuation or numbers if allowed, and avoid famous quotes or song lyrics that appear in attacker dictionaries. Reading your phrase aloud to check for memorability and then storing it in a manager or secure note helps balance security with usability.',
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
      'Modern guidance recommends changing passwords when you suspect compromise, when prompted after a breach, or when sharing access is no longer necessary. Frequent scheduled resets can lead to weaker, predictable passwords because people resort to small increments like Password1, Password2, and so on. Instead, rely on unique passwords stored in a manager, monitor for breach notifications, and rotate only when risk changes or policies require it.',
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
      'Password managers securely store and autofill unique passwords for every site, reducing the temptation to reuse credentials. They encrypt your vault with a master password, and many offer breach monitoring, secure sharing, and emergency access options that help households or teams stay prepared. Once the manager is in place you can create 30-character random passwords with a click, dramatically improving security without slowing you down.',
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
      'Use a trusted password manager that encrypts data locally before syncing so your credentials stay scrambled even if the provider is compromised. Avoid writing passwords in plain-text documents, messaging apps, or email drafts, all of which can be searched or leaked. If you must record a recovery key offline, store it in a secure location such as a safe deposit box and review it periodically to ensure it is still current.',
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
      'MFA requires something you know (a password) plus something you have or are (like a phone prompt, authenticator app code, biometric, or hardware security key). Even if attackers learn your password, they cannot sign in without the second factor, dramatically reducing account takeover risk. Choose phishing-resistant options when possible and keep printed or digital backup codes in a safe place to prevent lockouts.',
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
      'Phishing attempts often create urgency, use mismatched sender addresses, or direct you to unfamiliar URLs designed to look legitimate at a glance. Always verify the domain, avoid clicking suspicious links, and never share passwords over email, chat, or text. When unsure, navigate to the site directly or contact support using trusted channels, and report the message to your security team or provider so they can block future attacks.',
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
      'Monitor breach-notification emails, enable alerts from your password manager, and use services that check if your email appears in known data breaches. Unexpected login alerts, password reset emails you did not request, or new devices in account activity logs are warning signs that require immediate password changes. After responding to the incident, review security questions, recovery email addresses, and connected apps to ensure nothing else was altered.',
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
      'Change the affected password right away, enable multi-factor authentication, and review account activity for unauthorized changes such as new payment methods or forwarded emails. If the password was reused, update it everywhere else and monitor associated financial or personal accounts for suspicious transactions. Document what happened and notify anyone else who shares access so they can secure their logins too.',
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
      'Use backup codes, hardware keys, or secondary authenticators you saved during setup to regain access quickly. If those are unavailable, contact the service provider with verification documents and be prepared to answer identity-verification questions. After recovery, replace lost devices, update backup factors, and remove any unrecognized trusted devices before signing out everywhere.',
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
      'If you handle regulated data, aligning with frameworks such as NIST SP 800-63B or PCI DSS helps satisfy audit requirements and demonstrates due diligence. These standards emphasize minimum lengths, screening against breach lists, and user-friendly policies that avoid forced periodic resets unless compromise is suspected. Map each requirement to technical controls—like password filters and MFA enforcement—so audits become a validation exercise rather than a scramble.',
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
  },
  {
    id: 'why-unique-passwords-matter',
    category: 'Password Basics',
    question: 'Why is it important to use a different password for every account?',
    answer:
      'Reusing passwords means a single breach can unlock dozens of other services because attackers test leaked credentials across popular sites. Using a unique password for every account isolates risk, limiting damage to the breached service. Password managers and browser alerts make it manageable by flagging reuse and helping you update weak entries quickly.',
    keyTakeaways: [
      'Credential reuse is the fastest path to account takeover after a breach',
      'Unique passwords compartmentalize risk across services',
      'Use password managers or breach monitors to detect reuse'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'what-to-do-after-breach'
    ],
    tags: ['password reuse', 'breach', 'best practices']
  },
  {
    id: 'how-to-remember-strong-passwords',
    category: 'Password Creation',
    question: 'How can I remember strong passwords without writing them down?',
    answer:
      'For the handful of accounts you must memorize, build memorable passphrases from vivid imagery or stories that only make sense to you. Mnemonic techniques—such as taking the first letters of a sentence, mixing in numbers that represent meaningful but non-obvious data, and adding punctuation—create strength without sacrificing recall. For everything else, rely on a password manager so you never need to memorize long random strings.',
    keyTakeaways: [
      'Use personal but non-obvious stories or imagery to craft passphrases',
      'Apply mnemonic rules like first-letter sentences plus punctuation',
      'Delegate most password storage to a secure manager'
    ],
    relatedQuestions: [
      'should-i-use-password-phrases',
      'do-i-need-password-manager'
    ],
    tags: ['memorization', 'passphrase', 'mnemonics']
  },
  {
    id: 'is-browser-autofill-safe',
    category: 'Password Management',
    question: 'Is it safe to let my web browser save and autofill passwords?',
    answer:
      'Modern browsers encrypt stored credentials and warn about breached or weak passwords, making them safer than spreadsheets or sticky notes. However, dedicated password managers usually offer stronger security controls, cross-platform apps, and better sharing workflows. If you rely on browser autofill, lock your device, sync only with trusted accounts, and enable a primary password or OS-level login to protect access.',
    keyTakeaways: [
      'Browser managers are safer than manual lists but have limitations',
      'Dedicated managers provide richer security, auditing, and sharing',
      'Protect autofill data with device locks and primary passwords'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'how-to-store-passwords-safely'
    ],
    tags: ['browser', 'autofill', 'storage']
  },
  {
    id: 'how-to-share-password-securely',
    category: 'Password Management',
    question: 'How can I share a password securely with a family member or colleague?',
    answer:
      'Use password managers that support encrypted sharing or delegated access so credentials never travel through email or chat in plain text. When sharing temporarily, set an expiration date or revoke access once the task is complete. Avoid screenshots or unencrypted documents, and consider creating separate accounts with appropriate permissions whenever possible.',
    keyTakeaways: [
      'Share through encrypted password manager features instead of email',
      'Limit access duration and revoke credentials when tasks end',
      'Prefer unique accounts with proper permissions over shared logins'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'what-to-do-after-breach'
    ],
    tags: ['sharing', 'collaboration', 'security']
  },
  {
    id: 'what-is-passwordless-authentication',
    category: 'Security & Threats',
    question: 'What is passwordless authentication and should I use it?',
    answer:
      'Passwordless authentication replaces passwords with alternatives like passkeys, hardware security keys, or biometric prompts tied to your device. These methods resist phishing and credential stuffing because there is no static password to steal. If your service offers passkeys or FIDO2 security keys, adopting them can simplify sign-in while significantly reducing the risk of compromise.',
    keyTakeaways: [
      'Passwordless options eliminate reusable secrets attackers target',
      'Passkeys and hardware keys provide strong phishing resistance',
      'Adopt passwordless sign-in when your critical services support it'
    ],
    relatedQuestions: [
      'what-is-mfa',
      'how-to-spot-phishing'
    ],
    tags: ['passwordless', 'passkeys', 'authentication']
  },
  {
    id: 'what-if-password-manager-hacked',
    category: 'Security & Threats',
    question: 'What should I do if my password manager provider reports a security incident?',
    answer:
      'Start by reading the provider’s disclosure to understand what data was accessed and whether your encrypted vault was exposed. Change your master password, enable or refresh multi-factor authentication, and rotate any critical account credentials stored in the vault. Consider exporting your data and migrating if the response feels inadequate, but prioritize securing accounts before switching tools.',
    keyTakeaways: [
      'Review provider disclosures to gauge the scope of exposure',
      'Update the master password and rotate high-value credentials',
      'Evaluate the provider’s transparency before deciding to migrate'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'what-to-do-after-breach'
    ],
    tags: ['password manager', 'breach response', 'incident']
  },
  {
    id: 'traveling-protect-passwords',
    category: 'Security & Threats',
    question: 'How should I protect my passwords when traveling?',
    answer:
      'Before leaving, update critical passwords, ensure MFA is enabled, and download authenticator apps or passkeys to devices you will carry. While traveling, avoid logging in over public Wi-Fi without a VPN, and use device screen locks plus remote-wipe capabilities in case of loss. After returning home, review account activity and remove any temporary access you granted to travel companions or devices.',
    keyTakeaways: [
      'Prepare for travel by updating passwords and verifying MFA options',
      'Avoid untrusted networks or use a VPN alongside device locks',
      'Audit account activity and permissions once you return'
    ],
    relatedQuestions: [
      'how-to-spot-phishing',
      'how-to-know-password-compromised'
    ],
    tags: ['travel', 'mobile security', 'vpn']
  },
  {
    id: 'forgot-master-password',
    category: 'Account Recovery',
    question: 'What can I do if I forget the master password to my password manager?',
    answer:
      'Most zero-knowledge password managers cannot recover a vault without the master password, so first check whether you enabled account recovery features such as secret keys, recovery kits, or emergency contacts. If no recovery is available, you may need to reset the account, which typically deletes stored data and requires setting new passwords everywhere. Going forward, store master password hints or recovery materials offline and add a trusted emergency contact if the service supports it.',
    keyTakeaways: [
      'Check for recovery keys or emergency access before resetting',
      'Resetting usually wipes stored passwords, so plan replacements',
      'Keep master password hints or kits in a secure offline location'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'how-to-recover-account-lost-mfa'
    ],
    tags: ['password manager', 'recovery', 'master password']
  },
  {
    id: 'prepare-account-recovery',
    category: 'Account Recovery',
    question: 'How can I prepare my accounts for a smooth recovery before anything goes wrong?',
    answer:
      'Document recovery email addresses, phone numbers, and backup codes for important services and verify them twice a year. Store this information in an encrypted password manager or secure offline vault so you can access it during emergencies. Additionally, set up trusted contacts or delegated access on key accounts—such as cloud storage or financial services—so a family member can help if you become locked out.',
    keyTakeaways: [
      'Keep recovery contact methods current and review them regularly',
      'Store backup codes and emergency notes securely yet accessibly',
      'Designate trusted contacts where services allow shared recovery'
    ],
    relatedQuestions: [
      'how-to-recover-account-lost-mfa',
      'what-to-do-after-breach'
    ],
    tags: ['recovery planning', 'backup codes', 'preparedness']
  },
  {
    id: 'implement-enterprise-password-policy',
    category: 'Compliance & Policy',
    question: 'How should an organization implement an effective password policy?',
    answer:
      'Start by aligning policy language with modern standards such as NIST SP 800-63B, emphasizing minimum length, breach screening, and MFA instead of arbitrary complexity rules. Provide user education, deploy technical controls like single sign-on and password filters, and establish monitoring for reuse or weak credentials. Review the policy annually with security leadership and auditors to incorporate new threats and lessons from incidents.',
    keyTakeaways: [
      'Base policies on modern standards that prioritize usability and security',
      'Support policies with technical controls and ongoing education',
      'Schedule regular reviews with stakeholders to adapt to new threats'
    ],
    relatedQuestions: [
      'do-passwords-need-compliance',
      'how-to-spot-phishing'
    ],
    tags: ['policy', 'enterprise', 'compliance']
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
