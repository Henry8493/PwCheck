import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Share2, Copy, CheckCircle, AlertTriangle, Shield, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { decodeReportData, formatReportDate, getReportSummary, ShareableReportData } from '@/lib/report-utils';
import { useToast } from '@/hooks/use-toast';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ShareableReport() {
  const [, params] = useRoute('/report/:data');
  const [reportData, setReportData] = useState<ShareableReportData | null>(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (params?.data) {
      const decoded = decodeReportData(params.data);
      if (decoded) {
        setReportData(decoded);
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
    }
  }, [params?.data]);

  const handleCopySummary = () => {
    if (reportData) {
      const summary = getReportSummary(reportData);
      navigator.clipboard.writeText(summary);
      toast({
        title: "Copied to clipboard",
        description: "Report summary has been copied to your clipboard"
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Password Strength Report - SecureCheck',
          text: `I analyzed my password strength and scored ${Math.round(reportData?.analysis.score || 0)}/100!`,
          url: window.location.href
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed', error);
      }
    } else {
      // Fallback: copy URL
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Report link has been copied to your clipboard"
      });
    }
  };

  if (isInvalid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-600" />
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Invalid Report</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This report link appears to be invalid or corrupted. Please check the URL and try again.
          </p>
          <Link href="/">
            <Button className="w-full">
              Go to Password Analyzer
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading report...</p>
        </div>
      </div>
    );
  }

  const { analysis, compliance } = reportData;
  const strengthColors = {
    'very-weak': 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
    'weak': 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800',
    'fair': 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800',
    'good': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
    'strong': 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader 
        additionalBadges={
          <Badge variant="secondary" data-testid="report-badge">
            Shared Report
          </Badge>
        }
      />

      {/* Main Content */}
      <div id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="space-y-3 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Password Analysis Report</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Review strength, compliance signals, and exportable findings. Run a fresh check in the{' '}
            <Link href="/" className="font-semibold text-indigo-700 dark:text-indigo-300 underline">
              password analyzer
            </Link>{' '}
            or compare expectations in the{' '}
            <Link href="/compliance-comparison" className="font-semibold text-indigo-700 dark:text-indigo-300 underline">
              compliance standards guide
            </Link>
            .
          </p>
        </header>

        {/* Share Actions */}
        <div className="flex gap-2 justify-end mb-6">
          <Button variant="outline" size="sm" onClick={handleShare} data-testid="button-share-report">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopySummary} data-testid="button-copy-summary">
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
        </div>
        <div className="space-y-8">
          <section aria-labelledby="report-summary-heading" className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 id="report-summary-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
                Report summary
              </h2>
              <Badge variant="outline">{analysis.strength.replace('-', ' ')}</Badge>
            </div>
            <Card className={`p-8 border-2 ${strengthColors[analysis.strength]}`} data-testid="overall-score-card">
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-6xl font-bold mb-2">{Math.round(analysis.score)}</div>
                  <div className="text-2xl font-semibold uppercase tracking-wide">
                    {analysis.strength.replace('-', ' ')}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    Estimated crack time: <strong>{analysis.crackTime}</strong>
                  </span>
                </div>
              </div>
            </Card>
          </section>

          <section aria-labelledby="detailed-findings-heading" className="space-y-4">
            <h2 id="detailed-findings-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
              Detailed findings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Password Characteristics */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Password Characteristics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Length</span>
                    <span className="font-semibold">{analysis.length} characters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Entropy</span>
                    <span className="font-semibold">{analysis.entropy.toFixed(2)} bits</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`flex items-center gap-2 text-sm ${analysis.hasUppercase ? 'text-green-600' : 'text-gray-400'}`}>
                        {analysis.hasUppercase ? <CheckCircle className="w-4 h-4" /> : <span className="w-4 h-4">✗</span>}
                        Uppercase
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${analysis.hasLowercase ? 'text-green-600' : 'text-gray-400'}`}>
                        {analysis.hasLowercase ? <CheckCircle className="w-4 h-4" /> : <span className="w-4 h-4">✗</span>}
                        Lowercase
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${analysis.hasNumbers ? 'text-green-600' : 'text-gray-400'}`}>
                        {analysis.hasNumbers ? <CheckCircle className="w-4 h-4" /> : <span className="w-4 h-4">✗</span>}
                        Numbers
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${analysis.hasSymbols ? 'text-green-600' : 'text-gray-400'}`}>
                        {analysis.hasSymbols ? <CheckCircle className="w-4 h-4" /> : <span className="w-4 h-4">✗</span>}
                        Symbols
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security Checks */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Analysis
                </h3>
                <div className="space-y-3">
                  <div className={`flex items-center gap-2 text-sm ${!analysis.isCommonPassword ? 'text-green-600' : 'text-red-600'}`}>
                    {!analysis.isCommonPassword ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {analysis.isCommonPassword ? 'Common password detected' : 'Not a common password'}
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${!analysis.hasDictionaryWords ? 'text-green-600' : 'text-orange-600'}`}>
                    {!analysis.hasDictionaryWords ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {analysis.hasDictionaryWords ? 'Contains dictionary words' : 'No dictionary words'}
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${!analysis.hasCommonPatterns ? 'text-green-600' : 'text-orange-600'}`}>
                    {!analysis.hasCommonPatterns ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {analysis.hasCommonPatterns ? 'Contains common patterns' : 'No common patterns'}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Breach Check Results */}
          {analysis.breachCheck && (
            <section aria-labelledby="breach-check-heading">
              <h2 id="breach-check-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Breach exposure
              </h2>
              <Card className={`p-6 border-2 ${analysis.breachCheck.isBreached ? 'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-700' : 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700'}`}>
                <div className="flex items-start gap-3">
                  {analysis.breachCheck.isBreached ? (
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`font-bold mb-1 ${analysis.breachCheck.isBreached ? 'text-red-900 dark:text-red-100' : 'text-green-900 dark:text-green-100'}`}>
                      {analysis.breachCheck.isBreached ? '⚠️ Found in Data Breaches' : '✓ Not Found in Known Breaches'}
                    </h3>
                    <p className={`text-sm ${analysis.breachCheck.isBreached ? 'text-red-800 dark:text-red-200' : 'text-green-800 dark:text-green-200'}`}>
                      {analysis.breachCheck.isBreached 
                        ? `This password has appeared in ${analysis.breachCheck.breachCount.toLocaleString()} data breaches.`
                        : 'This password has not been found in any known data breaches.'
                      }
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* Compliance Results */}
          {compliance && (
            <section aria-labelledby="compliance-results-heading" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 id="compliance-results-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Compliance results
                </h2>
                <Link href="/nist-password-checker" className="inline-flex items-center text-indigo-700 dark:text-indigo-300 font-semibold">
                  Re-check against NIST guidance
                  <ArrowRight className="h-4 w-4 ml-1" aria-hidden />
                </Link>
              </div>
              <Card className={`p-6 border-2 ${compliance.passed ? 'bg-success/10 border-success/20' : 'bg-warning/10 border-warning/20'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${compliance.passed ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'}`}>
                    {compliance.passed ? '✓' : '⚠'}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold mb-1 ${compliance.passed ? 'text-success' : 'text-warning'}`}>
                      {compliance.standard} Compliance
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{compliance.feedback}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Compliance Score:</span>
                      <span className={`font-bold ${compliance.passed ? 'text-success' : 'text-warning'}`}>
                        {Math.round(compliance.score)}/100
                      </span>
                    </div>
                  </div>
                  <span className={`font-bold text-lg ${compliance.passed ? 'text-success' : 'text-warning'}`}>
                    {compliance.passed ? 'PASS' : 'WARN'}
                  </span>
                </div>
              </Card>
            </section>
          )}

          {/* Report Info */}
          <section aria-labelledby="report-metadata-heading" className="space-y-3">
            <h2 id="report-metadata-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
              Report metadata
            </h2>
            <Card className="p-6 bg-muted/50">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Generated on {formatReportDate(reportData.timestamp)}
                </p>
                <p className="text-xs text-muted-foreground">
                  🔒 This report was generated using client-side analysis. No passwords were transmitted or stored.
                </p>
              </div>
            </Card>
          </section>

          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Keep improving your password posture</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Run another credential through the analyzer or compare frameworks to verify policy updates before you deploy them.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
              >
                Open the password analyzer
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
              </Link>
              <Link
                href="/compliance-comparison"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-200 font-semibold"
              >
                Compare frameworks
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <SiteFooter />
    </div>
  );
}
