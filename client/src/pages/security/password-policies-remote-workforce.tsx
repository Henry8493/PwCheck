import { useEffect } from 'react';
import { Globe2, Wifi, Users, Lock, ClipboardList, Laptop, Rocket } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PasswordPoliciesRemoteWorkforce() {
  useEffect(() => {
    document.title = 'Designing Password Policies for a Remote Workforce | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Craft effective password policies for distributed teams, balancing usability with security controls like MFA and secure recovery.'
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

    addMetaTag('og:title', 'Designing Password Policies for a Remote Workforce | Pw Check');
    addMetaTag(
      'og:description',
      'Learn how to operationalise passphrases, MFA, and recovery safeguards tailored for globally distributed employees.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const remoteChallenges = [
    {
      title: 'Unmanaged networks',
      description:
        'Coffee shop Wi-Fi and shared home routers expose login sessions to interception. Long passwords and MFA limit damage from credential theft.',
      icon: Wifi
    },
    {
      title: 'Device sprawl',
      description:
        'Employees authenticate from personal laptops, tablets, and phones. Policies must consider varied OS password managers and biometric unlock flows.',
      icon: Laptop
    },
    {
      title: 'Distributed support',
      description:
        'Help desks must reset passwords across time zones. Recovery steps should be scripted, auditable, and resistant to social engineering.',
      icon: Users
    }
  ];

  const designPrinciples = [
    'Adopt a passphrase baseline of 14+ characters for all workforce accounts and require MFA for access to production systems.',
    'Mandate approved password managers with organisational vaults that can be revoked when contractors or employees depart.',
    'Establish just-in-time admin access so privileged credentials exist only when needed and require step-up verification.',
    'Create self-service recovery using hardware keys or TOTP-backed verification instead of knowledge-based questions.',
    'Document policy exceptions, including legacy VPN or OT systems, with remediation timelines and compensating controls.'
  ];

  const rolloutPlaybook = [
    {
      stage: 'Policy drafting',
      detail:
        'Assemble cross-functional stakeholders from security, HR, and IT to agree on requirements and update employee handbooks.',
      owner: 'Security leadership'
    },
    {
      stage: 'Tooling enablement',
      detail:
        'Configure identity providers, SSO, and password managers to enforce passphrase length, MFA enrolment, and device posture checks.',
      owner: 'Identity team'
    },
    {
      stage: 'Communication & training',
      detail:
        'Publish remote-first playbooks, run interactive workshops on phishing-resistant authentication, and provide async recordings for global teams.',
      owner: 'People operations'
    },
    {
      stage: 'Measurement & iteration',
      detail:
        'Instrument help desk tickets, login success rates, and password reset causes to identify friction and refine the policy.',
      owner: 'Security analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-100 to-cyan-100 dark:from-slate-950 dark:via-teal-950 dark:to-cyan-950 text-foreground">
      <SiteHeader />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-teal-100 dark:bg-teal-900">
              <Globe2 className="h-12 w-12 text-teal-600 dark:text-teal-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Designing Password Policies for a Remote Workforce</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Remote work changes authentication risk. Build a policy that empowers employees to sign in securely from anywhere while
            keeping regulators and incident responders confident.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">Remote Authentication Realities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {remoteChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <Card key={challenge.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900">
                        <Icon className="h-8 w-8 text-teal-600 dark:text-teal-300" aria-hidden />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-center">
                      {challenge.description}
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
                <Lock className="h-5 w-5 text-emerald-500 mr-3" aria-hidden />
                Policy Design Principles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {designPrinciples.map((principle) => (
                  <li key={principle} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <ClipboardList className="h-5 w-5 text-cyan-500 mr-3" aria-hidden />
                Rollout Playbook
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Build a phased plan that keeps remote employees productive while policy updates roll out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-muted-foreground">
              {rolloutPlaybook.map((item) => (
                <div key={item.stage}>
                  <h3 className="font-semibold text-foreground">{item.stage}</h3>
                  <p>{item.detail}</p>
                  <p className="text-sm text-muted-foreground">Primary owner: {item.owner}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg rounded-2xl p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
            <h2 className="text-2xl font-semibold">Integrate Password Policies with Remote Culture</h2>
          </div>
          <p className="text-muted-foreground">
            Distributed collaboration thrives when security requirements are transparent and reinforced by leadership habits.
            Pair password policy changes with cultural cues so they become part of day-to-day work rather than friction.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-900/30 border border-emerald-100 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Lead by example</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Executives should share their own passphrase strategies, display hardware tokens on video calls, and celebrate
                  secure behaviours during all-hands meetings.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-900/30 border border-emerald-100 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Embed in rituals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Add quick password hygiene reminders to sprint kickoffs, remote onboarding checklists, and quarterly business
                  reviews with managed service providers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-900/30 border border-emerald-100 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Support async first</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintain searchable FAQs, short Loom videos, and multilingual guides so that employees can resolve password
                  issues without waiting for office hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-semibold">Need a remote-ready password workshop?</h2>
            <p className="text-white/80">
              Pw Check specialists can run tailored sessions for distributed teams and audit your identity stack for gaps before
              your next security review.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center font-semibold bg-white text-teal-700 px-6 py-3 rounded-md shadow-lg hover:bg-white/90"
          >
            Book a briefing
            <Rocket className="h-5 w-5 ml-2" aria-hidden />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
