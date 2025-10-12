import { Mail, PhoneCall, MessageSquare, MapPin, Send } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/page-layout';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function Contact() {
  usePageSeo({
    title: 'Contact Pw Check',
    description:
      'Reach the Pw Check team for enterprise onboarding, compliance questions, or support. We respond to all enquiries within two business days.',
    canonicalPath: '/contact',
    keywords: ['contact pw check', 'password compliance support', 'security partnerships']
  });

  const contactMethods = [
    {
      title: 'Email',
      description: 'General support and enterprise onboarding questions. Expect a response within two business days.',
      icon: Mail,
      value: 'hello@pwcheck.com',
      href: 'mailto:hello@pwcheck.com'
    },
    {
      title: 'Phone',
      description: 'For urgent security notifications. Please leave a voicemail with contact details.',
      icon: PhoneCall,
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      title: 'Community',
      description: 'Join the Pw Check community chat to share feedback and request new features.',
      icon: MessageSquare,
      value: 'community.pwcheck.com',
      href: 'https://community.pwcheck.com'
    }
  ];

  return (
    <PageLayout
      wrapperClassName="bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950"
      mainClassName="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
    >
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <Send className="h-12 w-12 text-indigo-600 dark:text-indigo-400" aria-hidden />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Contact Pw Check</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are here to help with onboarding, compliance questions, and partnership opportunities. Choose the channel that
          suits you best.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2" aria-labelledby="contact-form-heading">
        <Card className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
          <CardHeader>
            <h2 id="contact-form-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
              Message the Team
            </h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" aria-label="Contact form">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="name">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="email">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="message">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help?" rows={4} required />
              </div>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                Send message
              </Button>
              <p className="text-xs text-muted-foreground">For enquiries, please email us directly.</p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6" aria-labelledby="contact-methods-heading">
          <h2 id="contact-methods-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Options
          </h2>
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
                <CardHeader className="flex flex-row items-start space-x-3">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                      <p>{method.description}</p>
                      <a href={method.href} className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {method.value}
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}

          <Card className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
            <CardHeader className="flex items-start space-x-3">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden />
              </div>
              <div>
                <CardTitle className="text-xl">Registered Office</CardTitle>
                <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                  <p>Pw Check</p>
                  <p>221B Password Lane</p>
                  <p>London, UK</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
