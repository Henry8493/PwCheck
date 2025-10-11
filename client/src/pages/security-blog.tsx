import { useEffect } from 'react';
import { Shield, PenSquare, TrendingUp, AlarmClock, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function SecurityBlog() {
  useEffect(() => {
    document.title = 'Pw Check Security Blog | Password Intelligence';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Read expert analysis on password security, breach trends, and compliance insights from the Pw Check research team.'
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

    addMetaTag('og:title', 'Pw Check Security Blog | Password Intelligence');
    addMetaTag('og:description', 'Insights on password breaches, compliance frameworks, and authentication UX.');
    addMetaTag('og:type', 'website');
  }, []);

  const featuredPosts = [
    {
      title: 'Why Password Length Matters More Than Complexity',
      summary: 'We analyse 10+ billion leaked credentials to show why length-first policies slash account takeover risk.',
      category: 'Research',
      readTime: '8 min read'
    },
    {
      title: 'Designing Password Policies for a Remote Workforce',
      summary: 'See how distributed teams can adopt passphrases, MFA, and secure recovery flows without harming productivity.',
      category: 'Strategy',
      readTime: '6 min read'
    },
    {
      title: 'A Practical Checklist for Annual Compliance Audits',
      summary: 'Use our evidence templates to prove ongoing password hygiene across NIST, ISO 27001, and PCI DSS scopes.',
      category: 'Compliance',
      readTime: '7 min read'
    }
  ];

  const newsletterHighlights = [
    {
      title: 'Monthly breach landscape briefing',
      description: 'Top credential exposures summarised with recommended rotations and customer messaging scripts.'
    },
    {
      title: 'Product release spotlights',
      description: 'Discover new Pw Check features that automate reporting, export evidence, and simplify collaboration.'
    },
    {
      title: 'Compliance playbooks',
      description: 'Step-by-step actions for meeting regulator expectations with minimal admin overhead.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-900 dark:to-orange-950">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
              <PenSquare className="h-12 w-12 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pw Check Security Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Curated research, playbooks, and tactics from our password security specialists. Subscribe for monthly insights that
            help you stay ahead of attackers and compliance demands.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Featured Insights</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.title} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="px-0 text-orange-600 dark:text-orange-400">
                    Read insight
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Join the Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get one thoughtfully crafted email per month from the Pw Check research desk. No spam, no fluff—just the
                actionable intelligence you need for the next board update or audit.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
            </div>
            <div className="space-y-4">
              {newsletterHighlights.map((item) => (
                <div key={item.title} className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-orange-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">On Our Radar</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We constantly monitor password cracking advancements, regulatory updates, and authentication UX trends. Here are the
            themes we are preparing deep dives on for upcoming posts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-100 dark:border-orange-800">
              <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Credential Stuffing Economics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Analysing how low-cost botnets monetise breached credentials—and what a resilient password policy costs in
                comparison.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-100 dark:border-orange-800">
              <AlarmClock className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Adaptive Authentication Timelines</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Recommendations on when to escalate step-up MFA based on session risk signals and user behaviour analytics.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-100 dark:border-orange-800">
              <PenSquare className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Human-centred Security Education</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                How to deliver memorable training content that helps employees build better passwords without fatigue.
              </p>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}