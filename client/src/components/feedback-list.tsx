import { ComplianceResult } from '@/types/password';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface FeedbackListProps {
  complianceResult: ComplianceResult;
  generalFeedback: string[];
}

export function FeedbackList({ complianceResult, generalFeedback }: FeedbackListProps) {
  const getIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return <XCircle className="w-5 h-5 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      default:
        return <CheckCircle className="w-5 h-5 text-success" />;
    }
  };

  const getBgColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'bg-destructive/10 border-destructive/20';
      case 'warning':
        return 'bg-warning/10 border-warning/20';
      default:
        return 'bg-success/10 border-success/20';
    }
  };

  const getTextColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'text-destructive';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-success';
    }
  };

  return (
    <div className="space-y-3">
      {/* Compliance-specific feedback */}
      {complianceResult.requirements.map((requirement, index) => (
        <div
          key={index}
          data-testid={`feedback-item-${index}`}
          className={`flex items-start space-x-3 p-3 rounded-lg border ${getBgColor(requirement.severity)}`}
        >
          {getIcon(requirement.severity)}
          <div>
            <p className={`font-medium ${getTextColor(requirement.severity)}`}>
              {requirement.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {requirement.passed ? 'Requirement met' : 'Needs improvement'}
            </p>
          </div>
        </div>
      ))}

      {/* General feedback */}
      {generalFeedback.map((feedback, index) => (
        <div
          key={`general-${index}`}
          data-testid={`general-feedback-${index}`}
          className="flex items-start space-x-3 p-3 bg-muted rounded-lg"
        >
          <AlertTriangle className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="font-medium text-foreground">{feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
