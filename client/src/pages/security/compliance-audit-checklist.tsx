import { useEffect } from 'react';
import { ClipboardCheck, FileText, Building, Shield, CheckCircle2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ComplianceAuditChecklist() {
  useEffect(() => {
    document.title = 'A Practical Checklist for Annual Compliance Audits | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Follow this end-to-end checklist to prepare evidence, interviews, and technical controls for password compliance audits across key frameworks.'
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

    addMetaTag('og:title', 'A Practical Checklist for Annual Compliance Audits | Pw Check');
    addMetaTag(
      'og:description',
      'Map required controls to repeatable tasks so your team approaches password-related audit evidence with confidence.'
    );
    addMetaTag('og:type', 'article');
  }, []);

  const auditPhases = [
    {
      title: 'Preparation (90-60 days out)',
      description:
        'Confirm audit scope, framework mappings, and key contacts. Kick off evidence requests early to avoid scrambling for logs later.'
    },
    {
      title: 'Execution (60-0 days)',
      description:
        'Provide curated evidence packages, coordinate stakeholder interviews, and track outstanding requests in a shared workspace.'
    },
    {
      title: 'Remediation & improvement (post-audit)',
      description:
        'Document findings, assign remediation owners, and integrate lessons learned into the next cycle’s runbook.'
    }
  ];

  const evidenceChecklist = [
    'Password policy document showing length, MFA, and reuse requirements aligned with NIST 800-63 and ISO 27001 Annex A.9.',
    'Directory or IdP configuration screenshots demonstrating technical enforcement (password filters, lockout policies, MFA enrollment).',
    'Pw Check scan reports summarising credential reuse, password age distributions, and breach exposure over the last 12 months.',
    'Ticketing system exports showing how password reset requests are authenticated and tracked for fraud.',
    'Training records confirming completion rates for security awareness modules covering password hygiene and phishing.'
  ];

  const stakeholderInterviews = [
    {
      role: 'Identity & access management owners',
      focus:
        'Discuss enforcement tooling, exception handling, and roadmap for deprecating legacy authentication mechanisms.',
      artefacts: 'System architecture diagrams, privileged access workflows'
    },
    {
      role: 'Security operations',
      focus:
        'Review monitoring of password-related alerts, incident response drills, and integration with breach notification obligations.',
      artefacts: 'SIEM dashboards, incident runbooks'
    },
    {
      role: 'Human resources / people ops',
      focus:
        'Validate joiner/mover/leaver processes, especially revoking credentials for remote staff and contractors.',
      artefacts: 'Access review logs, termination checklists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-100 dark:from-slate-950 dark:via-amber-950 dark:to-orange-950 text-foreground">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900">
              <ClipboardCheck className="h-12 w-12 text-amber-600 dark:text-amber-300" aria-hidden />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">A Practical Checklist for Annual Compliance Audits</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Annual audits do not have to derail operations. Use this repeatable checklist to satisfy assessors, demonstrate control
            maturity, and surface improvements for the next cycle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">Structure Your Audit Runbook</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {auditPhases.map((phase) => (
              <Card key={phase.title} className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="h-5 w-5 text-amber-500 mr-3" aria-hidden />
                Evidence Essentials Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {evidenceChecklist.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Building className="h-5 w-5 text-orange-500 mr-3" aria-hidden />
                Who Auditors Want to Meet
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Schedule interviews early and prepare supporting artefacts to keep sessions focused and efficient.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-muted-foreground">
              {stakeholderInterviews.map((stakeholder) => (
                <div key={stakeholder.role}>
                  <h3 className="font-semibold text-foreground">{stakeholder.role}</h3>
                  <p>{stakeholder.focus}</p>
                  <p className="text-sm text-muted-foreground">Bring: {stakeholder.artefacts}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="bg-white/90 dark:bg-slate-900/80 border-0 shadow-lg rounded-2xl p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
            <h2 className="text-2xl font-semibold">Automate Evidence Collection</h2>
          </div>
          <p className="text-muted-foreground">
            Manual evidence wrangling drains time from control improvement. Build automation into your audit cycle so that reports,
            approvals, and attestations are continuously generated.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/30 border border-amber-100 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Centralise artefacts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Store policies, reports, and approvals in a dedicated evidence repository with access controls and retention
                  aligned to your frameworks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/30 border border-amber-100 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Automate attestations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use workflow tools to prompt system owners for quarterly password control attestations and export the approvals
                  for auditors.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/30 border border-amber-100 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Rehearse walkthroughs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Run tabletop exercises walking through password reset and revocation scenarios so spokespeople are ready for
                  auditor questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 text-white rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-semibold">Build your audit-ready evidence library with Pw Check</h2>
            <p className="text-white/80">
              Export compliance-aligned password reports, automate remediation tracking, and give auditors confidence in minutes.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center font-semibold bg-white text-amber-700 px-6 py-3 rounded-md shadow-lg hover:bg-white/90"
          >
            Start a pilot
            <CheckCircle2 className="h-5 w-5 ml-2" aria-hidden />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
