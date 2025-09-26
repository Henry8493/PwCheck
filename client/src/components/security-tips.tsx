import { Card } from '@/components/ui/card';

export function SecurityTips() {
  const tips = [
    {
      title: 'Use a Password Manager',
      description: 'Generate and store unique passwords for every account',
      tooltip: 'Click to learn more about password managers'
    },
    {
      title: 'Enable 2FA',
      description: 'Add an extra layer of security to your accounts',
      tooltip: 'Learn about two-factor authentication'
    },
    {
      title: 'Avoid Password Reuse',
      description: 'Never use the same password across multiple sites',
      tooltip: 'Understand password reuse risks'
    }
  ];

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
      <h3 className="text-lg font-semibold mb-4">Security Tips</h3>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-accent transition-colors"
            title={tip.tooltip}
            data-testid={`security-tip-${index}`}
          >
            <h4 className="font-medium text-sm">{tip.title}</h4>
            <p className="text-xs text-muted-foreground">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
