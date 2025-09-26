import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, Mail, PhoneCall, MessageSquare, MapPin, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact SecureCheck';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Contact the SecureCheck team for support, partnerships, or compliance questions. We respond within two business days.'
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

    addMetaTag('og:title', 'Contact SecureCheck');
    addMetaTag('og:description', 'Reach the SecureCheck team for product support, enterprise onboarding, or media enquiries.');
    addMetaTag('og:type', 'website');
  }, []);

  const contactMethods = [
    {
      title: 'Email',
      description: 'General support and enterprise onboarding questions. Expect a response within two business days.',
      icon: Mail,
      value: 'hello@securecheck.app',
      href: 'mailto:hello@securecheck.app'
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
      description: 'Join the SecureCheck community chat to share feedback and request new features.',
      icon: MessageSquare,
      value: 'community.securecheck.app',
      href: 'https://community.securecheck.app'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950">
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">SecureCheck</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                100% Private
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
              <Send className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact SecureCheck</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are here to help with onboarding, compliance questions, and partnership opportunities. Choose the channel that
            suits you best.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
            <CardHeader>
              <CardTitle className="text-2xl">Message the Team</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
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
                <p className="text-xs text-muted-foreground">
                  We do not store submitted messages in this demo environment. For production enquiries, please email us directly.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="border-0 shadow-lg bg-white/90 dark:bg-gray-900/80">
                  <CardHeader className="flex flex-row items-start space-x-3">
                    <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Registered Office</CardTitle>
                  <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                    <p>SecureCheck Ltd.</p>
                    <p>221B Password Lane</p>
                    <p>London, UK</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
