import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw, ShieldX, Database, ClipboardCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AvoidPasswordReuse() {
  useEffect(() => {
    document.title = 'Avoid Password Reuse | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Discover why password reuse creates systemic risk, how to detect it, and the controls that keep credentials unique.'
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

    addMetaTag('og:title', 'Avoid Password Reuse | Pw Check');
    addMetaTag(
      'og:description',
      'Stop credential stuffing by enforcing unique passwords, monitoring for reuse, and guiding teams with practical policies.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const risks = [
    {
      title: 'Breach Cascade',
      description: 'Compromised credentials from one service can unlock internal systems if staff reuse the same password.',
      icon: AlertTriangle
    },
    {
      title: 'Invisible Shadow IT',
      description: 'Untracked accounts using work emails and reused passwords weaken vendor risk and audit readiness.',
      icon: ShieldX
    },
    {
      title: 'Compliance Findings',
      description: 'Frameworks such as ISO 27001 and PCI DSS expect controls preventing reuse, especially for privileged access.',
      icon: Database
    }
  ];

  const controls = [
    'Require password managers for storing and generating credentials across the organisation.',
    'Automate breach monitoring with services that flag when corporate email addresses appear in credential dumps.',
    'Review directory logs to identify simultaneous logins with outdated or shared credentials.',
    'Implement conditional access policies that block known reused passwords via password filters or SSO rules.'
  ];

  const changeManagement = [
    'Explain the business impact of password reuse with real incident examples relevant to each department.',
    'Provide migration guides that show how to replace reused passwords with unique passphrases stored in managed vaults.',
    'Run quarterly health checks using Pw Check to verify no reused credentials remain in high-value systems.',
    'Celebrate teams that achieve zero-reuse status and share their processes in internal knowledge bases.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 dark:from-slate-950 dark:to-rose-950 text-foreground">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-rose-100 dark:bg-rose-900">
              <RefreshCcw className="h-12 w-12 text-rose-600 dark:text-rose-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Break the Password Reuse Habit</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Password reuse gives attackers a head start. Replace repeated credentials with unique passphrases that align with
            your compliance framework and reduce the blast radius of any breach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">Why Reuse Is Dangerous</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {risks.map((risk) => {
              const Icon = risk.icon;
              return (
                <Card key={risk.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-rose-100 dark:bg-rose-900">
                        <Icon className="h-8 w-8 text-rose-600 dark:text-rose-300" aria-hidden />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{risk.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-center">
                      {risk.description}
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
                <ClipboardCheck className="h-5 w-5 text-rose-500 mr-3" aria-hidden />
                Preventative Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {controls.map((control) => (
                  <li key={control} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-rose-500" aria-hidden />
                    <span>{control}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-3" aria-hidden />
                Change Management Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                {changeManagement.map((item) => (
                  <li key={item}>{item}</li>
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
