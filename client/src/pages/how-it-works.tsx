import { useEffect } from 'react';
import { Link } from 'wouter';
import { Workflow, Lock, Gauge, ScrollText, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function HowItWorks() {
  useEffect(() => {
    document.title = 'How Pw Check Works | Password Analysis Workflow';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Understand Pw Check\'s privacy-first password analysis workflow, scoring methodology, and compliance-ready reporting.'
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

    addMetaTag('og:title', 'How Pw Check Works | Password Analysis Workflow');
    addMetaTag('og:description', 'Explore our privacy-first architecture and compliance scoring pipeline.');
    addMetaTag('og:type', 'website');
  }, []);

  const stages = [
    {
      title: 'Client-side Evaluation',
      description: 'All password checks run locally in the browser. Nothing is transmitted or stored on Pw Check servers.',
      icon: Lock
    },
    {
      title: 'Policy-aware Scoring',
      description: 'Our scoring engine compares each password against the requirements of multiple compliance frameworks.',
      icon: Gauge
    },
    {
      title: 'Actionable Reporting',
      description: 'Generate human-readable insights and export policy evidence for audits or executive updates.',
      icon: ScrollText
    }
  ];

  const trustSignals = [
    'Open-source components with transparent change history.',
    'No tracking scripts or analytics pixels in the application.',
    'Regularly refreshed breach corpora to detect compromised credentials.',
    'Extensible rules engine for custom organisational policies.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-slate-900 dark:to-cyan-950">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-full">
              <Workflow className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">How Pw Check Works</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pw Check combines client-side privacy, up-to-date compliance logic, and intuitive reporting. Learn how the tool
            guides teams from password capture to audit-ready documentation in seconds.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <Card key={stage.title} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900">
                        <Icon className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>
                    <CardTitle>{stage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {stage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Privacy-first Architecture</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your credentials never leave the device. Pw Check leverages modern browser APIs, Web Crypto, and optimised
                datasets to evaluate password strength and compliance locally without risking leakage.
              </p>
              <Link href="/">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Try Pw Check Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {trustSignals.map((item) => (
                <div key={item} className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-2 w-2 rounded-full bg-cyan-500" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Collaboration Workflow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-cyan-100 dark:border-cyan-900 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 text-cyan-500 mr-2" />
                  Share Findings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                  Export compliance summaries or copy remediation steps directly into your ticketing system.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-cyan-100 dark:border-cyan-900 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Gauge className="h-5 w-5 text-cyan-500 mr-2" />
                  Track Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                  Monitor improvements with compliance scores and highlight the most impactful policy updates.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-cyan-100 dark:border-cyan-900 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ScrollText className="h-5 w-5 text-cyan-500 mr-2" />
                  Evidence for Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                  Produce reports that map findings back to policy clauses and regulatory citations in minutes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
