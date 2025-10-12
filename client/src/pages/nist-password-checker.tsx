import { Link } from 'wouter';
import { CheckCircle, AlertTriangle, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function NISTPasswordChecker() {
  const canonicalPath = '/nist-password-checker';
  const canonicalUrl =
    typeof window !== 'undefined'
      ? new URL(canonicalPath, window.location.origin).toString()
      : '';

  usePageSeo({
    title: 'NIST Password Checker - SP 800-63B Compliance Validator | Pw Check',
    description:
      'Free NIST SP 800-63B password compliance checker. Validate passwords against official NIST guidelines including minimum length, common password detection, and security requirements.',
    canonicalPath,
    keywords: [
      'NIST password checker',
      'SP 800-63B compliance',
      'password policy audit',
      'federal cybersecurity standards'
    ],
    structuredData: canonicalUrl
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'NIST Password Checker',
          description:
            'Validate passwords against NIST SP 800-63B digital identity guidelines with the Pw Check compliance analyzer.',
          url: canonicalUrl
        }
      : undefined
  });

  const nistRequirements = [
    {
      title: 'Minimum 8 Characters',
      description: 'NIST SP 800-63B requires at least 8 characters for memorized secrets',
      icon: CheckCircle,
      type: 'length' as const
    },
    {
      title: 'Maximum 64 Characters',
      description: 'Upper limit to prevent system issues while allowing passphrases',
      icon: CheckCircle,
      type: 'length' as const
    },
    {
      title: 'No Common Passwords',
      description: 'Must not be found in breach databases or common password lists',
      icon: AlertTriangle,
      type: 'security' as const
    },
    {
      title: 'No Composition Rules',
      description: 'NIST explicitly discourages forced character type requirements',
      icon: CheckCircle,
      type: 'policy' as const
    }
  ];

  const benefits = [
    'Real-time validation against NIST SP 800-63B standards',
    'Privacy-first approach - all analysis happens in your browser',
    'Educational feedback explaining NIST rationale',
    'Integration-ready for compliance documentation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <SiteHeader />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Lock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            NIST Password Checker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Validate your passwords against <strong>NIST SP 800-63B</strong> guidelines with our 
            free, privacy-first compliance checker. Ensure your authentication systems meet 
            federal cybersecurity standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Checking Passwords
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              No registration required • 100% client-side processing
            </div>
          </div>
        </div>

        {/* NIST Requirements Section */}
        <section aria-labelledby="nist-requirements-heading">
          <h2 id="nist-requirements-heading" className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            NIST SP 800-63B Password Requirements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nistRequirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'security' 
                          ? 'bg-red-100 dark:bg-red-900' 
                          : 'bg-green-100 dark:bg-green-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'security'
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {requirement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section aria-labelledby="nist-benefits-heading">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 id="nist-benefits-heading" className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Why Use Our NIST Password Checker?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start" data-testid={`benefit-${index}`}>
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  About NIST SP 800-63B
                </h3>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  NIST Special Publication 800-63B provides guidelines for digital identity authentication.
                  It emphasizes user-friendly security practices, moving away from complex composition rules
                  in favor of length and uniqueness requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white" aria-labelledby="nist-cta-heading">
          <h2 id="nist-cta-heading" className="text-3xl font-bold mb-4">
            Ready to Check Your Passwords?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start validating your passwords against NIST SP 800-63B requirements in seconds
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              Check Password Compliance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
