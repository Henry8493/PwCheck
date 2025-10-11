
import { useEffect, useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { getAllPasswordFaqs, getPasswordFaqCategories, searchPasswordFaqs } from '@/lib/password-faq';
import type { FaqEntry } from '@/types/faq';

export default function PasswordFaq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqEntry[]>(getAllPasswordFaqs());
  const categories = getPasswordFaqCategories();

  useEffect(() => {
    document.title = 'Password FAQ | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Get answers to common password security questions. Learn about strong passwords, password managers, MFA, and best practices.'
    );
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Password Security FAQ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about password security, compliance, and best practices
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ List */}
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
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </div>
              </CardHeader>

              {expandedId === faq.id && (
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>

                    {faq.keyTakeaways.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Key Takeaways:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {faq.keyTakeaways.map((takeaway, index) => (
                            <li key={index}>{takeaway}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {faq.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
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
                <p className="text-gray-600 dark:text-gray-400">
                  No FAQs found matching your search.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
