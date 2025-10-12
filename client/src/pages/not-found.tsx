import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePageSeo } from '@/hooks/use-page-seo';

export default function NotFound() {
  usePageSeo({
    title: 'Page Not Found | Pw Check',
    description: 'The page you are looking for does not exist. Return to the Pw Check homepage to continue browsing.',
    canonicalPath: '/404'
  });

  return (
    <PageLayout
      wrapperClassName="min-h-screen w-full bg-gray-50 flex flex-col"
      mainClassName="flex-1 flex items-center justify-center px-4"
    >
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 space-y-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <AlertCircle className="h-10 w-10 text-red-500" aria-hidden />
            <h1 className="text-3xl font-bold text-gray-900">404 — Page Not Found</h1>
          </div>
          <section aria-labelledby="not-found-guidance" className="space-y-3">
            <h2 id="not-found-guidance" className="text-xl font-semibold text-gray-900">
              What to do next
            </h2>
            <p className="text-sm text-gray-600">
              The page you requested could not be located. It may have been moved, renamed, or never existed.
            </p>
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
                Back to Pw Check Home
              </Link>
            </Button>
          </section>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
