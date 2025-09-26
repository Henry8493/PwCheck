import { Shield } from 'lucide-react';

export function PrivacyNotice() {
  return (
    <div className="bg-accent p-6 rounded-lg border border-border">
      <div className="flex items-start space-x-3">
        <Shield className="w-6 h-6 text-primary mt-0.5" />
        <div>
          <h4 className="font-semibold mb-2">Your Privacy is Protected</h4>
          <p className="text-sm text-muted-foreground mb-2">
            All password analysis happens locally in your browser. Your passwords never leave your device.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• No server communication</li>
            <li>• No data storage or logging</li>
            <li>• No tracking or analytics</li>
            <li>• Open source verification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
