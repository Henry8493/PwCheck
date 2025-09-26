import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StrengthMeter } from './strength-meter';
import { ComplianceBadges } from './compliance-badges';
import { FeedbackList } from './feedback-list';
import { analyzePassword } from '@/lib/password-analyzer';
import { checkCompliance } from '@/lib/compliance-checker';
import { PasswordAnalysis, ComplianceResult, ComplianceStandard } from '@/types/password';

export function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeStandard, setActiveStandard] = useState<ComplianceStandard>('NIST');
  const [analysis, setAnalysis] = useState<PasswordAnalysis | null>(null);
  const [complianceResult, setComplianceResult] = useState<ComplianceResult | null>(null);

  useEffect(() => {
    const newAnalysis = analyzePassword(password);
    const newComplianceResult = password ? checkCompliance(password, newAnalysis, activeStandard) : null;
    
    setAnalysis(newAnalysis);
    setComplianceResult(newComplianceResult);
  }, [password, activeStandard]);

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
