import { PasswordAnalysis } from '@/types/password';

interface StrengthMeterProps {
  analysis: PasswordAnalysis;
}

export function StrengthMeter({ analysis }: StrengthMeterProps) {
  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'very-weak': return 'bg-destructive';
      case 'weak': return 'bg-orange-500';
      case 'fair': return 'bg-warning';
      case 'good': return 'bg-yellow-500';
      case 'strong': return 'bg-success';
      default: return 'bg-muted';
    }
  };

  const getStrengthLabel = (strength: string) => {
    switch (strength) {
      case 'very-weak': return 'Very Weak';
      case 'weak': return 'Weak';
      case 'fair': return 'Fair';
      case 'good': return 'Good';
      case 'strong': return 'Strong';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Password Strength</span>
        <span className="text-sm font-bold text-primary">
          {getStrengthLabel(analysis.strength)} ({analysis.score}/100)
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <div 
          className={`h-3 rounded-full progress-bar ${getStrengthColor(analysis.strength)}`}
          style={{ width: `${analysis.score}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Very Weak</span>
        <span>Weak</span>
        <span>Fair</span>
        <span>Good</span>
        <span>Strong</span>
      </div>
    </div>
  );
}
