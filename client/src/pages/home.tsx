
import { Lock, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { PasswordChecker } from '@/components/password-checker';
import { PasswordGenerator } from '@/components/password-generator';
import { PrivacyNotice } from '@/components/privacy-notice';
import { SecurityTips } from '@/components/security-tips';
import { MethodologySection } from '@/components/methodology-section';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Lock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Password Analyzer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Validate your passwords against industry standards including <strong>NIST SP 800-63B</strong>, 
            <strong> GDPR</strong>, <strong>ISO 27001</strong>, and <strong>PCI DSS</strong> compliance requirements.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-12">
            Client-side analysis • No data collection • Enterprise-grade validation
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Password Checker */}
          <PasswordChecker />

          {/* Sidebar */}
          <div className="space-y-6">
            <PasswordGenerator />
            <PrivacyNotice />
            <SecurityTips />
          </div>
        </div>

        {/* Compliance Standards Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Compliance Standards We Support</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our password analyzer validates against major security frameworks and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/nist-password-checker" className="group" data-testid="card-nist">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">NIST SP 800-63B</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Federal cybersecurity guidelines for digital identity authentication</p>
                </div>
              </div>
            </Link>
            
            <Link href="/gdpr-password-compliance" className="group" data-testid="card-gdpr">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">GDPR Compliance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">EU data protection requirements and privacy by design principles</p>
                </div>
              </div>
            </Link>
            
            <Link href="/iso27001-password-rules" className="group" data-testid="card-iso27001">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">ISO 27001</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">International information security management standards</p>
                </div>
              </div>
            </Link>
            
            <Link href="/pci-dss-password-requirements" className="group" data-testid="card-pci-dss">
              <div className="p-6 border rounded-lg bg-white/90 dark:bg-gray-900/80 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400">PCI DSS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Payment card industry security standards for cardholder data</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Methodology Section */}
        <MethodologySection />
      </div>

      {/* Footer */}
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
                <li><Link href="/compliance-comparison" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-comparison">Standards Comparison</Link></li>
                <li>
                  <Link href="/password-best-practices" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-best-practices">
                    Password Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="/compliance-guides" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-guides">
                    Compliance Guides
                  </Link>
                </li>
                <li>
                  <Link href="/security-blog" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-blog">
                    Security Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Standards</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><Link href="/nist-password-checker" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-nist">NIST Guidelines</Link></li>
                <li><Link href="/gdpr-password-compliance" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-gdpr">GDPR Compliance</Link></li>
                <li><Link href="/iso27001-password-rules" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-iso27001">ISO 27001</Link></li>
                <li><Link href="/pci-dss-password-requirements" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-pci-dss">PCI DSS</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">About</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/how-it-works" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-how-it-works">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white" data-testid="link-contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300">
            <p>© 2024 Pw Check. All rights reserved. Open source and privacy-first password analysis.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
