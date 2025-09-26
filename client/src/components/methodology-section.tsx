export function MethodologySection() {
  const standards = [
    {
      name: 'NIST SP 800-63B',
      requirements: [
        'Minimum 8 characters',
        'Maximum 64 characters',
        'Check against breach databases',
        'No composition rules',
        'No periodic changes'
      ]
    },
    {
      name: 'GDPR Requirements',
      requirements: [
        'Personal data protection',
        'Appropriate security measures',
        'Risk-based approach',
        'Regular security assessments',
        'Encryption requirements'
      ]
    },
    {
      name: 'ISO 27001',
      requirements: [
        'Information security management',
        'Access control policies',
        'Password complexity rules',
        'Regular password updates',
        'Account lockout mechanisms'
      ]
    },
    {
      name: 'PCI DSS',
      requirements: [
        'Minimum 7 characters',
        'Numeric and alphabetic',
        'Change every 90 days',
        'Unique passwords',
        'Secure transmission'
      ]
    }
  ];

  return (
    <div className="mt-12 bg-card p-8 rounded-lg shadow-sm border border-border">
      <h2 className="text-2xl font-bold mb-6">Transparent Methodology</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {standards.map((standard, index) => (
          <div key={index} className="space-y-3" data-testid={`methodology-${index}`}>
            <h3 className="font-semibold text-primary">{standard.name}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {standard.requirements.map((requirement, reqIndex) => (
                <li key={reqIndex}>• {requirement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Scoring Algorithm:</strong> Our strength calculation combines entropy analysis, pattern detection, common password checking, and compliance-specific requirements. Each standard has weighted criteria that contribute to the final score.
        </p>
      </div>
    </div>
  );
}
