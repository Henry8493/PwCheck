import { FormEvent, useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Globe2,
  KeyRound,
  Loader2,
  ShieldCheck,
  XCircle,
} from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { apiRequest } from '@/lib/queryClient';
import type { PasswordImplementationCheck, PasswordImplementationScanResult } from '@shared/password-implementation';

const gradeStyles = {
  A: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800',
  B: 'bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-950 dark:text-lime-200 dark:border-lime-800',
  C: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800',
  D: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-950 dark:text-orange-200 dark:border-orange-800',
  F: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800',
};

const severityIcons = {
  pass: CheckCircle2,
  info: ClipboardCheck,
  warning: AlertTriangle,
  fail: XCircle,
};

const severityStyles = {
  pass: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
  info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200',
  warning: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-200',
  fail: 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200',
};

function CheckRow({ check }: { check: PasswordImplementationCheck }) {
  const Icon = severityIcons[check.severity];

  return (
    <li className="rounded-lg border bg-white/80 p-4 shadow-sm dark:bg-gray-950/50" data-testid={`scan-check-${check.id}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className={`mt-0.5 rounded-full border p-2 ${severityStyles[check.severity]}`}>
            <Icon className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{check.label}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{check.summary}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              <span className="font-medium">Fix:</span> {check.recommendation}
            </p>
            {check.evidence ? (
              <p className="mt-2 rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                {check.evidence}
              </p>
            ) : null}
          </div>
        </div>
        <Badge variant="outline" className="w-fit capitalize">
          {check.severity} · {check.points}/{check.maxPoints}
        </Badge>
      </div>
    </li>
  );
}

export function PasswordImplementationScanner() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<PasswordImplementationScanResult | null>(null);
  const [error, setError] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const issueCounts = useMemo(() => {
    return {
      fail: result?.checks.filter((check) => check.severity === 'fail').length ?? 0,
      warning: result?.checks.filter((check) => check.severity === 'warning').length ?? 0,
      pass: result?.checks.filter((check) => check.severity === 'pass').length ?? 0,
    };
  }, [result]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsScanning(true);

    try {
      const response = await apiRequest('POST', '/api/password-implementation-scan', { url });
      const scanResult = (await response.json()) as PasswordImplementationScanResult;
      setResult(scanResult);
    } catch (scanError) {
      setResult(null);
      setError(scanError instanceof Error ? scanError.message : 'Unable to scan that URL.');
    } finally {
      setIsScanning(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="border-blue-100 bg-white/95 shadow-lg dark:border-blue-900 dark:bg-gray-900/90">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
              <Globe2 className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden="true" />
            </div>
            <div>
              <CardTitle as="h2">Scan a login, sign-up, or reset page</CardTitle>
              <CardDescription>
                Enter a URL and Pw Check will inspect the password implementation for OWASP and NIST-aligned UX/security signals.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-[1fr_auto]" data-testid="form-password-implementation-scan">
            <label className="sr-only" htmlFor="implementation-url">
              Website URL
            </label>
            <Input
              id="implementation-url"
              type="url"
              inputMode="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://example.com/login"
              required
              data-testid="input-implementation-url"
            />
            <Button type="submit" disabled={isScanning} data-testid="button-run-implementation-scan">
              {isScanning ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              {isScanning ? 'Scanning…' : 'Run scanner'}
            </Button>
          </form>

          {error ? (
            <Alert variant="destructive" className="mt-4" data-testid="alert-scan-error">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Scan failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}
        </CardContent>
      </Card>

      {result ? (
        <section className="space-y-6" aria-labelledby="scan-results-heading" data-testid="implementation-scan-results">
          <Card className="overflow-hidden bg-white/95 dark:bg-gray-900/90">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="flex flex-col items-center justify-center border-b bg-gray-50 p-8 text-center dark:bg-gray-950 lg:border-b-0 lg:border-r">
                  <div className={`mb-4 flex h-28 w-28 items-center justify-center rounded-full border-4 text-5xl font-black ${gradeStyles[result.grade]}`}>
                    {result.grade}
                  </div>
                  <h2 id="scan-results-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                    Password UX & Security Grade
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {result.score}/100 static implementation score
                  </p>
                  <Progress value={result.score} className="mt-5" aria-label={`Implementation score ${result.score} out of 100`} />
                </div>
                <div className="p-6">
                  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-300">{issueCounts.fail}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Critical failures</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">{issueCounts.warning}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Warnings</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">{issueCounts.pass}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Passing checks</div>
                    </div>
                  </div>

                  <dl className="grid gap-3 text-sm md:grid-cols-2">
                    <div>
                      <dt className="font-medium text-gray-900 dark:text-white">Scanned URL</dt>
                      <dd className="break-all text-gray-600 dark:text-gray-300">{result.finalUrl}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900 dark:text-white">Forms and fields</dt>
                      <dd className="text-gray-600 dark:text-gray-300">
                        {result.formsFound} forms · {result.passwordFieldsFound} password fields
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    {result.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <KeyRound className="mt-0.5 h-4 w-4 flex-none text-blue-500" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <Card className="bg-white/95 dark:bg-gray-900/90">
              <CardHeader>
                <CardTitle as="h2">Implementation checks</CardTitle>
                <CardDescription>
                  Signals are weighted by security and UX impact, including autofill, paste, TLS, long-password support, reset messaging, and composition rules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {result.checks.map((check) => (
                    <CheckRow key={check.id} check={check} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <aside className="space-y-6">
              <Card className="bg-white/95 dark:bg-gray-900/90">
                <CardHeader>
                  <CardTitle as="h2" className="flex items-center gap-2 text-xl">
                    <Eye className="h-5 w-5" aria-hidden="true" />
                    What we look for
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                    <li>Correct password autocomplete values for login and new-password flows.</li>
                    <li>No paste blocking, low maxlength caps, or arbitrary composition requirements.</li>
                    <li>HTTPS-only authentication surfaces with redirects from HTTP.</li>
                    <li>Visible, user-friendly rules and generic reset/authentication messaging.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/95 dark:bg-gray-900/90">
                <CardHeader>
                  <CardTitle as="h2" className="text-xl">Scanner limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                    {result.limitations.map((limitation) => (
                      <li key={limitation}>{limitation}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default PasswordImplementationScanner;
