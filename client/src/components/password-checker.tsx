import { useState, useEffect } from 'react';
import { Eye, EyeOff, Shield, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StrengthMeter } from './strength-meter';
import { ComplianceBadges } from './compliance-badges';
import { FeedbackList } from './feedback-list';
import { BreachCheckingExplainer } from './breach-checking-explainer';
import { BreachCheckConsentDialog } from './breach-check-consent-dialog';
import { analyzePassword } from '@/lib/password-analyzer';
import { checkCompliance } from '@/lib/compliance-checker';
import { checkPasswordBreach, formatBreachCount } from '@/lib/breach-checker';
import { PasswordAnalysis, ComplianceResult, ComplianceStandard } from '@/types/password';

export function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeStandard, setActiveStandard] = useState<ComplianceStandard>('NIST');
  const [analysis, setAnalysis] = useState<PasswordAnalysis | null>(null);
  const [complianceResult, setComplianceResult] = useState<ComplianceResult | null>(null);
  
  // Breach checking state
  const [breachCheckEnabled, setBreachCheckEnabled] = useState<boolean>(() => {
    return localStorage.getItem('breachCheckConsent') === 'true';
  });
  const [showConsentDialog, setShowConsentDialog] = useState(false);

  // Password analysis effect
  useEffect(() => {
    const newAnalysis = analyzePassword(password);
    const newComplianceResult = password ? checkCompliance(password, newAnalysis, activeStandard) : null;
    
    setAnalysis(newAnalysis);
    setComplianceResult(newComplianceResult);
  }, [password, activeStandard]);

  // Breach checking effect (only runs if enabled and password exists)
  useEffect(() => {
    if (!breachCheckEnabled || !password || !analysis) {
      return;
    }

    let isCancelled = false;

    // Set checking state
    setAnalysis(prev => prev ? {
      ...prev,
      breachCheck: {
        isChecking: true,
        isBreached: false,
        breachCount: 0
      }
    } : prev);

    // Perform the breach check
    checkPasswordBreach(password).then(result => {
      if (!isCancelled) {
        setAnalysis(prev => prev ? {
          ...prev,
          breachCheck: {
            isChecking: false,
            isBreached: result.isBreached,
            breachCount: result.breachCount,
            error: result.error
          }
        } : prev);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [password, breachCheckEnabled, analysis?.entropy]); // Use entropy as dependency to avoid re-running too often

  const handleEnableBreachCheck = () => {
    setShowConsentDialog(true);
  };

  const handleConsent = () => {
    setBreachCheckEnabled(true);
    localStorage.setItem('breachCheckConsent', 'true');
    setShowConsentDialog(false);
  };

  const handleDecline = () => {
    setShowConsentDialog(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Password Input Section */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <div className="space-y-4">
          <div>
            <Label htmlFor="password-input" className="block text-sm font-medium mb-2">
              Enter Password to Analyze
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password-input"
                placeholder="Type your password here..."
                value={password}
                onChange={handlePasswordChange}
                className="pr-12"
                data-testid="password-input"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-auto p-1"
                onClick={togglePasswordVisibility}
                data-testid="toggle-password-visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Strength Meter */}
          {analysis && <StrengthMeter analysis={analysis} />}
        </div>
      </div>

      {/* Compliance Modes */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="text-lg font-semibold mb-4">Compliance Standards</h3>
        <div className="mb-4">
          <ComplianceBadges 
            activeStandard={activeStandard}
            onStandardChange={setActiveStandard}
          />
        </div>
        
        {/* Compliance Results */}
        {complianceResult && (
          <div className="space-y-3">
            <div 
              className={`flex items-center justify-between p-3 rounded-lg border ${
                complianceResult.passed 
                  ? 'bg-success/10 border-success/20' 
                  : 'bg-warning/10 border-warning/20'
              }`}
              data-testid="compliance-result"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  complianceResult.passed ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'
                }`}>
                  {complianceResult.passed ? '✓' : '⚠'}
                </div>
                <div>
                  <p className={`font-medium ${complianceResult.passed ? 'text-success' : 'text-warning'}`}>
                    {complianceResult.standard}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {complianceResult.feedback}
                  </p>
                </div>
              </div>
              <span className={`font-bold ${complianceResult.passed ? 'text-success' : 'text-warning'}`}>
                {complianceResult.passed ? '✓ PASS' : '⚠ WARN'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Breach Checking Section */}
      {!breachCheckEnabled ? (
        <div className="space-y-4">
          <BreachCheckingExplainer />
          <div className="flex justify-center">
            <Button 
              onClick={handleEnableBreachCheck}
              className="bg-blue-600 hover:bg-blue-700"
              size="lg"
              data-testid="button-enable-breach-check"
            >
              <Shield className="w-5 h-5 mr-2" />
              Enable Breach Checking
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Password Breach Check
          </h3>
          
          {password && analysis?.breachCheck ? (
            <div>
              {analysis.breachCheck.isChecking ? (
                <div 
                  className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg"
                  data-testid="breach-checking"
                >
                  <Loader2 className="w-6 h-6 text-yellow-600 dark:text-yellow-400 animate-spin" />
                  <div>
                    <p className="font-medium text-yellow-900 dark:text-yellow-100">Checking for breaches...</p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Querying Have I Been Pwned database securely
                    </p>
                  </div>
                </div>
              ) : analysis.breachCheck.error ? (
                <div 
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                  data-testid="breach-check-error"
                >
                  <AlertTriangle className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Unable to check breaches</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {analysis.breachCheck.error}
                    </p>
                  </div>
                </div>
              ) : analysis.breachCheck.isBreached ? (
                <div 
                  className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950 border-2 border-red-300 dark:border-red-700 rounded-lg"
                  data-testid="breach-found"
                >
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-red-900 dark:text-red-100 mb-1">
                      ⚠️ Password Found in Data Breaches
                    </p>
                    <p className="text-sm text-red-800 dark:text-red-200 mb-2">
                      {formatBreachCount(analysis.breachCheck.breachCount)}
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      This password has been exposed in data breaches and should <strong>never be used</strong>. 
                      Attackers have this password in their databases and will try it first.
                    </p>
                  </div>
                </div>
              ) : (
                <div 
                  className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 border-2 border-green-300 dark:border-green-700 rounded-lg"
                  data-testid="breach-safe"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-900 dark:text-green-100 mb-1">
                      ✓ Not Found in Known Breaches
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      {formatBreachCount(analysis.breachCheck.breachCount)}
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      This is a good sign! However, continue to follow other security recommendations above.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Privacy reminder */}
              <div className="mt-4 text-xs text-muted-foreground text-center">
                <p>
                  🔒 Your password was checked using k-anonymity. Only a partial hash was sent, 
                  never your actual password.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Enter a password above to check if it has been exposed in data breaches
            </p>
          )}
        </div>
      )}

      {/* Consent Dialog */}
      <BreachCheckConsentDialog 
        open={showConsentDialog}
        onConsent={handleConsent}
        onDecline={handleDecline}
      />

      {/* Detailed Feedback */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="text-lg font-semibold mb-4">Improvement Suggestions</h3>
        <div className="space-y-4">
          {complianceResult && analysis && (
            <FeedbackList 
              complianceResult={complianceResult}
              generalFeedback={analysis.feedback}
            />
          )}
        </div>
      </div>
    </div>
  );
}
