import { useEffect } from 'react';
import { CheckCircle, ListChecks, Lock, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function PasswordBestPractices() {
  const canonicalPath = '/password-best-practices';
  const canonicalUrl =
    typeof window !== 'undefined' ? new URL(canonicalPath, window.location.origin).toString() : canonicalPath;

  usePageSeo({
    title: 'Password Best Practices Guide | Pw Check',
    description:
      'Actionable password best practices for teams and individuals. Learn how to create secure passphrases, avoid common mistakes, and align with leading compliance standards.',
    canonicalPath,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Password Best Practices',
      description:
        'Actionable password best practices for teams and individuals. Learn how to create secure passphrases, avoid common mistakes, and align with leading compliance standards.',
      author: {
        '@type': 'Organization',
        name: 'Pw Check'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pw Check'
      },
      datePublished: '2024-05-10',
      dateModified: '2024-06-18',
      url: canonicalUrl
    }
  });

  const fundamentals = [
    {
      title: 'Think in Passphrases',
      description: 'Use four or more unrelated words to create memorable and resilient passphrases of 16+ characters.',
      icon: Sparkles
    },
    {
      title: 'Unique Per System',
      description: 'Never reuse passwords. Each system should have its own credential protected by MFA where possible.',
      icon: CheckCircle
    },
    {
      title: 'Password Managers',
      description: 'Adopt a vetted password manager to generate, store, and share credentials securely across teams.',
      icon: Lock
    }
  ];

  const pitfalls = [
    'Using predictable substitutions like "P@ssw0rd" that attackers anticipate.',
    'Sharing credentials over email, chat, or tickets without encryption.',
    'Ignoring breach notifications that indicate exposed passwords.',
    'Keeping legacy systems on outdated complexity policies that harm usability.'
  ];

  const quickChecklist = [
    'Length ≥ 14 characters (or policy-defined passphrase minimums).',
    'Enabled MFA wherever available.',
    'Password manager roll-out plan communicated to staff.',
    'Quarterly review of breached password reports.',
    'Documented recovery process without insecure reset questions.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900 dark:to-blue-950">
      <SiteHeader />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <ListChecks className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Password Best Practices
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build a password culture that balances user experience with measurable security. These recommendations align with
            NIST, ISO 27001, and PCI DSS guidance without resorting to outdated complexity rules.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Core Fundamentals</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {fundamentals.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Quick Readiness Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {quickChecklist.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mt-1 mr-2 inline-flex h-2 w-2 rounded-full bg-green-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  Common Pitfalls to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {pitfalls.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mt-1 mr-2 inline-flex h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Roll-out Tips for Security Teams</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Combine automated password auditing with a human-first enablement programme. Start with short sessions that explain
              why composition rules are outdated, then give staff a template for building passphrases that meet compliance
              expectations.
            </p>
            <p>
              Reinforce adoption by measuring password reuse rates and triggering friendly nudges before compliance audits. Pair
              Pw Check&apos;s analysis with automated breach monitoring so high-risk passwords are rotated quickly without the
              fatigue of scheduled resets. Validate new guidance in the{' '}
              <Link
                href="/nist-password-checker"
                className="font-semibold text-blue-700 dark:text-blue-300 underline"
              >
                NIST password checker
              </Link>{' '}
              and review trade-offs in the{' '}
              <Link
                href="/compliance-comparison"
                className="font-semibold text-blue-700 dark:text-blue-300 underline"
              >
                compliance standards comparison
              </Link>{' '}
              before final sign-off.
            </p>
          </div>
        </section>

        <section className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800 rounded-2xl p-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Connect best practices to live checks</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Move from theory to evidence by testing your policies with Pw Check. Generate compliant passphrases, validate them
              against NIST guidance, and share a standards-aware report with stakeholders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Open the password analyzer
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
            </Link>
            <Link
              href="/compliance-comparison"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-200 font-semibold"
            >
              Review framework differences
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
