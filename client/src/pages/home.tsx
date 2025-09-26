import { Lock, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { PasswordChecker } from '@/components/password-checker';
import { PasswordGenerator } from '@/components/password-generator';
import { PrivacyNotice } from '@/components/privacy-notice';
import { SecurityTips } from '@/components/security-tips';
import { MethodologySection } from '@/components/methodology-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold" data-testid="app-title">Pw Check</h1>
                <p className="text-sm text-muted-foreground">Professional Password Analyzer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm font-medium" data-testid="privacy-badge">
                100% Private - No Data Leaves Your Browser
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        <section className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance Standards We Support</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our password analyzer validates against major security frameworks and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/nist-password-checker" className="group" data-testid="card-nist">
              <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary">NIST SP 800-63B</h3>
                  <p className="text-sm text-muted-foreground">Federal cybersecurity guidelines for digital identity authentication</p>
                </div>
              </div>
            </Link>
            
            <Link href="/gdpr-password-compliance" className="group" data-testid="card-gdpr">
              <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary">GDPR Compliance</h3>
                  <p className="text-sm text-muted-foreground">EU data protection requirements and privacy by design principles</p>
                </div>
              </div>
            </Link>
            
            <Link href="/iso27001-password-rules" className="group" data-testid="card-iso27001">
              <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary">ISO 27001</h3>
                  <p className="text-sm text-muted-foreground">International information security management standards</p>
                </div>
              </div>
            </Link>
            
            <Link href="/pci-dss-password-requirements" className="group" data-testid="card-pci-dss">
              <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary">PCI DSS</h3>
                  <p className="text-sm text-muted-foreground">Payment card industry security standards for cardholder data</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Methodology Section */}
        <MethodologySection />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">SecureCheck</h3>
              <p className="text-sm text-muted-foreground">
                Professional password strength analysis with compliance-based scoring.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/compliance-comparison" className="hover:text-foreground" data-testid="link-comparison">Standards Comparison</Link></li>
                <li>
                  <Link href="/password-best-practices" className="hover:text-foreground" data-testid="link-best-practices">
                    Password Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="/compliance-guides" className="hover:text-foreground" data-testid="link-guides">
                    Compliance Guides
                  </Link>
                </li>
                <li>
                  <Link href="/security-blog" className="hover:text-foreground" data-testid="link-blog">
                    Security Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Standards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/nist-password-checker" className="hover:text-foreground" data-testid="link-nist">NIST Guidelines</Link></li>
                <li><Link href="/gdpr-password-compliance" className="hover:text-foreground" data-testid="link-gdpr">GDPR Compliance</Link></li>
                <li><Link href="/iso27001-password-rules" className="hover:text-foreground" data-testid="link-iso27001">ISO 27001</Link></li>
                <li><Link href="/pci-dss-password-requirements" className="hover:text-foreground" data-testid="link-pci-dss">PCI DSS</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground" data-testid="link-how-it-works">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-foreground" data-testid="link-privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-foreground" data-testid="link-terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground" data-testid="link-contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 SecureCheck. All rights reserved. Open source and privacy-first password analysis.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
