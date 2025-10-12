import { Lock, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { PasswordChecker } from '@/components/password-checker';
import { PasswordGenerator } from '@/components/password-generator';
import { PrivacyNotice } from '@/components/privacy-notice';
import { SecurityTips } from '@/components/security-tips';
import { MethodologySection } from '@/components/methodology-section';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function Home() {
  const canonicalPath = '/';
  const canonicalUrl =
    typeof window !== 'undefined'
      ? new URL(canonicalPath, window.location.origin).toString()
      : '';

  usePageSeo({
    title: 'Pw Check | Password Compliance & Strength Analyzer',
    description:
      'Run instant password checks against NIST, GDPR, ISO 27001, and PCI DSS requirements. Generate compliant credentials and privacy-first reports.',
    canonicalPath,
    keywords: [
      'password analyzer',
      'nist password checker',
      'password compliance tool',
      'pci dss password requirements',
      'iso 27001 password rules'
    ],
    structuredData: canonicalUrl
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Pw Check | Password Compliance & Strength Analyzer',
          description:
            'Run instant password checks against NIST, GDPR, ISO 27001, and PCI DSS requirements using the Pw Check analyzer.',
          url: canonicalUrl,
          mainEntity: {
            '@type': 'WebApplication',
            name: 'Pw Check Password Analyzer',
            applicationCategory: 'SecurityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            }
          }
        }
      : undefined
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-foreground">
      <SiteHeader />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Lock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Password Analyzer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Validate your passwords against industry standards including <strong>NIST SP 800-63B</strong>,
            <strong> GDPR</strong>, <strong>ISO 27001</strong>, and <strong>PCI DSS</strong> compliance requirements.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-12">
            Client-side analysis • No data collection • Enterprise-grade validation
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" aria-labelledby="password-tools-heading">
          <h2 id="password-tools-heading" className="sr-only">
            Password analysis tools
          </h2>
          <PasswordChecker />

          <div className="space-y-6" aria-labelledby="password-support-heading">
            <h3 id="password-support-heading" className="sr-only">
              Supporting password resources
            </h3>
            <PasswordGenerator />
            <PrivacyNotice />
            <SecurityTips />
          </div>
        </section>

        <section className="mb-16" aria-labelledby="supported-standards-heading">
          <div className="text-center mb-12">
            <h2 id="supported-standards-heading" className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Compliance Standards We Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our password analyzer validates against major security frameworks and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/nist-password-checker" className="group" data-testid="card-nist">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    NIST SP 800-63B
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Federal cybersecurity guidelines for digital identity authentication
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/gdpr-password-compliance" className="group" data-testid="card-gdpr">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    GDPR Compliance
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    EU data protection requirements and privacy by design principles
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/iso27001-password-rules" className="group" data-testid="card-iso27001">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">ISO 27001</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    International information security management standards
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/pci-dss-password-requirements" className="group" data-testid="card-pci-dss">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400">PCI DSS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Payment card industry security standards for cardholder data
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <MethodologySection />
      </main>
      <SiteFooter />
    </div>
  );
}
