import { lookup } from 'node:dns/promises';
import net from 'node:net';

import type {
  PasswordImplementationCheck,
  PasswordImplementationGrade,
  PasswordImplementationScanResult,
} from '../shared/password-implementation';

type PasswordField = {
  html: string;
  autocomplete?: string;
  maxlength?: number;
  name?: string;
  id?: string;
};

type ParsedForm = {
  html: string;
  action?: string;
  passwordFields: PasswordField[];
};

const USER_AGENT = 'PwCheck Password Implementation Scanner/1.0 (+https://pwcheck.app)';
const MAX_HTML_BYTES = 1_000_000;
const FETCH_TIMEOUT_MS = 12_000;
const MAX_REDIRECTS = 5;


function isPrivateIp(address: string) {
  const version = net.isIP(address);

  if (version === 4) {
    const octets = address.split('.').map(Number);
    const [first, second] = octets;

    return first === 10
      || first === 127
      || (first === 172 && second >= 16 && second <= 31)
      || (first === 192 && second === 168)
      || (first === 169 && second === 254)
      || first === 0;
  }

  if (version === 6) {
    const normalized = address.toLowerCase();
    return normalized === '::1'
      || normalized.startsWith('fc')
      || normalized.startsWith('fd')
      || normalized.startsWith('fe80:')
      || normalized === '::';
  }

  return false;
}

async function assertPublicDestination(url: URL) {
  const hostname = url.hostname.toLowerCase();

  if (hostname === 'localhost' || hostname.endsWith('.localhost')) {
    throw new Error('Localhost and private network URLs cannot be scanned.');
  }

  if (net.isIP(hostname)) {
    if (isPrivateIp(hostname)) {
      throw new Error('Private network URLs cannot be scanned.');
    }

    return;
  }

  const addresses = await lookup(hostname, { all: true, verbatim: true });
  if (addresses.some(({ address }) => isPrivateIp(address))) {
    throw new Error('Private network URLs cannot be scanned.');
  }
}

async function fetchHtml(url: URL, controller: AbortController) {
  let currentUrl = url;

  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
    await assertPublicDestination(currentUrl);

    const response = await fetch(currentUrl, {
      headers: {
        'user-agent': USER_AGENT,
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      redirect: 'manual',
      signal: controller.signal,
    });

    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      if (!location) {
        throw new Error(`The URL returned HTTP ${response.status} without a redirect location.`);
      }

      currentUrl = normalizeUrl(new URL(location, currentUrl).toString());
      continue;
    }

    return { response, finalUrl: currentUrl.toString() };
  }

  throw new Error('The URL redirected too many times. Try a direct login, sign-up, or reset page URL.');
}

function normalizeUrl(rawUrl: string) {
  const trimmed = rawUrl.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const parsed = new URL(withProtocol);

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Only http:// and https:// URLs can be scanned.');
  }

  parsed.hash = '';
  return parsed;
}

