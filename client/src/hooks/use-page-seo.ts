import { useEffect } from 'react';

interface UsePageSeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile' | 'product';
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  structuredDataId?: string;
}

function ensureMetaTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');

    Object.entries(attributes).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });

    document.head.appendChild(element);
    return element;
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });

  return element;
}

export function usePageSeo({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  keywords,
  structuredData,
  structuredDataId
}: UsePageSeoOptions) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const origin = window.location.origin;
    const canonicalUrl = canonicalPath
      ? new URL(canonicalPath, origin).toString()
      : window.location.href;

    document.title = title;

    ensureMetaTag('meta[name="description"]', {
      name: 'description',
      content: description
    });

    if (keywords?.length) {
      ensureMetaTag('meta[name="keywords"]', {
        name: 'keywords',
        content: keywords.join(', ')
      });
    }

    ensureMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: title
    });

    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    });

    ensureMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: ogType
    });

    ensureMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl
    });

    ensureMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Pw Check'
    });

    ensureMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    ensureMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title
    });

    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', canonicalUrl);

    const scriptId = structuredDataId ?? 'pw-check-structured-data';
    let structuredDataScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    const dataPayload = structuredData ?? {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl
    };

    if (dataPayload) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.id = scriptId;
        document.head.appendChild(structuredDataScript);
      }

      const payload = Array.isArray(dataPayload) ? dataPayload : [dataPayload];

      structuredDataScript.textContent = JSON.stringify(payload);
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
  }, [title, description, canonicalPath, ogType, keywords, structuredData, structuredDataId]);
}

export default usePageSeo;
