import { ComplianceStandard } from '@/types/password';

interface ComplianceBadgesProps {
  activeStandard: ComplianceStandard;
  onStandardChange: (standard: ComplianceStandard) => void;
}

const STANDARDS: { key: ComplianceStandard; label: string }[] = [
  { key: 'NIST', label: 'NIST 800-63B' },
  { key: 'GDPR', label: 'GDPR' },
  { key: 'ISO27001', label: 'ISO 27001' },
  { key: 'PCI-DSS', label: 'PCI DSS' }
];

export function ComplianceBadges({ activeStandard, onStandardChange }: ComplianceBadgesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {STANDARDS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onStandardChange(key)}
          data-testid={`compliance-badge-${key.toLowerCase()}`}
          className={`px-4 py-2 rounded-lg border border-border text-sm font-medium transition-colors hover:opacity-80 ${
            activeStandard === key
              ? 'compliance-badge active bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-accent'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