function getAttribute(tag: string, attribute: string) {
  const pattern = new RegExp(`${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
  const match = tag.match(pattern);
  return match?.[1] ?? match?.[2] ?? match?.[3];
}

function stripTags(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseForms(html: string): ParsedForm[] {
  const forms = Array.from(html.matchAll(/<form\b[\s\S]*?<\/form>/gi), (match) => match[0]);
  const formHtml = forms.length > 0 ? forms : [html];

  return formHtml.map((form) => {
    const openTag = form.match(/<form\b[^>]*>/i)?.[0] ?? '';
    const passwordInputs = Array.from(
      form.matchAll(/<input\b[^>]*type\s*=\s*(?:"password"|'password'|password)[^>]*>/gi),
      (match) => {
        const tag = match[0];
        const maxlength = Number.parseInt(getAttribute(tag, 'maxlength') ?? '', 10);

        return {
          html: tag,
          autocomplete: getAttribute(tag, 'autocomplete')?.toLowerCase(),
          maxlength: Number.isFinite(maxlength) ? maxlength : undefined,
          name: getAttribute(tag, 'name'),
          id: getAttribute(tag, 'id'),
        };
      },
    );

    return {
      html: form,
      action: getAttribute(openTag, 'action'),
      passwordFields: passwordInputs,
    };
  });
}

function hasPasteBlocking(html: string) {
  return /onpaste\s*=\s*(?:"[^"]*(?:return\s+false|preventDefault)|'[^']*(?:return\s+false|preventDefault))/i.test(html)
    || /addEventListener\s*\(\s*['"]paste['"][\s\S]{0,240}preventDefault\s*\(/i.test(html)
    || /\.onpaste\s*=\s*function[\s\S]{0,240}(?:return\s+false|preventDefault\s*\()/i.test(html);
}

function hasShowHideControl(html: string) {
  return /(?:show|hide|toggle|reveal)\s+password|password\s+(?:visibility|show|hide)|aria-label\s*=\s*["'][^"']*(?:show|hide|toggle|reveal)[^"']*password/i.test(html)
    || /type\s*=\s*["']?button[^>]*(?:show|hide|toggle|reveal)[^>]*password/i.test(html);
}

function hasArbitraryCompositionRules(text: string) {
  const ruleHits = [
    /uppercase|capital letter/i,
    /lowercase/i,
    /special (?:character|symbol)|symbol/i,
    /number|digit/i,
  ].filter((pattern) => pattern.test(text)).length;

  return ruleHits >= 2 && /must|require|at least|include|contain/i.test(text);
}

function hasVisibleRules(text: string) {
  return /password.{0,80}(must|require|at least|minimum|min\.|include|contain)|(?:must|require|at least|minimum|min\.|include|contain).{0,80}password/i.test(text);
}

function hasEnumerationRisk(text: string) {
  return /(?:email|account|user(?:name)?).{0,60}(?:not found|does not exist|doesn't exist|not recognized|no account|invalid email)|(?:not found|does not exist|doesn't exist|not recognized|no account).{0,60}(?:email|account|user(?:name)?)/i.test(text);
}

function hasResetContext(text: string, forms: ParsedForm[]) {
  return /forgot|reset password|recover account|password reset/i.test(text)
    || forms.some((form) => /forgot|reset|recover/i.test(form.action ?? '') || /type\s*=\s*["']?email/i.test(form.html));
}

function resolveAction(action: string | undefined, baseUrl: string) {
  if (!action || action.startsWith('#')) return baseUrl;

  try {
    return new URL(action, baseUrl).toString();
  } catch {
    return action;
  }
}

function makeCheck(check: PasswordImplementationCheck): PasswordImplementationCheck {
  return check;
}

function gradeFromScore(score: number): PasswordImplementationGrade {
  if (score >= 90) return 'A';
  if (score >= 78) return 'B';
  if (score >= 62) return 'C';
  if (score >= 45) return 'D';
  return 'F';
}

function analyzeHtml(inputUrl: string, scannedUrl: string, finalUrl: string, html: string): PasswordImplementationScanResult {
  const forms = parseForms(html);
  const passwordForms = forms.filter((form) => form.passwordFields.length > 0);
  const passwordFields = passwordForms.flatMap((form) => form.passwordFields);
  const text = stripTags(html);
  const final = new URL(finalUrl);
  const input = new URL(inputUrl);
  const checks: PasswordImplementationCheck[] = [];
  const limitations = [
    'Static scan only: JavaScript-rendered form changes, CAPTCHA-protected flows, and post-submit server behavior may require manual validation.',
    'Password reset enumeration can only be inferred from visible copy on the scanned page.',
  ];

  const insecureLogin = final.protocol !== 'https:' || passwordForms.some((form) => resolveAction(form.action, finalUrl).startsWith('http://'));
  checks.push(makeCheck({
    id: 'insecure-login-page',
    label: 'Secure HTTPS login surface',
    severity: insecureLogin ? 'fail' : 'pass',
    points: insecureLogin ? 0 : 15,
    maxPoints: 15,
    summary: insecureLogin ? 'Password form is served or submitted over an insecure HTTP surface.' : 'Password form appears to be served and submitted over HTTPS.',
    recommendation: 'Serve all authentication pages over HTTPS and ensure form actions submit to HTTPS endpoints.',
    evidence: insecureLogin ? `Final URL: ${finalUrl}` : undefined,
  }));

  const missingTlsRedirect = input.protocol === 'http:' && final.protocol !== 'https:';
  checks.push(makeCheck({
    id: 'tls-redirect',
    label: 'HTTP-to-HTTPS redirect',
    severity: missingTlsRedirect ? 'fail' : input.protocol === 'http:' ? 'pass' : 'info',
    points: missingTlsRedirect ? 0 : 8,
    maxPoints: 8,
    summary: missingTlsRedirect ? 'The scanned HTTP URL did not redirect to HTTPS.' : input.protocol === 'http:' ? 'HTTP request redirected to HTTPS.' : 'Scan started on HTTPS; HTTP redirect was not directly tested.',
    recommendation: 'Redirect every http:// authentication URL to the canonical https:// URL before showing any form.',
    evidence: input.protocol === 'http:' ? `${inputUrl} → ${finalUrl}` : undefined,
  }));

  const autocompleteValues = passwordFields.map((field) => field.autocomplete).filter(Boolean) as string[];
  const hasGoodAutocomplete = autocompleteValues.some((value) => ['current-password', 'new-password'].includes(value));
  const missingAutocomplete = passwordFields.length > 0 && !hasGoodAutocomplete;
  checks.push(makeCheck({
    id: 'autocomplete',
    label: 'Password autocomplete attributes',
    severity: missingAutocomplete ? 'warning' : passwordFields.length > 0 ? 'pass' : 'info',
    points: missingAutocomplete ? 4 : 12,
    maxPoints: 12,
    summary: missingAutocomplete ? 'Password inputs do not expose modern autocomplete hints.' : passwordFields.length > 0 ? 'Password inputs include password-manager friendly autocomplete hints.' : 'No password fields were found on the scanned page.',
    recommendation: 'Use autocomplete="current-password" for login and autocomplete="new-password" for sign-up/reset password fields.',
    evidence: autocompleteValues.length > 0 ? `Found: ${autocompleteValues.join(', ')}` : undefined,
  }));

  const pasteBlocking = hasPasteBlocking(html);
  checks.push(makeCheck({
    id: 'paste-blocking',
    label: 'Paste is allowed',
    severity: pasteBlocking ? 'fail' : 'pass',
    points: pasteBlocking ? 0 : 12,
    maxPoints: 12,
    summary: pasteBlocking ? 'The page appears to block paste into authentication fields.' : 'No paste-blocking handlers were detected.',
    recommendation: 'Allow paste so users can rely on password managers and generated passwords.',
    evidence: pasteBlocking ? 'Detected onpaste/preventDefault paste handler.' : undefined,
  }));

  const lowMaxLength = passwordFields.find((field) => typeof field.maxlength === 'number' && field.maxlength < 64);
  checks.push(makeCheck({
    id: 'maximum-length',
    label: 'Long passwords supported',
    severity: lowMaxLength ? 'fail' : passwordFields.length > 0 ? 'pass' : 'info',
    points: lowMaxLength ? 0 : 12,
    maxPoints: 12,
    summary: lowMaxLength ? 'A password field limits input below 64 characters.' : 'No low maximum password length was detected.',
    recommendation: 'Support long passwords/passphrases; avoid low maxlength values and allow at least 64 characters.',
    evidence: lowMaxLength?.maxlength ? `maxlength="${lowMaxLength.maxlength}"` : undefined,
  }));

  const showHide = hasShowHideControl(html);
  checks.push(makeCheck({
    id: 'show-hide-password',
    label: 'Show/hide password option',
    severity: showHide ? 'pass' : passwordFields.length > 0 ? 'warning' : 'info',
    points: showHide || passwordFields.length === 0 ? 8 : 3,
    maxPoints: 8,
    summary: showHide ? 'A show/hide password affordance appears to be present.' : 'No obvious show/hide password option was detected.',
    recommendation: 'Offer an accessible password visibility toggle to reduce entry errors, especially on mobile.',
  }));

  const managerCompatible = passwordFields.length > 0 && hasGoodAutocomplete && !pasteBlocking && !lowMaxLength;
  checks.push(makeCheck({
    id: 'password-manager-compatibility',
    label: 'Password manager compatibility',
    severity: managerCompatible ? 'pass' : passwordFields.length > 0 ? 'warning' : 'info',
    points: managerCompatible ? 15 : passwordFields.length > 0 ? 6 : 8,
    maxPoints: 15,
    summary: managerCompatible ? 'The form looks compatible with password managers and autofill.' : 'Password manager compatibility may be impaired.',
    recommendation: 'Use semantic form markup, stable input names, autocomplete hints, and avoid paste/maxlength restrictions.',
  }));

  const visibleRules = hasVisibleRules(text);
  checks.push(makeCheck({
    id: 'visible-password-rules',
    label: 'Visible password rules',
    severity: visibleRules ? 'pass' : passwordFields.length > 0 ? 'warning' : 'info',
    points: visibleRules || passwordFields.length === 0 ? 6 : 2,
    maxPoints: 6,
    summary: visibleRules ? 'Password requirements appear to be visible before submission.' : 'No visible password requirements were detected near the form.',
    recommendation: 'If password rules exist, display them before submission and keep them aligned to modern guidance.',
  }));

  const arbitraryRules = hasArbitraryCompositionRules(text);
  checks.push(makeCheck({
    id: 'composition-rules',
    label: 'Avoid arbitrary composition rules',
    severity: arbitraryRules ? 'warning' : 'pass',
    points: arbitraryRules ? 3 : 10,
    maxPoints: 10,
    summary: arbitraryRules ? 'The page appears to require character-type composition rules.' : 'No arbitrary composition requirements were detected.',
    recommendation: 'Prefer length, breached-password screening, and rate limiting over mandatory uppercase/lowercase/number/symbol rules.',
    evidence: arbitraryRules ? 'Detected visible copy mentioning multiple required character classes.' : undefined,
  }));

  const resetRisk = hasResetContext(text, forms) && hasEnumerationRisk(text);
  checks.push(makeCheck({
    id: 'reset-enumeration',
    label: 'Generic reset/authentication messaging',
    severity: resetRisk ? 'fail' : 'pass',
    points: resetRisk ? 0 : 10,
    maxPoints: 10,
    summary: resetRisk ? 'Visible reset/authentication copy may reveal whether an account exists.' : 'No obvious account-enumeration wording was detected.',
    recommendation: 'Use generic responses such as “If an account exists, we’ll send instructions” for reset and authentication flows.',
    evidence: resetRisk ? 'Detected visible “account/email not found” style wording.' : undefined,
  }));

  const maxPoints = checks.reduce((total, check) => total + check.maxPoints, 0);
  const points = checks.reduce((total, check) => total + check.points, 0);
  const score = Math.max(0, Math.min(100, Math.round((points / maxPoints) * 100)));
  const failingLabels = checks.filter((check) => check.severity === 'fail').map((check) => check.label);
  const warningLabels = checks.filter((check) => check.severity === 'warning').map((check) => check.label);

  return {
    inputUrl,
    scannedUrl,
    finalUrl,
    fetchedAt: new Date().toISOString(),
    grade: gradeFromScore(score),
    score,
    formsFound: forms.length,
    passwordFieldsFound: passwordFields.length,
    checks,
    highlights: [
      passwordFields.length > 0 ? `Found ${passwordFields.length} password field${passwordFields.length === 1 ? '' : 's'} across ${passwordForms.length} form${passwordForms.length === 1 ? '' : 's'}.` : 'No password field was detected on the scanned page.',
      failingLabels.length > 0 ? `Critical issues: ${failingLabels.join(', ')}.` : 'No critical static-analysis failures were detected.',
      warningLabels.length > 0 ? `Review warnings: ${warningLabels.join(', ')}.` : 'No warning-level implementation concerns were detected.',
    ],
    limitations,
  };
}

export async function scanPasswordImplementation(rawUrl: string): Promise<PasswordImplementationScanResult> {
  const url = normalizeUrl(rawUrl);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const { response, finalUrl } = await fetchHtml(url, controller);

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      throw new Error('The URL did not return an HTML page that can be scanned.');
    }

    if (!response.ok) {
      throw new Error(`The URL returned HTTP ${response.status}.`);
    }

    const html = (await response.text()).slice(0, MAX_HTML_BYTES);
    return analyzeHtml(url.toString(), url.toString(), finalUrl, html);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('The URL scan timed out. Try a direct login, sign-up, or reset page URL.');
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
