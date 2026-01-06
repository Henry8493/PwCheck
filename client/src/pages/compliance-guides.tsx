import { useEffect } from 'react';
import { BookOpen, Layers, Target, ClipboardCheck, Clock3, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function ComplianceGuides() {
  const canonicalPath = '/compliance-guides';
  const canonicalUrl =
    typeof window !== 'undefined' ? new URL(canonicalPath, window.location.origin).toString() : canonicalPath;

  usePageSeo({
    title: 'Password Compliance Guides | Pw Check',
    description:
      'Step-by-step password compliance guides for NIST, GDPR, ISO 27001, and PCI DSS. Understand scope, stakeholders, and controls required for certification.',
    canonicalPath,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'Password Compliance Guides',
      description:
        'Step-by-step password compliance guides for NIST, GDPR, ISO 27001, and PCI DSS. Understand scope, stakeholders, and controls required for certification.',
      author: {
        '@type': 'Organization',
        name: 'Pw Check'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pw Check'
      },
      datePublished: '2024-04-30',
      dateModified: '2024-06-12',
      url: canonicalUrl
    }
  });

  const guides = [
    {
      name: 'NIST SP 800-63B',
      focus: 'Federal and public sector identity assurance',
      steps: [
        'Adopt memorized secret rules without unnecessary complexity requirements.',
        'Implement breach password screening against current compromised datasets.',
        'Provide secure recovery options and restrict knowledge-based questions.'
      ]
    },
    {
      name: 'GDPR',
      focus: 'Data protection across the European Union',
      steps: [
        'Map personal data flows and classify authentication risk for each system.',
        'Document technical and organisational measures supporting strong authentication.',
        'Demonstrate regular reviews, staff training, and incident response alignment.'
      ]
    },
    {
      name: 'ISO 27001',
      focus: 'Enterprise information security management',
      steps: [
        'Align password policies with Annex A control set and risk assessments.',
        'Integrate Pw Check reports into management review evidence.',
        'Track corrective actions for weak passwords found during internal audits.'
      ]
    },
    {
      name: 'PCI DSS v4.0',
      focus: 'Payment card industry data environments',
      steps: [
        'Ensure passwords meet minimum length and alphanumeric requirements.',
        'Enforce multi-factor authentication for all access into the CDE.',
        'Log password policy changes and review them during quarterly security scans.'
      ]
    }
  ];

  const programmePhases = [
    {
      title: 'Scope & Inventory',
      description: 'Identify systems, privileged accounts, and third-party services that fall under your compliance boundary.',
      icon: Layers
    },
    {
      title: 'Control Implementation',
      description: 'Apply technical safeguards, deploy SecureCheck for validation, and train staff on new password expectations.',
      icon: ClipboardCheck
    },
    {
      title: 'Continuous Monitoring',
      description: 'Track compliance drift, monitor breach feeds, and keep documentation ready for auditors year-round.',
      icon: Clock3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 dark:from-gray-900 dark:to-purple-950">
      <SiteHeader />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <BookOpen className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Compliance Guides</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Navigate certification requirements with practical, plain-language guidance. Each guide highlights the password
            controls auditors expect and how Pw Check keeps evidence current.
          </p>
        </div>

        <section className="mb-16 space-y-8">
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Password Compliance Guides by Framework</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Compare what changes between frameworks, then validate your policies using the{' '}
              <Link href="/compliance-comparison" className="font-semibold text-purple-700 dark:text-purple-300 underline">
                compliance standards comparison
              </Link>{' '}
              and run updated credentials through the{' '}
              <Link href="/nist-password-checker" className="font-semibold text-purple-700 dark:text-purple-300 underline">
                NIST password checker
              </Link>{' '}
              before audits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <Card key={guide.name} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
                <CardHeader>
                  <CardTitle className="text-xl">{guide.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {guide.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    {guide.steps.map((step) => (
                      <li key={step} className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mt-1 mr-3" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Programme Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programmePhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.title} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                      <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{phase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col items-center space-y-3 text-center">
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
              Each phase produces evidence you can drop into Pw Check. Export a report, then compare requirements with the{' '}
              <Link href="/compliance-comparison" className="font-semibold text-purple-700 dark:text-purple-300 underline">
                compliance standards comparison guide
              </Link>{' '}
              to keep every control aligned.
            </p>
            <Link
              href="/"
              className="inline-flex items-center font-semibold text-purple-700 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-200"
            >
              Launch the password analyzer
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
