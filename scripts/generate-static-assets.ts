import fs from "node:fs/promises";
import path from "node:path";

type RouteEntry = {
  path: string;
  priority: number;
  sitemapPath?: string;
};

const routes: RouteEntry[] = [
  { path: "/", priority: 1.0 },
  { path: "/report/:data", sitemapPath: "/report/example-report", priority: 0.6 },
  { path: "/password-faq", priority: 0.7 },
  { path: "/nist-password-checker", priority: 0.9 },
  { path: "/gdpr-password-compliance", priority: 0.8 },
  { path: "/iso27001-password-rules", priority: 0.8 },
  { path: "/pci-dss-password-requirements", priority: 0.8 },
  { path: "/compliance-comparison", priority: 0.8 },
  { path: "/password-best-practices", priority: 0.8 },
  { path: "/compliance-guides", priority: 0.7 },
  { path: "/security-blog", priority: 0.7 },
  { path: "/security/use-password-manager", priority: 0.7 },
  { path: "/security/enable-two-factor-authentication", priority: 0.7 },
  { path: "/security/avoid-password-reuse", priority: 0.7 },
  { path: "/security/password-length-matters", priority: 0.7 },
  { path: "/security/password-policies-remote-workforce", priority: 0.7 },
  { path: "/security/compliance-audit-checklist", priority: 0.7 },
  { path: "/how-it-works", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.5 },
  { path: "/terms-of-service", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
];

const baseUrl = (process.env.SITE_URL ?? "https://pwcheck.app").replace(/\/+$/, "");
const lastModified = new Date().toISOString();
const publicDir = path.resolve(import.meta.dirname, "..", "client", "public");

async function generateSitemap() {
  await fs.mkdir(publicDir, { recursive: true });

  const urls = routes
    .map(({ sitemapPath, path: routePath, priority }) => {
      const resolvedPath = sitemapPath ?? routePath;
      const loc = new URL(resolvedPath, `${baseUrl}/`).toString();

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
}

async function generateRobots() {
  await fs.mkdir(publicDir, { recursive: true });
  const sitemapUrl = new URL("/sitemap.xml", `${baseUrl}/`).toString();

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api
Sitemap: ${sitemapUrl}
`;

  await fs.writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
}

async function main() {
  await Promise.all([generateSitemap(), generateRobots()]);
  console.log(`Generated sitemap.xml and robots.txt in ${publicDir}`);
}

main().catch((error) => {
  console.error("Failed to generate static assets:", error);
  process.exitCode = 1;
});
