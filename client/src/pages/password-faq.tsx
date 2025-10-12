import { useEffect, useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { getAllPasswordFaqs, getPasswordFaqCategories, searchPasswordFaqs } from '@/lib/password-faq';
import type { FaqEntry } from '@/types/faq';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function PasswordFaq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqEntry[]>(getAllPasswordFaqs());
  const categories = getPasswordFaqCategories();

  usePageSeo({
    title: 'Password FAQ | Pw Check',
    description:
      'Get answers to common password security questions. Learn about strong passwords, password managers, MFA, and best practices.',
    canonicalPath: '/password-faq',
    keywords: ['password faq', 'password security questions', 'password tips']
  });

  useEffect(() => {
    if (searchQuery.trim()) {
      setFaqs(searchPasswordFaqs(searchQuery));
    } else {
      setFaqs(getAllPasswordFaqs());
    }
  }, [searchQuery]);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageLayout
      wrapperClassName="bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
      mainClassName="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Password Security FAQ</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Common questions about password security, compliance, and best practices
        </p>
      </section>

      <section aria-labelledby="faq-search-heading" className="space-y-4">
        <h2 id="faq-search-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
          Search the knowledge base
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            aria-label="Search FAQs"
          />
        </div>
      </section>

      <section aria-labelledby="faq-categories-heading" className="space-y-4">
        <h2 id="faq-categories-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
          Browse by category
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-list-heading" className="space-y-4">
        <h2 id="faq-list-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-white/90 dark:bg-gray-900/80">
              <CardHeader
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleExpanded(faq.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </div>
                  {expandedId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" aria-hidden />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" aria-hidden />
                  )}
                </div>
              </CardHeader>

              {expandedId === faq.id && (
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <CardDescription className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </CardDescription>

                    {faq.keyTakeaways.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Key takeaways
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {faq.keyTakeaways.map((takeaway, index) => (
                            <li key={index}>{takeaway}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {faq.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2" aria-label="Related topics">
                        {faq.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}

          {faqs.length === 0 && (
            <Card className="bg-white/90 dark:bg-gray-900/80">
              <CardContent className="py-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">No FAQs found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
