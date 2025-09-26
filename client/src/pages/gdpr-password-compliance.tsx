import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, Users, ArrowRight, Lock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GDPRPasswordCompliance() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'GDPR Password Compliance Checker - EU Data Protection Standards | SecureCheck';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Ensure GDPR compliance with our password strength checker. Validate passwords meet EU data protection requirements for appropriate security measures and personal data protection.');
    
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
    
    addMetaTag('og:title', 'GDPR Password Compliance Checker - EU Data Protection Standards');
    addMetaTag('og:description', 'Validate passwords for GDPR compliance with appropriate security measures and risk-based authentication.');
    addMetaTag('og:type', 'website');
  }, []);

  const gdprRequirements = [
    {
      title: 'Appropriate Security Measures',
      description: 'Article 32 requires security appropriate to the risk level (60+ strength score)',
      article: 'Article 32',
      icon: CheckCircle,
      type: 'security' as const
    },
    {
      title: 'Personal Data Protection',
      description: 'Stronger passwords (10+ characters) for systems processing personal data',
      article: 'Article 5',
      icon: Users,
      type: 'privacy' as const
    },
    {
      title: 'Risk-Based Approach',
      description: 'Password strength must match data sensitivity (40+ entropy bits)',
      article: 'Article 32',
      icon: Shield,
      type: 'risk' as const
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Controller Obligations',
      description: 'Implement appropriate technical measures to secure personal data access',
      points: ['Strong authentication systems', 'Regular security assessments', 'Documentation of security measures']
    },
    {
      title: 'Risk Assessment',
      description: 'Password requirements should match the risk level of data processing',
      points: ['High-risk processing requires stronger passwords', 'Consider data sensitivity levels', 'Balance security with usability']
    },
    {
      title: 'Privacy by Design',
      description: 'Build security into authentication systems from the ground up',
      points: ['Default secure password policies', 'User-friendly security guidance', 'Transparent security practices']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">SecureCheck</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                100% Private
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <Euro className="h-3 w-3 mr-1" />
                EU Compliant
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <Lock className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            GDPR Password Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your password policies meet <strong>EU GDPR requirements</strong> for data protection. 
            Validate appropriate security measures and risk-based authentication standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Check GDPR Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Privacy-first approach • No data collection
            </div>
          </div>
        </div>

        {/* GDPR Requirements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            GDPR Password Security Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gdprRequirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'security' 
                          ? 'bg-green-100 dark:bg-green-900'
                          : requirement.type === 'privacy'
                          ? 'bg-blue-100 dark:bg-blue-900'
                          : 'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'security'
                            ? 'text-green-600 dark:text-green-400'
                            : requirement.type === 'privacy'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-purple-600 dark:text-purple-400'
                        }`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {requirement.article}
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

        {/* Compliance Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key GDPR Compliance Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-compliance-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600 dark:text-purple-400">
                    {area.title}
                  </CardTitle>
                  <CardDescription>
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GDPR Principles Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              GDPR Security Principles for Authentication
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                  Risk-Based Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  GDPR requires security measures "appropriate to the risk." For authentication systems, 
                  this means stronger passwords for systems processing sensitive personal data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">High entropy for sensitive data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Regular security assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Documented security measures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Privacy by Design
                </h3>
                <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                  Article 25 requires privacy by design and by default. This means implementing 
                  secure authentication from the start, with user-friendly security guidance 
                  and transparent practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Validate GDPR Compliance Now
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure your passwords meet EU data protection requirements with our compliance checker
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Compliance Check
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}