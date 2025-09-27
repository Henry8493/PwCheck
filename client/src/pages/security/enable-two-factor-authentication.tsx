import { useEffect } from 'react';
import { ShieldAlert, Smartphone, QrCode, KeySquare, BellRing } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EnableTwoFactorAuthentication() {
  useEffect(() => {
    document.title = 'Enable Two-Factor Authentication | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Understand the value of two-factor authentication, the options available, and how to deploy MFA for your organisation.'
    );

    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Enable Two-Factor Authentication | Pw Check');
    addMetaTag(
      'og:description',
      'Learn the difference between SMS, authenticator apps, and passkeys while building a rollout plan that increases adoption.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const factors = [
    {
      title: 'Authenticator Apps',
      description: 'Time-based one-time codes generated on trusted devices. Works offline and integrates with most identity providers.',
      icon: Smartphone
    },
    {
      title: 'Hardware Security Keys',
      description: 'FIDO2/WebAuthn compliant keys resist phishing and can enforce strong authentication for admins and developers.',
      icon: KeySquare
    },
    {
      title: 'Push Notifications',
      description: 'Modern push-based MFA delivers tap-to-approve experiences with device intelligence for risk-based policies.',
      icon: BellRing
    }
  ];

  const deploymentSteps = [
    'Prioritise privileged and high-risk applications, ensuring identity provider policies require MFA at every login.',
    'Offer at least two MFA options to balance usability and accessibility needs, including hardware keys for critical roles.',
    'Educate staff on phishing-resistant prompts and how to report suspicious MFA requests immediately.',
    'Track enrollment metrics in the first 30 days and send targeted nudges to teams lagging behind.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-indigo-950 text-foreground">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
              <ShieldAlert className="h-12 w-12 text-indigo-600 dark:text-indigo-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Enable Two-Factor Authentication Everywhere</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Two-factor authentication blocks the majority of credential stuffing and phishing attacks. Pair strong passwords with
            phishing-resistant factors to meet compliance mandates and reduce account takeover risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">Common Factor Types</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" aria-hidden />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-center">
                      {factor.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <QrCode className="h-5 w-5 text-indigo-500 mr-3" aria-hidden />
                Enrollment Essentials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <span>Document fallback verification methods and keep recovery codes in a protected vault.</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <span>Integrate MFA checks into onboarding and offboarding workflows so access is revoked cleanly.</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <span>Test MFA enforcement on remote access, VPN, and administrative consoles before broad launch.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Smartphone className="h-5 w-5 text-green-500 mr-3" aria-hidden />
                Deployment Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                {deploymentSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
