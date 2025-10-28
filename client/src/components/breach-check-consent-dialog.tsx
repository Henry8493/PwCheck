import { useState } from 'react';
import { Shield, CheckCircle, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface BreachCheckConsentDialogProps {
  open: boolean;
  onConsent: () => void;
  onDecline: () => void;
}

export function BreachCheckConsentDialog({ open, onConsent, onDecline }: BreachCheckConsentDialogProps) {
  const [understood, setUnderstood] = useState(false);

  const handleConsent = () => {
    if (understood) {
      onConsent();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onDecline()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="consent-dialog">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="w-6 h-6 text-blue-600" />
            Enable Breach Checking?
          </DialogTitle>
          <DialogDescription className="text-base">
            Understand how we protect your privacy while checking for breached passwords
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* How it works */}
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              How Breach Checking Works (k-Anonymity Model)
            </h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>Your password is <strong>hashed locally</strong> in your browser using SHA-1</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Only the <strong>first 5 characters</strong> of this hash are sent to Have I Been Pwned</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>We receive a list of ALL password hashes starting with those 5 characters (~500-1000 results)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">4.</span>
                <span>Your browser <strong>checks locally</strong> if your full hash is in that list</span>
              </li>
            </ol>
          </div>

          {/* Privacy guarantees */}
          <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Privacy Guarantees
            </h4>
            <ul className="space-y-1.5 text-sm text-green-800 dark:text-green-200">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Your actual password <strong>never leaves your browser</strong></span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>The partial hash cannot be reversed to reveal your password</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Have I Been Pwned cannot determine which specific password you're checking</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>All processing happens client-side in your browser</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>No data is stored or logged by our application</span>
              </li>
            </ul>
          </div>

          {/* Example */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
              Example: What Gets Sent
            </h4>
            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Your password hash:</span>
                <span className="text-gray-900 dark:text-gray-100">5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">What we send:</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-bold">
                  5BAA6
                  <span className="text-gray-400">••••••••••••••••••••••••••••••••••••</span>
                </span>
              </div>
            </div>
          </div>

          {/* Learn more */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <a 
              href="https://haveibeenpwned.com/API/v3#PwnedPasswords" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              data-testid="link-learn-more"
            >
              Read the official Have I Been Pwned API documentation
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Consent checkbox */}
          <div className="flex items-start space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Checkbox 
              id="understand" 
              checked={understood}
              onCheckedChange={(checked) => setUnderstood(checked === true)}
              data-testid="checkbox-consent"
            />
            <Label 
              htmlFor="understand" 
              className="text-sm font-medium leading-tight cursor-pointer"
            >
              I understand how k-anonymity protects my privacy and consent to enable breach checking
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onDecline}
            data-testid="button-decline"
          >
            No Thanks
          </Button>
          <Button 
            onClick={handleConsent} 
            disabled={!understood}
            className="bg-blue-600 hover:bg-blue-700"
            data-testid="button-consent"
          >
            Enable Breach Checking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
