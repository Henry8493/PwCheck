import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, Building, ArrowRight, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ISO27001PasswordRules() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'ISO 27001 Password Rules Checker - Information Security Management | Pw Check';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Validate passwords against ISO 27001 information security management standards. Check password policies for enterprise compliance with international security frameworks.');
    
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
    
    addMetaTag('og:title', 'ISO 27001 Password Rules Checker - Information Security Management');
    addMetaTag('og:description', 'Ensure password policies meet ISO 27001 information security management standards for enterprise compliance.');
    addMetaTag('og:type', 'website');
  }, []);

  const iso27001Requirements = [
    {
      title: 'Information Security Controls',
      description: 'Passwords must align with organizational security policies and risk management',
      section: 'A.9.4.3',
      icon: Shield,
      type: 'control' as const
    },
    {
      title: 'Access Control Management',
      description: 'Strong authentication mechanisms to protect information assets',
      section: 'A.9.1.1',
      icon: CheckCircle,
      type: 'access' as const
    },
    {
      title: 'Password Management System',
      description: 'Formal procedures for password creation, distribution, and maintenance',
      section: 'A.9.4.3',
      icon: Building,
      type: 'system' as const
    }
  ];

  const controlAreas = [
    {
      title: 'A.9.4.3 Password Management System',
      description: 'Users shall follow organizational password practices when creating passwords',
      requirements: [
        'Strong authentication for privileged accounts',
        'Password complexity appropriate to information classification',
        'Regular password review and updates',
        'Secure password storage and transmission'
      ]
    },
    {
      title: 'A.9.1.1 Access Control Policy',
      description: 'Access control rules based on business and security requirements',
      requirements: [
        'Risk-based authentication requirements',
        'Principle of least privilege',
        'Regular access reviews',
        'Documented security procedures'
      ]
    },
    {
      title: 'A.18.1.4 Privacy and Protection',
      description: 'Protection of personally identifiable information in authentication',
      requirements: [
        'Secure credential handling',
        'Privacy by design principles',
        'Data protection compliance',
        'Transparent security measures'
      ]
    }
  ];

  const implementationSteps = [
    'Risk Assessment: Identify assets and appropriate password strength requirements',
    'Policy Development: Create comprehensive password management policies',
    'Technical Controls: Implement password validation and enforcement systems',
    'Training: Educate users on secure password practices',
    'Monitoring: Regular audits and compliance assessments',
    'Continuous Improvement: Update policies based on threat landscape'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <SiteHeader
        additionalBadges={
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Globe className="h-3 w-3 mr-1" />
            ISO Certified
          </Badge>
        }
      />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <Lock className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ISO 27001 Password Rules
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your password policies meet <strong>ISO 27001</strong> information security 
            management standards. Validate enterprise compliance with international security frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Check ISO 27001 Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Enterprise-grade security validation • No data collection
            </div>
          </div>
        </div>

        {/* ISO 27001 Requirements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ISO 27001 Password Security Controls
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {iso27001Requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'control' 
                          ? 'bg-green-100 dark:bg-green-900'
                          : requirement.type === 'access'
                          ? 'bg-blue-100 dark:bg-blue-900'
                          : 'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'control'
                            ? 'text-green-600 dark:text-green-400'
                            : requirement.type === 'access'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-purple-600 dark:text-purple-400'
                        }`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {requirement.section}
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

        {/* Control Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key ISO 27001 Control Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {controlAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-control-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600 dark:text-green-400">
                    {area.title}
                  </CardTitle>
                  <CardDescription>
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              ISO 27001 Implementation Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                  Implementation Steps
                </h3>
                <ol className="space-y-3">
                  {implementationSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                  About ISO 27001
                </h3>
                <p className="text-green-800 dark:text-green-200 leading-relaxed mb-4">
                  ISO 27001 is the international standard for information security management systems (ISMS). 
                  It provides a systematic approach to managing sensitive information and ensuring its security.
                </p>
                <p className="text-green-800 dark:text-green-200 leading-relaxed">
                  Password management is a critical control area that affects access control, 
                  information classification, and overall security posture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Validate Your Enterprise Security
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure your password policies meet ISO 27001 information security standards
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}