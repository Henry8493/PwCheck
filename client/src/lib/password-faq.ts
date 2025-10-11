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
  },
  {
    id: 'what-is-a-passkey',
    category: 'Passkeys & FIDO2',
    question: 'What exactly is a “passkey,” and how is it different from passwordless login or a hardware security key?',
    answer:
      'A passkey is a FIDO2 credential that pairs a private key on your device with a public key stored by the service, letting you sign in with biometrics or a device PIN instead of typing a password. Unlike generic “passwordless” marketing terms, passkeys are phishing-resistant because they are scoped to a specific website and cannot be replayed elsewhere. Hardware security keys also speak FIDO2, but passkeys can live in secure enclaves on phones and laptops, sync through platform clouds, and still offer the same cryptographic protections.',
    keyTakeaways: [
      'Passkeys replace passwords with device-bound cryptographic keys',
      'They are resistant to phishing because each passkey only works for one site',
      'Hardware keys are one form factor for passkeys, but synced device passkeys work too'
    ],
    relatedQuestions: [
      'what-is-passwordless-authentication',
      'passkeys-cross-platform',
      'introduce-passkeys-for-business'
    ],
    tags: ['passkeys', 'fido2', 'passwordless']
  },
  {
    id: 'passkeys-cross-platform',
    category: 'Passkeys & FIDO2',
    question: 'Can I use passkeys across iOS, Android, Windows, and Linux?',
    answer:
      'Apple, Google, and Microsoft sync passkeys through their cloud keychains, so any signed-in device within that ecosystem can use them automatically. Cross-platform sign-ins work through QR code handshakes or Bluetooth proximity, letting you approve a login on your phone for a Windows or Linux desktop even if the passkey lives elsewhere. For Linux or shared machines that lack built-in support, hardware security keys or cross-platform password managers that support FIDO2 syncing bridge the gap.',
    keyTakeaways: [
      'Major vendors sync passkeys within their ecosystems via encrypted cloud keychains',
      'Cross-platform logins use QR codes or Bluetooth to prove proximity when needed',
      'Hardware keys and emerging password managers fill gaps on platforms without native sync'
    ],
    relatedQuestions: [
      'what-is-a-passkey',
      'passkey-backup-strategies',
      'adding-passkeys-with-sso'
    ],
    tags: ['passkeys', 'cross-platform', 'devices']
  },
  {
    id: 'passkey-backup-strategies',
    category: 'Passkeys & FIDO2',
    question: 'How do I back up passkeys, and what happens if I lose my phone?',
    answer:
      'Consumer ecosystems encrypt passkeys and sync them to cloud backups tied to your Apple ID, Google account, or Microsoft account, so signing into a new device restores them automatically. Add at least one backup authenticator—such as a hardware key or a second phone—to avoid being locked out if the sync account itself becomes inaccessible. If you lose a device, revoke it from your account dashboard, confirm that your passkeys still appear on a trusted device, and fall back to recovery codes or passwords where passkeys are not yet your only option.',
    keyTakeaways: [
      'Platform clouds back up passkeys after you sign in with your primary account',
      'Register backup hardware keys or secondary devices for redundancy',
      'Revoke lost devices quickly and verify that passkeys remain on trusted hardware'
    ],
    relatedQuestions: [
      'passkeys-cross-platform',
      'are-passkeys-phishable',
      'set-recovery-contacts-correctly'
    ],
    tags: ['passkeys', 'backup', 'device loss']
  },
  {
    id: 'are-passkeys-phishable',
    category: 'Passkeys & FIDO2',
    question: 'Are passkeys phishable? What attacks do they stop vs. not stop?',
    answer:
      'Passkeys are resistant to classic phishing because the browser verifies the site origin and only releases the private-key signature if the domain matches the credential. They also block credential stuffing and replay attacks because there is no shared secret to steal. Passkeys do not prevent device theft, malware that compromises the endpoint, or account recovery abuse, so you still need screen locks, malware defenses, and tight control over recovery channels.',
    keyTakeaways: [
      'Passkeys stop phishing and credential stuffing by binding keys to a site origin',
      'Attackers cannot reuse a passkey on another service because there is no shared secret',
      'Device compromise and weak recovery processes remain critical risks to manage'
    ],
    relatedQuestions: [
      'what-is-a-passkey',
      'qr-code-and-mfa-fatigue-attacks',
      'credential-stuffing-vs-brute-force'
    ],
    tags: ['passkeys', 'phishing', 'threats']
  },
  {
    id: 'introduce-passkeys-for-business',
    category: 'Passkeys & FIDO2',
    question: 'For businesses: how do we introduce passkeys alongside passwords and migrate users safely?',
    answer:
      'Start with opt-in pilots that let employees register passkeys while keeping passwords active, then monitor sign-in success rates and help-desk load. Educate users on enrolling multiple devices, provide backup security keys for break-glass access, and update recovery workflows so support staff can verify identity without falling back to weak methods. As adoption climbs, tighten conditional access policies to prefer passkeys, gradually disable passwords for low-risk groups, and ensure SSO and directory services support FIDO2 attestation logging.',
    keyTakeaways: [
      'Roll out passkeys in stages while passwords remain as a fallback',
      'Train users to add multiple authenticators and update recovery procedures',
      'Use telemetry to phase out passwords once support teams and SSO tooling are ready'
    ],
    relatedQuestions: [
      'adding-passkeys-with-sso',
      'safest-second-factor',
      'password-policy-dos-and-donts'
    ],
    tags: ['passkeys', 'enterprise', 'rollout']
  },
  {
    id: 'safest-second-factor',
    category: 'Multi-Factor Authentication',
    question: 'Which second factor is safest: authenticator app (TOTP), push, SMS, or a hardware key?',
    answer:
      'Hardware security keys and passkeys provide the strongest phishing resistance because they verify the site origin before releasing a signature. Authenticator apps that generate TOTP codes are strong if you avoid approving prompts blindly, while push notifications are convenient but vulnerable to social-engineered “fatigue” approvals. SMS delivers the weakest protection due to SIM swapping and interception, so use it only as a backup when no better factor is available.',
    keyTakeaways: [
      'Security keys and passkeys offer the best phishing resistance',
      'Authenticator apps are strong but require vigilance against prompt bombing',
      'SMS should be a backup factor because phone numbers are easily hijacked'
    ],
    relatedQuestions: [
      'what-is-mfa',
      'what-is-sim-swapping',
      'qr-code-and-mfa-fatigue-attacks'
    ],
    tags: ['mfa', 'security keys', 'totp']
  },
  {
    id: 'what-is-sim-swapping',
    category: 'Multi-Factor Authentication',
    question: 'What is SIM-swapping, and how do I protect my accounts from it?',
    answer:
      'SIM swapping occurs when an attacker convinces or bribes a carrier to move your phone number to their SIM card, intercepting SMS codes and calls. Protect yourself by using stronger MFA factors, adding a carrier account PIN or port-freeze, and monitoring for sudden loss of service. If your number is hijacked, contact the carrier immediately, change account passwords, and review recovery settings that rely on that phone number.',
    keyTakeaways: [
      'Attackers can hijack SMS-based MFA by transferring your number to their SIM',
      'Add carrier PINs or number locks and prefer non-SMS factors',
      'Respond quickly to unexpected signal loss to limit attacker access'
    ],
    relatedQuestions: [
      'safest-second-factor',
      'rotating-phone-numbers-risk',
      'set-recovery-contacts-correctly'
    ],
    tags: ['sim swapping', 'sms', 'mfa']
  },
  {
    id: 'store-backup-codes-safely',
    category: 'Multi-Factor Authentication',
    question: 'Should I store or print backup codes—what’s the safest way?',
    answer:
      'Backup codes are single-use bypass tokens, so store them offline in a secure but reachable place such as an encrypted password manager note, a locked safe, or a sealed envelope in a safety deposit box. Label them clearly with the service name and date created, and replace them after they are used or when you reset MFA. Avoid photographing or emailing codes, which creates extra copies attackers can discover.',
    keyTakeaways: [
      'Keep backup codes offline but accessible for emergencies',
      'Record context so you know when to rotate or invalidate codes',
      'Do not store codes in email, chats, or camera rolls where they can leak'
    ],
    relatedQuestions: [
      'prepare-account-recovery',
      'recover-when-all-mfa-options-lost',
      'set-recovery-contacts-correctly'
    ],
    tags: ['backup codes', 'mfa', 'storage']
  },
  {
    id: 'mfa-multiple-devices',
    category: 'Multi-Factor Authentication',
    question: 'How do I handle MFA when I have multiple phones or a new device?',
    answer:
      'Before upgrading phones, add the new device as an additional authenticator wherever possible so you can test it before wiping the old one. Use authenticator apps that support encrypted cloud backups or export features, and pair hardware security keys with both devices. After migration, remove unneeded devices from account settings and confirm backup codes still work in case you lose access during travel or repairs.',
    keyTakeaways: [
      'Enroll new devices before decommissioning old ones to avoid lockouts',
      'Choose authenticator apps with secure backup or transfer options',
      'Review account settings to remove obsolete devices and refresh backups'
    ],
    relatedQuestions: [
      'passkey-backup-strategies',
      'recover-when-all-mfa-options-lost',
      'international-travel-mfa'
    ],
    tags: ['mfa', 'devices', 'migration']
  },
  {
    id: 'browser-vs-dedicated-manager',
    category: 'Password Managers',
    question: 'Browser-built-in vs. dedicated password manager: pros, cons, and when to switch.',
    answer:
      'Browser password managers are free, integrated, and adequate for light use, but they struggle with sharing, auditing, and cross-ecosystem syncing. Dedicated managers add zero-knowledge encryption, advanced reporting, family sharing, and better support for passkeys or secure notes. Switch when you need to collaborate, manage work and personal vaults separately, or audit credential hygiene beyond what the browser offers.',
    keyTakeaways: [
      'Browser managers are convenient but limited for complex needs',
      'Dedicated managers provide stronger encryption, sharing, and auditing',
      'Upgrade when you juggle multiple ecosystems or need collaborative features'
    ],
    relatedQuestions: [
      'do-i-need-password-manager',
      'password-manager-family-plans',
      'audit-password-vault'
    ],
    tags: ['password manager', 'browser', 'security']
  },
  {
    id: 'open-source-vs-proprietary-manager',
    category: 'Password Managers',
    question: 'Open-source vs. proprietary managers; cloud-sync vs. local-only; self-hosting options.',
    answer:
      'Open-source managers offer transparency and community scrutiny, while proprietary tools often deliver polished interfaces, hosted sync, and enterprise support. Cloud-sync products are easiest to use but require trust in the vendor’s infrastructure, whereas local-only or self-hosted options give you control at the cost of maintenance. Choose based on your threat model, willingness to manage servers, and need for features like password sharing, passkey storage, and mobile support.',
    keyTakeaways: [
      'Open-source tools provide transparency but may require more DIY effort',
      'Hosted services simplify sync yet depend on vendor security and uptime',
      'Self-hosting grants control but introduces operational overhead and backups'
    ],
    relatedQuestions: [
      'browser-vs-dedicated-manager',
      'password-manager-outage-migration',
      'password-manager-family-plans'
    ],
    tags: ['password manager', 'open source', 'self-hosting']
  },
  {
    id: 'password-manager-outage-migration',
    category: 'Password Managers',
    question: 'What if my password-manager vendor has an outage or shuts down—how do I export/migrate?',
    answer:
      'Keep an up-to-date encrypted export or emergency kit so you can switch providers quickly if service becomes unavailable. Most managers support CSV or JSON exports; store them offline, import into the new tool immediately, and then delete the plain-text files. Test migration periodically so you know the steps before an outage, and maintain a short list of backup providers you trust.',
    keyTakeaways: [
      'Maintain encrypted backups or exports in case you must switch providers',
      'Securely erase temporary export files after importing into the new manager',
      'Practice migration workflows before an outage to reduce stress'
    ],
    relatedQuestions: [
      'open-source-vs-proprietary-manager',
      'password-manager-family-plans',
      'what-if-password-manager-hacked'
    ],
    tags: ['password manager', 'migration', 'business continuity']
  },
  {
    id: 'password-manager-family-plans',
    category: 'Password Managers',
    question: 'Family plans, shared vaults, and emergency access—how should we set these up?',
    answer:
      'Use family or team plans to create shared vaults for joint accounts while keeping personal logins private. Assign granular permissions—read-only for streaming services, full access for finances—and enable emergency access so trusted contacts can unlock critical credentials if needed. Review shared vault membership regularly and revoke access when relationships or roles change.',
    keyTakeaways: [
      'Shared vaults balance collaboration with privacy when configured thoughtfully',
      'Emergency access features help households handle illness or unexpected events',
      'Audit membership and permissions to keep shared credentials under control'
    ],
    relatedQuestions: [
      'plan-digital-inheritance',
      'password-manager-outage-migration',
      'shared-household-devices'
    ],
    tags: ['password manager', 'family', 'sharing']
  },
  {
    id: 'audit-password-vault',
    category: 'Password Managers',
    question: 'How do I audit my vault for weak/reused/old passwords efficiently?',
    answer:
      'Leverage the security dashboards in your password manager to flag reused, weak, or old passwords and prioritize high-value accounts first. Schedule a recurring review—quarterly works for most households—and batch updates so you can rotate several credentials in one session. Export reports or tag entries you update to track progress and ensure shared vault members also resolve their flagged items.',
    keyTakeaways: [
      'Use built-in health reports to identify weak or reused passwords quickly',
      'Tackle high-risk accounts first and batch the rest on a recurring cadence',
      'Track changes and involve collaborators so shared credentials stay strong'
    ],
    relatedQuestions: [
      'browser-vs-dedicated-manager',
      'password-manager-outage-migration',
      'change-all-passwords-after-breach'
    ],
    tags: ['password manager', 'auditing', 'hygiene']
  },
  {
    id: 'credential-stuffing-vs-brute-force',
    category: 'Threats & Hygiene',
    question: 'Credential stuffing vs. brute force: what’s the difference and how do I defend?',
    answer:
      'Credential stuffing replays known username/password pairs from breaches, while brute force guesses passwords blindly or systematically. Defend against stuffing with unique passwords, MFA, and breach monitoring; counter brute force with long passwords, account lockouts, and rate limiting. From a user perspective, unique credentials plus MFA stop both attack types, while organizations must also monitor for automated login spikes.',
    keyTakeaways: [
      'Stuffing reuses leaked passwords; brute force guesses new ones',
      'Unique passwords and MFA protect individuals from both attacks',
      'Organizations need rate limits, anomaly detection, and breach monitoring'
    ],
    relatedQuestions: [
      'are-passkeys-phishable',
      'security-dashboards-for-users',
      'secure-password-storage-for-websites'
    ],
    tags: ['threats', 'credential stuffing', 'brute force']
  },
  {
    id: 'are-dark-web-scans-worth-it',
    category: 'Threats & Hygiene',
    question: '“Dark web” breach scans—are they reliable and worth using?',
    answer:
      'Dark web monitoring services aggregate known breach data to alert you when your email or password appears, but they cannot see every underground forum or private sale. They are useful early warnings if tied to actionable guidance, such as rotating exposed credentials and enabling MFA. Treat them as one input alongside official breach notifications and your password manager’s monitoring features.',
    keyTakeaways: [
      'Breach scans surface known leaks but do not cover every underground market',
      'Value comes from acting quickly on the alerts rather than the alert itself',
      'Combine monitoring with unique passwords and MFA for resilient defenses'
    ],
    relatedQuestions: [
      'how-to-know-password-compromised',
      'credential-stuffing-vs-brute-force',
      'are-passkeys-phishable'
    ],
    tags: ['breach monitoring', 'dark web', 'alerts']
  },
  {
    id: 'is-it-safe-to-paste-passwords',
    category: 'Threats & Hygiene',
    question: 'Is it safe to paste passwords? What about clipboard history and keyloggers?',
    answer:
      'Pasting passwords from a manager is safer than typing them because it prevents shoulder-surfing and typos, but clipboard data can linger in history managers or be read by malware. Use password managers that clear the clipboard automatically, disable universal clipboard sync on shared devices, and keep systems patched to reduce keylogger risk. On sensitive systems, prefer direct autofill or hardware security keys to keep secrets out of the clipboard entirely.',
    keyTakeaways: [
      'Clipboard use is safer than retyping but leaves temporary traces',
      'Choose managers that auto-clear clipboards and limit sync on shared devices',
      'Autofill or hardware keys offer the lowest exposure for high-risk logins'
    ],
    relatedQuestions: [
      'is-browser-autofill-safe',
      'shared-household-devices',
      'qr-code-and-mfa-fatigue-attacks'
    ],
    tags: ['clipboard', 'keyloggers', 'security hygiene']
  },
  {
    id: 'qr-code-and-mfa-fatigue-attacks',
    category: 'Threats & Hygiene',
    question: 'QR-code phishing and “MFA fatigue” push attacks—how to spot and stop them.',
    answer:
      'QR-code phishing directs you to malicious sites via scanned codes, so inspect the destination URL and prefer apps that show the link before opening it. MFA fatigue attacks bombard you with push prompts hoping you approve one; respond by denying the requests, reporting the attempt, and switching to phishing-resistant factors like passkeys or hardware keys. Organizations should implement number-matching prompts, rate limits, and user education to cut down on accidental approvals.',
    keyTakeaways: [
      'Verify URLs before scanning QR codes, especially from unsolicited sources',
      'Decline unexpected MFA prompts and alert security teams immediately',
      'Adopt phishing-resistant MFA and number-matching to counter fatigue attacks'
    ],
    relatedQuestions: [
      'are-passkeys-phishable',
      'safest-second-factor',
      'public-wifi-password-risks'
    ],
    tags: ['phishing', 'mfa fatigue', 'qr codes']
  },
  {
    id: 'public-wifi-password-risks',
    category: 'Threats & Hygiene',
    question: 'Public Wi-Fi and hotel business centers—what’s actually risky for passwords?',
    answer:
      'Public Wi-Fi can expose you to rogue hotspots or traffic interception if sites do not enforce HTTPS, and shared business-center PCs might contain malware or keyloggers. Use VPNs on untrusted networks, sign in only to HTTPS sites, and avoid typing passwords on shared computers unless you use a security key or disposable session. Log out afterward and clear browser data to prevent cached credentials from being misused.',
    keyTakeaways: [
      'Assume public networks and shared PCs may be monitored or infected',
      'Stick to HTTPS, use VPNs, and prefer hardware-backed authentication',
      'Log out and clear data on shared machines to remove stored credentials'
    ],
    relatedQuestions: [
      'traveling-protect-passwords',
      'is-it-safe-to-paste-passwords',
      'do-vpns-make-logins-safer'
    ],
    tags: ['public wifi', 'travel', 'threats']
  },
  {
    id: 'shared-household-devices',
    category: 'Special Situations',
    question: 'Best practices for shared household devices (smart TVs, consoles, tablets).',
    answer:
      'Create separate user profiles on smart TVs, consoles, and tablets so streaming, purchases, and browser sessions stay isolated. Disable password autofill on communal devices and sign out of accounts after use, relying on a password manager or passkeys on personal hardware instead. For devices that cannot support profiles, keep them logged out of sensitive services and use parental controls or PINs to prevent accidental purchases.',
    keyTakeaways: [
      'Separate profiles keep household activity and purchases compartmentalized',
      'Avoid storing passwords on shared devices; sign in from personal hardware instead',
      'Use parental controls or PINs where multi-user support is limited'
    ],
    relatedQuestions: [
      'password-manager-family-plans',
      'passwords-for-kids-and-seniors',
      'is-it-safe-to-paste-passwords'
    ],
    tags: ['household', 'shared devices', 'profiles']
  },
  {
    id: 'passwords-for-kids-and-seniors',
    category: 'Special Situations',
    question: 'Passwords for kids and seniors—simple, safe setups that actually work.',
    answer:
      'For younger or less tech-savvy users, use passphrases they can remember, paired with a supervised password manager that auto-fills on their devices. Enable parental or caregiver oversight through shared vaults or emergency access, and simplify MFA with hardware keys or trusted-device prompts instead of complex app codes. Regularly review account activity and recovery options together to reinforce good habits without overwhelming them.',
    keyTakeaways: [
      'Use memorable passphrases and supportive managers for less technical users',
      'Provide caregiver oversight via shared vaults or emergency access features',
      'Favor simple, reliable MFA factors like hardware keys or trusted devices'
    ],
    relatedQuestions: [
      'password-manager-family-plans',
      'plan-digital-inheritance',
      'store-backup-codes-safely'
    ],
    tags: ['families', 'caregivers', 'usability']
  },
  {
    id: 'plan-digital-inheritance',
    category: 'Special Situations',
    question: 'Digital inheritance: how should I plan access for my spouse/family if something happens?',
    answer:
      'Document critical accounts, store them in a password manager with emergency access or designate trusted contacts in services that support legacy planning. Keep legal documents—wills, power of attorney, estate instructions—updated to authorize access, and rehearse how loved ones would retrieve credentials. Include hardware keys, recovery codes, and passkey-enabled devices in the plan so heirs can sign in without guesswork.',
    keyTakeaways: [
      'Use manager emergency access or legacy contacts to delegate credentials',
      'Align digital plans with legal documents so access is authorized',
      'Inventory hardware keys and recovery materials alongside passwords'
    ],
    relatedQuestions: [
      'password-manager-family-plans',
      'set-recovery-contacts-correctly',
      'recover-when-all-mfa-options-lost'
    ],
    tags: ['digital inheritance', 'planning', 'emergency access']
  },
  {
    id: 'international-travel-mfa',
    category: 'Special Situations',
    question: 'Traveling internationally: handling MFA when your phone number changes or you use eSIMs.',
    answer:
      'Before traveling, register authenticator apps, hardware keys, or passkeys that do not depend on your phone number, and add a backup email for recovery alerts. Update services that require SMS with a travel-friendly number or switch to app-based factors, and download offline codes in case roaming fails. On return, restore your primary number, review account activity, and retire any temporary factors you used abroad.',
    keyTakeaways: [
      'Prepare non-SMS MFA methods before changing SIMs or phone numbers',
      'Carry backup codes or hardware keys for offline access during travel',
      'Clean up temporary factors and audit activity once you return home'
    ],
    relatedQuestions: [
      'mfa-multiple-devices',
      'traveling-protect-passwords',
      'rotating-phone-numbers-risk'
    ],
    tags: ['travel', 'mfa', 'esim']
  },
  {
    id: 'handling-bad-password-rules',
    category: 'Special Situations',
    question: 'What to do when a site has terrible password rules (max length, no spaces, odd character bans).',
    answer:
      'When a site imposes restrictive rules, maximize entropy within the allowed set—use long random strings without banned characters—and store them in your manager. Provide feedback to the service and enable MFA or passkeys if available to mitigate the weak policy. Track these accounts in a high-risk tag or folder so you can change them quickly if the service improves its rules or experiences a breach.',
    keyTakeaways: [
      'Use the strongest possible password within the site’s constraints',
      'Add MFA or passkeys to compensate for weak password policies',
      'Flag restrictive accounts for periodic review and fast updates'
    ],
    relatedQuestions: [
      'maximum-safe-password-length',
      'password-policy-dos-and-donts',
      'change-all-passwords-after-breach'
    ],
    tags: ['password policy', 'usability', 'workarounds']
  },
  {
    id: 'set-recovery-contacts-correctly',
    category: 'Recovery & Safety Nets',
    question: 'Setting recovery email/phone correctly—and common mistakes that lock people out.',
    answer:
      'Use long-lived email addresses and phone numbers you control solely for recovery, and avoid corporate or school accounts that may be closed when you leave. Confirm recovery codes after setup, and audit them twice a year to remove outdated numbers or addresses. Never reuse a friend’s phone or a shared mailbox for recovery, because losing access to those channels gives attackers an easy takeover path.',
    keyTakeaways: [
      'Choose stable, personal recovery channels and test them regularly',
      'Avoid employer-controlled or temporary addresses for account recovery',
      'Remove shared or outdated contact methods to block easy takeovers'
    ],
    relatedQuestions: [
      'prepare-account-recovery',
      'rotating-phone-numbers-risk',
      'email-account-compromised-recovery'
    ],
    tags: ['recovery', 'contact info', 'account management']
  },
  {
    id: 'email-account-compromised-recovery',
    category: 'Recovery & Safety Nets',
    question: 'What to do if your email account (the recovery anchor) is compromised.',
    answer:
      'Immediately reset the email password from a trusted device, enable MFA, and review forwarding rules or filters that could hide future alerts. Notify important services that rely on that email for recovery, update recovery addresses, and sign out of all sessions. If you cannot regain control, move critical accounts to a new email, update recovery details everywhere, and inform contacts about the compromise to watch for phishing.',
    keyTakeaways: [
      'Secure the email account first, then lock down forwarding and sessions',
      'Update recovery addresses on other services to prevent cascading compromise',
      'Warn contacts and monitor for phishing attempts that leverage the breach'
    ],
    relatedQuestions: [
      'what-to-do-after-breach',
      'set-recovery-contacts-correctly',
      'recover-when-all-mfa-options-lost'
    ],
    tags: ['email', 'recovery', 'incident response']
  },
  {
    id: 'recover-when-all-mfa-options-lost',
    category: 'Recovery & Safety Nets',
    question: 'Recovering when you lose access to your authenticator app and backup codes.',
    answer:
      'Contact the service’s account recovery team with identity proof such as ID scans, billing details, or security questions, and expect a waiting period while they verify the request. Once access is restored, immediately enroll multiple MFA methods, regenerate backup codes, and remove any unrecognized trusted devices. Document the recovery experience so you can refine how you store codes or register hardware keys to avoid repeating the crisis.',
    keyTakeaways: [
      'Recovery without MFA factors usually requires manual identity verification',
      'Re-secure the account with fresh MFA methods and updated backups',
      'Learn from the incident and improve how you safeguard recovery options'
    ],
    relatedQuestions: [
      'how-to-recover-account-lost-mfa',
      'store-backup-codes-safely',
      'plan-digital-inheritance'
    ],
    tags: ['mfa', 'recovery', 'support tickets']
  },
  {
    id: 'rotating-phone-numbers-risk',
    category: 'Recovery & Safety Nets',
    question: 'Rotating phone numbers and recycled numbers—how to avoid losing accounts.',
    answer:
      'Mobile carriers recycle inactive numbers quickly, so remove old numbers from accounts before canceling service and rely on email or app-based MFA instead. When you must change numbers, add the new one first, confirm it works for recovery, then delete the old entry. Periodically review your accounts for stale numbers—especially for financial and government services—to prevent strangers from inheriting your SMS reset codes.',
    keyTakeaways: [
      'Remove phone numbers from accounts before carriers recycle them',
      'Use email, authenticator apps, or passkeys as primary recovery factors',
      'Audit accounts for outdated numbers after any carrier or plan change'
    ],
    relatedQuestions: [
      'what-is-sim-swapping',
      'set-recovery-contacts-correctly',
      'international-travel-mfa'
    ],
    tags: ['phone numbers', 'recovery', 'account hygiene']
  },
  {
    id: 'secure-password-storage-for-websites',
    category: 'Organizations & Developers',
    question: 'How should websites store passwords securely (modern hashing, salting, and rate-limits)?',
    answer:
      'Websites should hash passwords with adaptive algorithms like Argon2id, scrypt, or bcrypt using unique salts per credential and cost settings tuned to modern hardware. Combine hashing with rate limiting, login throttling, and device fingerprinting to make online guessing impractical. Protect the password database with strict access controls, segmentation, and monitoring so attackers cannot exfiltrate hashes unnoticed.',
    keyTakeaways: [
      'Use salted, adaptive hashing algorithms such as Argon2id or bcrypt',
      'Layer rate limits and anomaly detection on top of secure storage',
      'Lock down database access to prevent mass hash exfiltration'
    ],
    relatedQuestions: [
      'credential-stuffing-vs-brute-force',
      'password-policy-dos-and-donts',
      'password-incident-response'
    ],
    tags: ['development', 'hashing', 'best practices']
  },
  {
    id: 'password-policy-dos-and-donts',
    category: 'Organizations & Developers',
    question: 'Password policy do’s & don’ts (no forced rotation; allow paste; sensible length; block known-breached passwords).',
    answer:
      'Modern policies emphasize minimum length (at least 12 characters), screening against known-breached passwords, and allowing paste or passphrases so users can leverage managers. Avoid forced periodic rotation unless compromise is suspected, and drop composition rules that ban symbols or spaces. Provide guidance on MFA enrollment and passkey support so users have stronger alternatives to passwords.',
    keyTakeaways: [
      'Require length and breach screening instead of arbitrary complexity rules',
      'Permit paste and passphrases to support password managers',
      'Pair policies with MFA and passkey options for better security outcomes'
    ],
    relatedQuestions: [
      'handling-bad-password-rules',
      'secure-password-storage-for-websites',
      'design-secure-reset-flow'
    ],
    tags: ['policy', 'ux', 'password requirements']
  },
  {
    id: 'design-secure-reset-flow',
    category: 'Organizations & Developers',
    question: 'Designing a secure, user-friendly reset flow (email links, re-auth for sensitive actions, step-up MFA).',
    answer:
      'Use expiring, single-use reset links delivered over verified channels, and require step-up MFA or recent login re-verification for sensitive changes like email updates or payouts. Provide clear messaging so users know when a reset was requested and how to report abuse, and monitor for unusual reset volume. After a successful reset, invalidate old sessions and notify the user through multiple channels to catch unauthorized activity quickly.',
    keyTakeaways: [
      'Reset links should be short-lived, single-use, and delivered via trusted channels',
      'Step-up MFA and re-authentication protect sensitive account changes',
      'Alert users and monitor reset patterns to detect abuse early'
    ],
    relatedQuestions: [
      'password-incident-response',
      'reauthentication-high-risk-actions',
      'set-recovery-contacts-correctly'
    ],
    tags: ['account recovery', 'ux', 'security design']
  },
  {
    id: 'adding-passkeys-with-sso',
    category: 'Organizations & Developers',
    question: 'Adding passkeys/WebAuthn with minimal user friction; coexistence with SSO.',
    answer:
      'Integrate WebAuthn alongside SSO by letting users register passkeys as an additional factor during onboarding and prompting for them during high-risk or passwordless flows. Provide guidance on enrolling multiple authenticators, fall back to existing SSO tokens when passkeys are unavailable, and log attestation data for compliance. Use device-bound certificates or cloud-synced passkeys depending on your risk model, but keep the UI consistent so users understand when to tap their key or approve a biometric.',
    keyTakeaways: [
      'Offer passkeys during onboarding while keeping SSO tokens as a fallback',
      'Encourage multiple authenticators and capture attestation for auditing',
      'Keep passkey prompts consistent to minimize user confusion and support calls'
    ],
    relatedQuestions: [
      'introduce-passkeys-for-business',
      'safest-second-factor',
      'security-dashboards-for-users'
    ],
    tags: ['passkeys', 'webauthn', 'sso']
  },
  {
    id: 'security-dashboards-for-users',
    category: 'Organizations & Developers',
    question: 'Monitoring and user-facing security dashboards (login history, new device alerts, session management).',
    answer:
      'Expose recent login activity, device lists, and active sessions so users can spot anomalies quickly and revoke access themselves. Pair dashboards with real-time alerts for new devices, geographic changes, or mass reset attempts, and integrate with your SIEM for automated investigation. Make data actionable by including “sign out everywhere” buttons and links to rotate credentials or enable MFA.',
    keyTakeaways: [
      'Give users visibility into logins, devices, and sessions to catch anomalies',
      'Send proactive alerts for suspicious activity tied into backend monitoring',
      'Provide quick actions—revoke sessions, enable MFA—to contain incidents'
    ],
    relatedQuestions: [
      'credential-stuffing-vs-brute-force',
      'password-incident-response',
      'secure-password-storage-for-websites'
    ],
    tags: ['monitoring', 'ux', 'product security']
  },
  {
    id: 'password-incident-response',
    category: 'Organizations & Developers',
    question: 'Incident response FAQ: how to notify users, force resets safely, and measure blast radius.',
    answer:
      'When a breach occurs, identify which credentials or factors were exposed, segment affected users, and craft clear notifications that explain the risk and required actions. Force resets by invalidating tokens and prompting users at next login, but stagger waves to avoid overwhelming systems. Track completion rates, monitor for suspicious re-logins, and share post-incident learnings with customers to rebuild trust.',
    keyTakeaways: [
      'Communicate clearly about what was exposed and how users should respond',
      'Force resets in controlled batches while monitoring system load and abuse',
      'Measure remediation progress and provide transparent follow-up updates'
    ],
    relatedQuestions: [
      'what-to-do-after-breach',
      'secure-password-storage-for-websites',
      'design-secure-reset-flow'
    ],
    tags: ['incident response', 'communication', 'breach']
  },
  {
    id: 'gdpr-auth-guidance',
    category: 'Compliance & Governance',
    question: 'GDPR perspective: data minimization for credentials, retention of auth logs, and breach notification basics.',
    answer:
      'Under GDPR, collect only the authentication data you need, hash passwords properly, and document retention schedules for login logs so you can justify why they exist. Pseudonymize or aggregate telemetry where possible, and secure consent if logs include personal data beyond security purposes. When a breach impacts EU residents, assess risk within 72 hours, notify regulators if required, and inform users when the exposure is likely to harm them.',
    keyTakeaways: [
      'Limit credential data collection and justify log retention durations',
      'Protect authentication telemetry through hashing, pseudonymization, and access controls',
      'Follow GDPR breach notification timelines and risk assessments'
    ],
    relatedQuestions: [
      'password-incident-response',
      'align-standards-vs-practicality',
      'secure-password-storage-for-websites'
    ],
    tags: ['gdpr', 'compliance', 'logging']
  },
  {
    id: 'align-standards-vs-practicality',
    category: 'Compliance & Governance',
    question: 'ISO 27001/PCI-DSS/NIST alignment vs. practicality—how to resolve conflicts in policy.',
    answer:
      'Map each framework’s requirements to concrete controls, then adopt the strongest overlapping guidance—such as NIST’s password usability recommendations combined with PCI’s MFA mandates. Where standards conflict, document compensating controls that achieve equivalent security while preserving usability, and get sign-off from risk and audit teams. Regularly review the control matrix as standards evolve so your policies stay coherent and evidence is ready for audits.',
    keyTakeaways: [
      'Create a control matrix that harmonizes overlapping framework requirements',
      'Use compensating controls and documentation to resolve policy conflicts',
      'Review mappings regularly as standards update to keep audits smooth'
    ],
    relatedQuestions: [
      'gdpr-auth-guidance',
      'implement-enterprise-password-policy',
      'reauthentication-high-risk-actions'
    ],
    tags: ['compliance', 'standards', 'policy mapping']
  },
  {
    id: 'reauthentication-high-risk-actions',
    category: 'Compliance & Governance',
    question: 'When should employees be re-authenticated for high-risk actions (payments, exports, admin changes)?',
    answer:
      'Trigger step-up authentication when users perform sensitive operations such as changing payout details, exporting large datasets, or elevating privileges. Choose re-auth factors that match the risk—passkeys or hardware keys for administrators, or fresh SSO assertions with device checks for finance teams. Log and review these events to prove compliance and tune thresholds if legitimate work is being interrupted unnecessarily.',
    keyTakeaways: [
      'Require additional authentication before high-impact or irreversible actions',
      'Match the step-up method to the role and sensitivity of the operation',
      'Log and audit re-auth events to demonstrate compliance and adjust friction'
    ],
    relatedQuestions: [
      'design-secure-reset-flow',
      'password-incident-response',
      'safest-second-factor'
    ],
    tags: ['reauthentication', 'least privilege', 'compliance']
  },
  {
    id: 'are-spaces-or-emoji-allowed',
    category: 'Myths & UX',
    question: 'Are spaces or emoji allowed in passwords—and do they help?',
    answer:
      'Many modern systems allow spaces and even extended Unicode, letting you create long passphrases that are easier to remember. Emoji and uncommon characters add entropy, but compatibility varies—older systems or embedded devices might reject them or mangle encoding. Test unusual characters before committing, and fall back to lengthy word-based passphrases if a service enforces ASCII-only input.',
    keyTakeaways: [
      'Spaces often work and make passphrases easier to remember',
      'Emoji can add entropy but may break on legacy or poorly coded systems',
      'Verify support before using nonstandard characters to avoid lockouts'
    ],
    relatedQuestions: [
      'handling-bad-password-rules',
      'maximum-safe-password-length',
      'should-i-use-password-phrases'
    ],
    tags: ['passphrases', 'unicode', 'usability']
  },
  {
    id: 'is-notebook-in-safe-ok',
    category: 'Myths & UX',
    question: 'Is a notebook in a safe ever okay for a few critical secrets?',
    answer:
      'Writing down a small number of recovery keys or master passwords and storing them in a locked safe or safety deposit box is acceptable if digital options are unavailable. Ensure the notebook is clear, up to date, and protected from fire or water damage, and let a trusted person know how to access it in an emergency. However, avoid keeping daily-use passwords on paper—use a manager for those to reduce the chance of theft or loss.',
    keyTakeaways: [
      'Paper backups in a secure safe can protect a few critical secrets',
      'Keep physical records current and protected from environmental damage',
      'Use password managers for routine logins instead of expanding paper lists'
    ],
    relatedQuestions: [
      'plan-digital-inheritance',
      'store-backup-codes-safely',
      'password-manager-family-plans'
    ],
    tags: ['physical security', 'backups', 'emergency access']
  },
  {
    id: 'base-password-with-suffix-risks',
    category: 'Myths & UX',
    question: '“One base password + site suffix” patterns—why they’re risky.',
    answer:
      'Attackers analyze breach data and recognize patterns like BasePassword+SiteName, so compromising one account reveals the formula for others. Automated tools can guess variations quickly, especially when suffixes follow predictable patterns or abbreviations. Unique random passwords generated by a manager eliminate this pattern risk and keep breaches isolated.',
    keyTakeaways: [
      'Pattern-based passwords fall quickly once one account is exposed',
      'Attackers use automation to derive suffix variations across sites',
      'Unique manager-generated passwords avoid cascading compromise'
    ],
    relatedQuestions: [
      'why-unique-passwords-matter',
      'audit-password-vault',
      'credential-stuffing-vs-brute-force'
    ],
    tags: ['password reuse', 'patterns', 'attack techniques']
  },
  {
    id: 'do-vpns-make-logins-safer',
    category: 'Myths & UX',
    question: 'Do VPNs make logins safer? What do they not protect?',
    answer:
      'VPNs encrypt traffic between you and the VPN provider, shielding you from local network snooping and rogue Wi-Fi operators. They do not protect against phishing, malware, or credential theft occurring on your device, nor do they hide activity from the destination website. Combine VPN use with HTTPS, password managers, and phishing-resistant MFA to cover broader risks.',
    keyTakeaways: [
      'VPNs defend against local network eavesdropping but not endpoint malware',
      'They do not stop phishing or account takeover on the destination site',
      'Use VPNs alongside HTTPS, MFA, and passkeys for comprehensive protection'
    ],
    relatedQuestions: [
      'public-wifi-password-risks',
      'qr-code-and-mfa-fatigue-attacks',
      'traveling-protect-passwords'
    ],
    tags: ['vpn', 'network security', 'misconceptions']
  },
  {
    id: 'maximum-safe-password-length',
    category: 'Myths & UX',
    question: 'Maximum safe password length—can longer ever break things?',
    answer:
      'Some legacy systems truncate passwords or cap length, which can weaken security or cause login failures if you exceed their limits. Test new credentials after saving them, and if a service imposes a low limit, compensate with uniqueness, randomness, and MFA. Most modern services handle 64+ character passwords, so use long passphrases unless you encounter a specific restriction.',
    keyTakeaways: [
      'A few services still truncate or cap password length, so verify behavior',
      'When limits exist, rely on randomness and MFA to maintain security',
      'Modern platforms usually accept very long passwords without issue'
    ],
    relatedQuestions: [
      'handling-bad-password-rules',
      'are-spaces-or-emoji-allowed',
      'what-makes-password-strong'
    ],
    tags: ['password length', 'compatibility', 'best practices']
  },
  {
    id: 'change-all-passwords-after-breach',
    category: 'Myths & UX',
    question: 'Should I change all passwords after a single breach, or only the reused ones?',
    answer:
      'If the breached password was unique, change only that account and monitor for suspicious activity. When reuse occurred, update every account that shared the password and audit your vault to eliminate reuse going forward. Use breach notifications as a prompt to enable MFA and review security hygiene rather than resetting every credential unnecessarily.',
    keyTakeaways: [
      'Unique passwords contain the fallout of a breach to one account',
      'Reused passwords require rotating every affected service immediately',
      'Treat breaches as reminders to enable MFA and audit credential hygiene'
    ],
    relatedQuestions: [
      'why-unique-passwords-matter',
      'audit-password-vault',
      'what-to-do-after-breach'
    ],
    tags: ['breach response', 'password reuse', 'best practices']
  },
  {
    id: 'do-you-store-password-checker-input',
    category: 'Site Transparency',
    question: 'Do you store or transmit what I type into your password checker?',
    answer:
      'No. The checker evaluates passwords entirely in your browser and never sends the raw value to our servers. We only keep anonymous aggregate metrics such as how many checks occurred, not the specific passwords people test.',
    keyTakeaways: [
      'Password strength checks run locally in your browser',
      'Raw passwords are never transmitted or stored by our service',
      'Only minimal, anonymous usage counts are collected for reliability tracking'
    ],
    relatedQuestions: [
      'how-do-you-score-passwords',
      'is-processing-client-side',
      'how-to-store-passwords-safely'
    ],
    tags: ['privacy', 'transparency', 'data handling']
  },
  {
    id: 'how-do-you-score-passwords',
    category: 'Site Transparency',
    question: 'How do you score password strength, and is it aligned with modern guidelines?',
    answer:
      'We evaluate passwords using entropy models, breached-password blocklists, and heuristics recommended by NIST SP 800-63B. Scores prioritize length, randomness, and resistance to known patterns instead of outdated composition rules. Feedback suggests using passphrases, unique credentials, and MFA, aligning with current industry best practices.',
    keyTakeaways: [
      'Scoring focuses on entropy, uniqueness, and breach history',
      'Guidance aligns with NIST and industry recommendations for modern passwords',
      'We avoid outdated complexity rules that reduce usability without improving security'
    ],
    relatedQuestions: [
      'what-makes-password-strong',
      'are-password-length-or-complexity-more-important',
      'do-you-store-password-checker-input'
    ],
    tags: ['password strength', 'methodology', 'guidelines']
  },
  {
    id: 'is-processing-client-side',
    category: 'Site Transparency',
    question: 'Is everything processed client-side? What telemetry, if any, do you collect?',
    answer:
      'All strength calculations run locally in the browser using open-source libraries, and only anonymized event counts are sent to monitor uptime and feature usage. We do not log IP addresses with password checks, nor do we collect personally identifiable information from the tool. You can review our privacy policy and GitHub repository to verify the implementation and opt out of telemetry via the settings panel.',
    keyTakeaways: [
      'Password analysis is performed entirely client-side with open libraries',
      'Telemetry is limited to anonymous event counts for reliability tracking',
      'Users can inspect the code and disable telemetry through privacy settings'
    ],
    relatedQuestions: [
      'do-you-store-password-checker-input',
      'how-do-you-score-passwords',
      'what-is-passwordless-authentication'
    ],
    tags: ['privacy', 'telemetry', 'client-side processing']
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
