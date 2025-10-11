import { useEffect } from 'react';
import { KeyRound, ShieldCheck, UsersRound, LockKeyhole, ClipboardList } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UsePasswordManager() {
  useEffect(() => {
    document.title = 'Password Manager Adoption Guide | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Learn how password managers reduce breaches, how to vet vendors, and how to roll out secure credential sharing for teams.'
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

    addMetaTag('og:title', 'Password Manager Adoption Guide | Pw Check');
    addMetaTag(
      'og:description',
      'Practical guidance for selecting, securing, and launching a password manager that keeps credentials unique and encrypted.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const benefits = [
    {
      title: 'Unique Credentials Everywhere',
      description: 'Generate one-of-a-kind passwords with built-in breach monitoring and rotation reminders.',
      icon: KeyRound
    },
    {
      title: 'Encrypted Storage and Sync',
      description: 'Modern vaults encrypt locally, sync securely, and give detailed audit trails for compliance.',
      icon: ShieldCheck
    },
    {
      title: 'Frictionless Collaboration',
      description: 'Shared vaults and role-based permissions help teams distribute secrets without messaging apps.',
      icon: UsersRound
    }
  ];

  const evaluationCriteria = [
    'Zero-knowledge architecture with published security audits.',
    'Granular access controls (role-based access, approval workflows, emergency access).',
    'Native support for SSO, SCIM provisioning, and hardware-backed MFA.',
    'Transparent incident response process and clear data residency options.'
  ];

  const rolloutSteps = [
    'Pilot the password manager with a small security champion group to gather feedback on usability.',
    'Import existing credentials from spreadsheets or browsers, flagging reused or weak entries for immediate replacement.',
    'Enable mandatory MFA for vault access and document recovery processes using secure administrators.',
    'Run short enablement sessions showing how autofill works on desktop and mobile, highlighting phishing protections.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-950 dark:to-amber-950 text-foreground">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-orange-100 dark:bg-orange-900">
              <LockKeyhole className="h-12 w-12 text-orange-600 dark:text-orange-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Why Your Team Needs a Password Manager</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Password managers enforce unique, complex credentials without overburdening staff. They align with NIST SP 800-63B
            guidance and form the foundation of modern credential hygiene programs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">Key Security and Productivity Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                        <Icon className="h-8 w-8 text-orange-600 dark:text-orange-300" aria-hidden />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-center">
                      {benefit.description}
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
                <ClipboardList className="h-5 w-5 text-orange-500 mr-3" aria-hidden />
                Vendor Evaluation Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {evaluationCriteria.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-orange-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-3" aria-hidden />
                Roll-out Playbook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                {rolloutSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
