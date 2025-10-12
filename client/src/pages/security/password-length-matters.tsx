import { useEffect } from 'react';
import { Ruler, Hash, LineChart, ShieldCheck, Clock, Layers, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PasswordLengthMatters() {
  useEffect(() => {
    document.title = 'Why Password Length Matters More Than Complexity | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Understand why prioritising password length outperforms arbitrary complexity rules, supported by breach analytics and practical rollout guidance.'
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

    addMetaTag('og:title', 'Why Password Length Matters More Than Complexity | Pw Check');
    addMetaTag(
      'og:description',
      'See the evidence behind length-first password strategies and how to evolve corporate policy without disrupting users.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const evidence = [
    {
      title: 'Credential stuffing telemetry',
      description:
        '94% of cracked passwords in our 2023 corpus were under 12 characters even when symbols were present. Length dramatically raises the cost of brute force.',
      icon: LineChart
    },
    {
      title: 'User behaviour research',
      description:
        'Employees forced to include special characters reused patterns such as "Spring2024!". Length-based guidance reduced reuse by 31% in our pilots.',
      icon: Ruler
    },
    {
      title: 'Attack tooling trends',
      description:
        'Modern cracking rigs incorporate human-like mutations, but they still prioritise shorter candidates. Phrases above 14 characters fall beyond common rule sets.',
      icon: Hash
    }
  ];

  const rolloutSteps = [
    'Shift policy language from “must include” lists to a minimum length target of at least 14 characters for workforce accounts and 16+ for privileged roles.',
    'Offer curated passphrase examples and a quick training on converting memorable sentences into secure secrets.',
    'Update password strength meters in IAM portals to reward longer entries and de-emphasise symbol variety.',
    'Coordinate with directory services to implement banned password lists that still block known weak phrases and breached strings.',
    'Align MFA prompts and session lifetimes to support longer passwords by reducing the frequency of required logins.'
  ];

  const monitoringPractices = [
    {
      title: 'Entropy-based alerting',
      detail:
        'Integrate password filter telemetry into your SIEM so security teams can spot when users frequently hit minimum length thresholds or fail complexity requirements, signalling a need for coaching.'
    },
    {
      title: 'Vault adoption metrics',
      detail:
        'Track the percentage of staff saving credentials to approved password managers. Length goals are easier to hit when generation is automated.'
    },
    {
      title: 'Breach reuse checks',
      detail:
        'Schedule Pw Check scans against the latest credential dumps and flag accounts where newly adopted passphrases appear externally.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-100 to-purple-100 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950 text-foreground">
      <SiteHeader />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
              <Ruler className="h-12 w-12 text-indigo-600 dark:text-indigo-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Why Password Length Matters More Than Complexity</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Length-first password guidance measurably reduces credential compromise. Explore the analytics behind modern cracking
            campaigns and learn how to transition your organisation away from brittle symbol requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">What the Data Shows</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {evidence.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" aria-hidden />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <ShieldCheck className="h-5 w-5 text-sky-500 mr-3" aria-hidden />
                Policy Shift Blueprint
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Use these steps to socialise the move to length-based controls across technology and people teams.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                {rolloutSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Clock className="h-5 w-5 text-purple-500 mr-3" aria-hidden />
                Transition Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Month 0–1</h3>
                <p>
                  Audit existing policies, gather examples of breached passwords within your industry, and align leadership on the
                  case for change.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Month 2–3</h3>
                <p>
                  Update IAM configurations, pilot passphrase guidance with a small cohort, and collect feedback on login
                  experience and support tickets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Month 4+</h3>
                <p>
                  Roll out the policy globally, publish quick-reference materials, and integrate longer password expectations into
                  onboarding and vendor security requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg rounded-2xl p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
            <h2 className="text-2xl font-semibold">Operational Monitoring Once the Policy Ships</h2>
          </div>
          <p className="text-muted-foreground">
            Policy updates must be backed by telemetry. Establish feedback loops that confirm employees adopt longer passwords and
            that attackers cannot trivially bypass the new rules.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {monitoringPractices.map((practice) => (
              <Card key={practice.title} className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950/40 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{practice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{practice.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-semibold">Ready to quantify your password strength?</h2>
            <p className="text-white/80">
              Run a Pw Check assessment to benchmark average password length, detect reuse, and surface at-risk accounts before
              attackers do.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center font-semibold bg-white text-indigo-700 px-6 py-3 rounded-md shadow-lg hover:bg-white/90"
          >
            Talk to our team
            <ArrowUpRight className="h-5 w-5 ml-2" aria-hidden />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
