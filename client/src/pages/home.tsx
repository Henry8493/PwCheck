import { Lock, CheckCircle } from 'lucide-react';
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
                <h1 className="text-xl font-bold" data-testid="app-title">SecureCheck</h1>
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
                <li><a href="#" className="hover:text-foreground">Password Best Practices</a></li>
                <li><a href="#" className="hover:text-foreground">Compliance Guides</a></li>
                <li><a href="#" className="hover:text-foreground">Security Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Standards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">NIST Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground">GDPR Compliance</a></li>
                <li><a href="#" className="hover:text-foreground">ISO 27001</a></li>
                <li><a href="#" className="hover:text-foreground">PCI DSS</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
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
