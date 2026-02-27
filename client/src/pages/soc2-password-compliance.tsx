import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, ArrowRight, Lock, Eye, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function SOC2PasswordCompliance() {
  useEffect(() => {
    document.title = 'SOC 2 Password Compliance - Trust Services Criteria | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Ensure your password policies meet SOC 2 Trust Services Criteria. Validate compliance with AICPA standards for service organizations and protect sensitive data.');

    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'SOC 2 Password Compliance - Trust Services Criteria');
    addMetaTag('og:description', 'Validate password compliance with SOC 2 Trust Services Criteria for service organizations and data protection.');
    addMetaTag('og:type', 'website');
  }, []);

  const soc2Requirements = [
    {
      title: 'Logical Access Security',
      description: 'Controls over logical access to information assets',
      requirement: 'CC6.1',
      icon: Shield,
      type: 'access' as const
    },
    {
      title: 'System Operations',
      description: 'Monitoring and detection of system operation anomalies',
      requirement: 'CC6.6',
      icon: Eye,
      type: 'operations' as const
    },
    {
      title: 'Access Reviews',
      description: 'Periodic review and management of access credentials',
      requirement: 'CC6.2',
      icon: ClipboardCheck,
      type: 'reviews' as const
    }
  ];

  const requirementDetails = [
    {
      title: 'CC6.1: Logical and Physical Access Controls',
      description: 'Controls to restrict logical and physical access to information assets',
      criteria: [
        'Restricting logical access to sensitive information assets',
        'Using authentication mechanisms to verify user identity',
        'Managing credentials including password complexity and rotation',
        'Removing access when no longer appropriate'
      ]
    },
    {
      title: 'CC6.6: System Operation Controls',
      description: 'Monitoring and managing system operations to detect anomalies',
      criteria: [
        'Monitoring system capacity and performance',
        'Identifying and reporting anomalies in system operations',
        'Implementing change detection mechanisms',
        'Evaluating security events and incidents'
      ]
    },
    {
      title: 'CC6.2: Access Review and Management',
      description: 'Periodic review and management of user access and credentials',
      criteria: [
        'Periodic credential reviews and validation',
        'Access provisioning workflows and approvals',
        'User entitlement reviews and recertification',
        'Role-based access control implementation'
      ]
    }
  ];

  const trustServicesAreas = [
    {
      title: 'Security',
      risk: 'Critical',
      description: 'Protection of information and systems against unauthorized access',
      measures: ['Logical access controls', 'Authentication mechanisms', 'Intrusion detection and prevention']
    },
    {
      title: 'Availability',
      risk: 'High',
      description: 'Accessibility of systems as committed or agreed',
      measures: ['System monitoring', 'Disaster recovery planning', 'Capacity management']
    },
    {
      title: 'Confidentiality',
      risk: 'High',
      description: 'Protection of information designated as confidential',
      measures: ['Data classification', 'Encryption controls', 'Access restriction policies']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader
        additionalBadges={
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200" data-testid="badge-soc2-aligned">
            <Shield className="h-3 w-3 mr-1" />
            SOC 2 Aligned
          </Badge>
        }
      />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16" data-testid="hero-section">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-full">
              <Lock className="h-12 w-12 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-testid="heading-soc2">
            SOC 2 Password Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
            Ensure your password policies meet <strong>SOC 2</strong> Trust Services Criteria.
            Validate compliance with AICPA standards for service organizations and protect sensitive data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                Check SOC 2 Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Trust services compliance validation • No sensitive data stored
            </div>
          </div>
        </div>

        <section className="mb-16" data-testid="section-requirements">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            SOC 2 Password Security Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {soc2Requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'access'
                          ? 'bg-amber-100 dark:bg-amber-900'
                          : requirement.type === 'operations'
                          ? 'bg-yellow-100 dark:bg-yellow-900'
                          : 'bg-orange-100 dark:bg-orange-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'access'
                            ? 'text-amber-600 dark:text-amber-400'
                            : requirement.type === 'operations'
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-orange-600 dark:text-orange-400'
                        }`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs" data-testid={`badge-requirement-${index}`}>
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

        <section className="mb-16" data-testid="section-detailed-requirements">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Detailed SOC 2 Requirements
          </h2>
          <div className="space-y-8">
            {requirementDetails.map((detail, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-detail-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-amber-600 dark:text-amber-400">
                    {detail.title}
                  </CardTitle>
                  <CardDescription>
                    {detail.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {detail.criteria.map((criterion, critIndex) => (
                      <li key={critIndex} className="flex items-start" data-testid={`text-criterion-${index}-${critIndex}`}>
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

        <section className="mb-16" data-testid="section-trust-services">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Trust Services Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustServicesAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-area-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <Badge
                      variant={area.risk === 'Critical' ? 'destructive' : 'secondary'}
                      className="text-xs"
                      data-testid={`badge-risk-${index}`}
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
                        <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16" data-testid="section-understanding">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Understanding SOC 2
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-4">
                  Trust Services Framework
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  SOC 2 was developed by the AICPA (American Institute of Certified Public Accountants) to define
                  criteria for managing customer data based on five trust services categories: security, availability,
                  processing integrity, confidentiality, and privacy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Developed by AICPA for service organizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Five trust services categories for comprehensive coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Type I (point-in-time) vs Type II (over a period) reports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-xl" data-testid="text-password-relation">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">
                  Password Policies & SOC 2 Controls
                </h3>
                <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                  Strong password policies are a fundamental component of SOC 2 compliance. The Common Criteria (CC)
                  series—particularly CC6.1, CC6.2, and CC6.6—require organizations to implement robust authentication
                  controls, manage user credentials effectively, and monitor access to systems. Well-defined password
                  requirements help demonstrate that your organization meets the Trust Services Criteria for security
                  and confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-12 text-white" data-testid="section-cta">
          <h2 className="text-3xl font-bold mb-4">
            Meet SOC 2 Trust Services Criteria
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Validate your passwords meet SOC 2 requirements for service organization compliance
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3"
            >
              Check SOC 2 Compliance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}