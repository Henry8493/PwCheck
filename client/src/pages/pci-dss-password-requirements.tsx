import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, CreditCard, ArrowRight, Lock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/site-header';

export default function PCIDSSPasswordRequirements() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'PCI DSS Password Requirements Checker - Payment Card Security | Pw Check';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Validate passwords against PCI DSS payment card security standards. Ensure compliance with credit card processing security requirements and protect cardholder data.');
    
    // Add Open Graph tags for social sharing
    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    addMetaTag('og:title', 'PCI DSS Password Requirements Checker - Payment Card Security');
    addMetaTag('og:description', 'Ensure password compliance with PCI DSS standards for secure payment card processing and cardholder data protection.');
    addMetaTag('og:type', 'website');
  }, []);

  const pciRequirements = [
    {
      title: 'Strong Authentication',
      description: 'Multi-factor authentication for cardholder data environment access',
      requirement: 'Req 8.3',
      icon: Shield,
      type: 'auth' as const
    },
    {
      title: 'Complex Passwords',
      description: 'Minimum 7 characters with both numeric and alphabetic characters',
      requirement: 'Req 8.2.3',
      icon: CheckCircle,
      type: 'complexity' as const
    },
    {
      title: 'Regular Changes',
      description: 'Password changes at least every 90 days for privileged accounts',
      requirement: 'Req 8.2.4',
      icon: CreditCard,
      type: 'rotation' as const
    }
  ];

  const requirementDetails = [
    {
      title: 'Requirement 8.2.3: Password Complexity',
      description: 'Strong cryptography and security protocols to safeguard cardholder data',
      criteria: [
        'Minimum length of seven characters',
        'Contain both numeric and alphabetic characters',
        'Cannot be the same as any of the last four passwords used',
        'Must be changed if suspected of being compromised'
      ]
    },
    {
      title: 'Requirement 8.2.4: Password Changes',
      description: 'Regular password changes to minimize exposure risk',
      criteria: [
        'Changed at least once every 90 days',
        'Cannot reuse any of the last four passwords',
        'First-time passwords must be changed after first use',
        'Temporary passwords have restricted lifetime'
      ]
    },
    {
      title: 'Requirement 8.3: Multi-Factor Authentication',
      description: 'Enhanced authentication for cardholder data environment',
      criteria: [
        'Required for all non-console administrative access',
        'Required for remote access to cardholder data environment',
        'Something you know + something you have/are',
        'Cannot be circumvented by users'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Cardholder Data Environment',
      risk: 'Critical',
      description: 'Systems that store, process, or transmit cardholder data require the strongest protection',
      measures: ['Multi-factor authentication', 'Complex password requirements', 'Regular rotation schedules']
    },
    {
      title: 'Administrative Access',
      risk: 'High',
      description: 'Administrative accounts have elevated privileges requiring enhanced security',
      measures: ['Unique user accounts', 'Strong authentication', 'Activity monitoring']
    },
    {
      title: 'Remote Access',
      risk: 'High',
      description: 'External access points require additional security layers',
      measures: ['VPN with multi-factor authentication', 'Encrypted connections', 'Access logging']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <SiteHeader
        additionalBadges={
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <DollarSign className="h-3 w-3 mr-1" />
            PCI Certified
          </Badge>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
              <Lock className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            PCI DSS Password Requirements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your password policies meet <strong>PCI DSS</strong> payment card security standards. 
            Protect cardholder data with compliant authentication requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Check PCI DSS Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Payment card security validation • No sensitive data stored
            </div>
          </div>
        </div>

        {/* PCI DSS Requirements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            PCI DSS Password Security Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pciRequirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'auth' 
                          ? 'bg-red-100 dark:bg-red-900'
                          : requirement.type === 'complexity'
                          ? 'bg-blue-100 dark:bg-blue-900'
                          : 'bg-green-100 dark:bg-green-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'auth'
                            ? 'text-red-600 dark:text-red-400'
                            : requirement.type === 'complexity'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {requirement.requirement}
                    </Badge>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {requirement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Detailed Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Detailed PCI DSS Requirements
          </h2>
          <div className="space-y-8">
            {requirementDetails.map((detail, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-detail-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 dark:text-red-400">
                    {detail.title}
                  </CardTitle>
                  <CardDescription>
                    {detail.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {detail.criteria.map((criterion, critIndex) => (
                      <li key={critIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Critical Security Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-area-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <Badge 
                      variant={area.risk === 'Critical' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {area.risk}
                    </Badge>
                  </div>
                  <CardDescription>
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PCI DSS Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Understanding PCI DSS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                  Payment Card Industry Standards
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  PCI DSS is a set of security standards designed to ensure that all companies that accept, 
                  process, store or transmit credit card information maintain a secure environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Mandatory for payment processors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Protects cardholder data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Reduces fraud and breaches</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">
                  Authentication Requirements
                </h3>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  Strong authentication is crucial for protecting cardholder data. PCI DSS requires 
                  multi-factor authentication for administrative access and complex passwords for 
                  all accounts with access to cardholder data environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Payment Systems
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Validate your passwords meet PCI DSS requirements for secure payment card processing
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
            >
              Start PCI DSS Check
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}