import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Pw Check</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Professional password strength analysis with compliance-based scoring.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/compliance-comparison"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-comparison"
                >
                  Standards Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/password-best-practices"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-best-practices"
                >
                  Password Best Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance-guides"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-guides"
                >
                  Compliance Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/password-faq"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-faq"
                >
                  Password FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/security-blog"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-blog"
                >
                  Security Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Standards</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/nist-password-checker"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-nist"
                >
                  NIST Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr-password-compliance"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-gdpr"
                >
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/iso27001-password-rules"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-iso27001"
                >
                  ISO 27001
                </Link>
              </li>
              <li>
                <Link
                  href="/pci-dss-password-requirements"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-pci-dss"
                >
                  PCI DSS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">About</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-how-it-works"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 dark:hover:text-white"
                  data-testid="link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>
            © {new Date().getFullYear()} Pw Check. All rights reserved.{' '}
            <a
              href="https://github.com/Henry8493/PwCheck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Open source
            </a>{' '}
            and privacy-first password analysis.
          </p>
        </div>
      </div>
    </footer>
  );
}
