import { useEffect } from 'react';
import { Shield, LockKeyhole, EyeOff, Server, FileCheck2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Pw Check Privacy Policy';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Learn how Pw Check protects your privacy. All password analysis runs locally, with no tracking, logging, or data storage.'
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

    addMetaTag('og:title', 'Pw Check Privacy Policy');
    addMetaTag('og:description', 'Your passwords never leave the browser. Read our commitment to privacy, transparency, and compliance.');
    addMetaTag('og:type', 'website');
  }, []);

  const sections = [
    {
      title: 'No Credential Collection',
      icon: LockKeyhole,
      content:
        'Passwords you analyse with Pw Check are processed entirely within your browser session. We do not transmit, capture, or store any credential data.'
    },
    {
      title: 'Zero Third-party Trackers',
      icon: EyeOff,
      content:
        'We avoid analytics pixels, cookies, or advertising scripts. Usage is anonymous and no personal data is collected for marketing purposes.'
    },
    {
      title: 'Transparent Infrastructure',
      icon: Server,
      content:
        'Pw Check is a static web application. Our servers deliver the code, and the rest of the experience—including compliance checks—runs locally.'
    },
    {
      title: 'Audit-ready Documentation',
      icon: FileCheck2,
      content:
        'Need evidence for an internal privacy assessment? Export this policy along with Pw Check reports to demonstrate compliance with privacy principles.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-100 dark:from-slate-900 dark:to-emerald-950">
      <SiteHeader />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
              <Shield className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pw Check is designed to be privacy-first from day one. This policy explains the minimal data we handle, how we
            protect it, and the choices you have when using the service.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.title} className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 mr-4">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-16 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Subject Rights</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Because Pw Check does not store personal data, there is no account to delete or export. If you contact us, we
            store your email solely to respond to the enquiry. You may request deletion at any time by replying to our email or
            writing to privacy@pwcheck.app.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We periodically review this policy and will timestamp any material changes. Continued use of Pw Check after
            updates constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
