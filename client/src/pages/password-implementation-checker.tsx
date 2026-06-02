import { Link } from 'wouter';
import { ClipboardCheck, KeyRound, LockKeyhole, ShieldCheck } from 'lucide-react';

import { PasswordImplementationScanner } from '@/components/password-implementation-scanner';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PageLayout } from '@/components/page-layout';
import { usePageSeo } from '@/hooks/use-page-seo';

const gradeDefinitions = [
  { grade: 'A', label: 'Modern, password-manager friendly, standards-aligned' },
  { grade: 'B', label: 'Mostly good with minor implementation issues' },
  { grade: 'C', label: 'Usable but outdated password UX or policy signals' },
  { grade: 'D', label: 'Problematic patterns that can frustrate secure users' },
  { grade: 'F', label: 'Actively hostile or risky implementation choices' },
];

const seoLinks = [
  'Password manager compatibility checker',
  'Login form security checker',
  'NIST password policy checker for websites',
  'OWASP authentication checker',
];

export default function PasswordImplementationChecker() {
  const canonicalPath = '/password-implementation-checker';
  const canonicalUrl =
    typeof window !== 'undefined'
      ? new URL(canonicalPath, window.location.origin).toString()
      : '';

  usePageSeo({
    title: 'Password Implementation Checker | Login Form Security Scanner',
    description:
      'Scan login, sign-up, and password reset pages for password manager compatibility, paste blocking, TLS, autocomplete, maxlength, and OWASP/NIST password UX issues.',
    canonicalPath,
    keywords: [
      'password manager compatibility checker',
      'login form security checker',
      'nist password policy checker for websites',
      'owasp authentication checker',
      'password implementation checker',
      'password autofill checker',
    ],
    structuredData: canonicalUrl
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Pw Check Password Implementation Checker',
          applicationCategory: 'SecurityApplication',
          operatingSystem: 'Web',
          url: canonicalUrl,
          description:
            'Scanner for password form implementation quality, password-manager compatibility, TLS, paste support, and modern authentication UX guidance.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }
      : undefined,
  });

  return (
    <PageLayout wrapperClassName="bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-foreground dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12 text-center" aria-labelledby="implementation-checker-heading">
          <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
            New: website password implementation scanner
          </Badge>
          <h1 id="implementation-checker-heading" className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Password UX & Security Grade for any login form
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Pw Check now goes beyond checking individual passwords. Scan a URL to evaluate whether the website’s password implementation supports password managers, autofill, paste, long passwords, HTTPS, and modern OWASP/NIST guidance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {seoLinks.map((linkLabel) => (
              <Badge key={linkLabel} variant="secondary" className="bg-white/80 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                {linkLabel}
              </Badge>
            ))}
          </div>
        </section>

        <PasswordImplementationScanner />

        <section className="mt-16 grid gap-6 lg:grid-cols-3" aria-labelledby="standards-heading">
          <div className="lg:col-span-1">
            <h2 id="standards-heading" className="text-3xl font-bold text-gray-900 dark:text-white">
              Built around modern password guidance
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              OWASP and NIST-aligned implementations should help users choose strong unique passwords instead of fighting password managers or imposing outdated character recipes.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
            <Card className="bg-white/95 dark:bg-gray-900/90">
              <CardContent className="p-6">
                <ShieldCheck className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Password manager friendly</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Checks autocomplete hints, paste support, semantic password fields, and maxlength choices that affect autofill and generated passwords.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-gray-900/90">
              <CardContent className="p-6">
                <LockKeyhole className="mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Secure transport and reset UX</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Flags insecure HTTP login pages, missing TLS redirects, and visible reset copy that may increase account enumeration risk.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-gray-900/90">
              <CardContent className="p-6">
                <KeyRound className="mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Modern password policy signals</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Looks for visible requirements, long-password support, and arbitrary uppercase/lowercase/number/symbol rules that can be outdated.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-gray-900/90">
              <CardContent className="p-6">
                <ClipboardCheck className="mb-4 h-8 w-8 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Actionable letter grade</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Reports A through F grades with prioritized fixes so teams can improve both login security and user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border bg-white/95 p-6 shadow-sm dark:bg-gray-900/90" aria-labelledby="grading-heading">
          <h2 id="grading-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
            Grade definitions
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {gradeDefinitions.map((definition) => (
              <div key={definition.grade} className="rounded-lg border p-4">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-300">{definition.grade}</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{definition.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300">
          Already checking individual passwords?{' '}
          <Link href="/" className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-300">
            Use the private password strength analyzer
          </Link>
          .
        </section>
      </div>
    </PageLayout>
  );
}
