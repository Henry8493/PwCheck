import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, Scale, LifeBuoy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'SecureCheck Terms of Service';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Review the terms of service for SecureCheck, including acceptable use, availability, and support commitments.'
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

    addMetaTag('og:title', 'SecureCheck Terms of Service');
    addMetaTag('og:description', 'Understand acceptable use, uptime, warranty disclaimers, and support for SecureCheck.');
    addMetaTag('og:type', 'website');
  }, []);

  const clauses = [
    {
      title: 'Service Description',
      content:
        'SecureCheck provides browser-based password analysis. The service is delivered on an as-is basis and may evolve as we release new features.'
    },
    {
      title: 'Acceptable Use',
      content:
        'You agree not to use SecureCheck for unlawful activity or to process credentials you are not authorised to audit.'
    },
    {
      title: 'Availability',
      content:
        'We aim for high availability but do not guarantee uninterrupted access. Planned maintenance will be communicated via release notes.'
    },
    {
      title: 'Warranty Disclaimer',
      content:
        'SecureCheck disclaims all implied warranties, including fitness for a particular purpose. Use of the tool is at your own risk.'
    },
    {
      title: 'Limitation of Liability',
      content:
        'To the extent permitted by law, SecureCheck shall not be liable for indirect, incidental, or consequential damages arising from use of the service.'
    },
    {
      title: 'Governing Law',
      content:
        'These terms are governed by the laws of your jurisdiction unless superseded by mandatory local regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full">
              <Scale className="h-12 w-12 text-slate-700 dark:text-slate-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These terms outline your rights and responsibilities when using SecureCheck. Please read them carefully before
            relying on the service for security or compliance workflows.
          </p>
        </div>

        <div className="space-y-10">
          {clauses.map((clause) => (
            <section key={clause.title} className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{clause.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{clause.content}</p>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Support & Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have questions about these terms, please reach out. We aim to respond within two business days and will do our
            best to resolve any concerns.
          </p>
          <div className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
            <LifeBuoy className="h-6 w-6 text-slate-600 dark:text-slate-300 mt-1" />
            <span>
              Email <a href="mailto:legal@securecheck.app" className="text-slate-700 dark:text-slate-200 underline">legal@securecheck.app</a>{' '}
              or write to our compliance team for clarification and change requests.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
