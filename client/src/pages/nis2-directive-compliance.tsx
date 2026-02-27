import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, ArrowRight, Lock, Globe, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function NIS2DirectiveCompliance() {
  useEffect(() => {
    document.title = 'NIS2 Directive Password Compliance - EU Cybersecurity | Pw Check';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Ensure compliance with the EU NIS2 Directive cybersecurity requirements. Validate password policies for essential and important entities across the European Union.');

    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'NIS2 Directive Password Compliance - EU Cybersecurity');
    addMetaTag('og:description', 'Validate password and authentication policies against EU NIS2 Directive requirements for essential and important entities.');
    addMetaTag('og:type', 'website');
  }, []);

  const nis2Requirements = [
    {
      title: 'Risk Management Measures',
      description: 'Policies on risk analysis and information system security',
      requirement: 'Article 21(2)(a)',
      icon: Shield,
      type: 'risk' as const
    },
    {
      title: 'Incident Handling',
      description: 'Incident handling and reporting obligations',
      requirement: 'Article 21(2)(b)',
      icon: AlertTriangle,
      type: 'incident' as const
    },
    {
      title: 'Supply Chain Security',
      description: 'Supply chain security and vulnerability management',
      requirement: 'Article 21(2)(d)',
      icon: Globe,
      type: 'supply' as const
    }
  ];

  const requirementDetails = [
    {
      title: 'Article 21: Cybersecurity Risk-Management Measures',
      description: 'Comprehensive measures to manage risks posed to security of network and information systems',
      criteria: [
        'Appropriate and proportionate technical, operational and organisational measures',
        'Cyber-hygiene practices and cybersecurity training',
        'Policies and procedures regarding the use of cryptography',
        'Human resource security and access control policies'
      ]
    },
    {
      title: 'Article 23: Reporting Obligations',
      description: 'Timely notification requirements for significant cybersecurity incidents',
      criteria: [
        'Significant incident reporting within 24 hours (early warning)',
        'Incident notification updates within 72 hours',
        'Final report no later than one month after notification',
        'Informing recipients of services of significant cyber threats'
      ]
    },
    {
      title: 'Article 21(2)(j): Multi-Factor Authentication',
      description: 'Authentication and secure communication requirements',
      criteria: [
        'Use of multi-factor authentication or continuous authentication solutions',
        'Secured voice, video and text communications',
        'Secured emergency communication systems',
        'Authentication policies proportionate to the risk level'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Essential Entities',
      risk: 'Critical',
      description: 'Energy, transport, banking, health, digital infrastructure',
      measures: ['Comprehensive risk management', 'Mandatory incident reporting', 'Regular security audits']
    },
    {
      title: 'Important Entities',
      risk: 'High',
      description: 'Postal services, waste management, manufacturing, digital providers',
      measures: ['Proportionate security measures', 'Incident reporting obligations', 'Supply chain risk management']
    },
    {
      title: 'Cross-Border Operations',
      risk: 'High',
      description: 'Entities operating across multiple EU member states',
      measures: ['Harmonised compliance requirements', 'Coordinated incident response', 'Cross-border information sharing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader
        additionalBadges={
          <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200" data-testid="badge-nis2-compliant">
            <Shield className="h-3 w-3 mr-1" />
            NIS2 Compliant
          </Badge>
        }
      />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16" data-testid="hero-section">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-full">
              <Lock className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-testid="heading-nis2">
            NIS2 Directive Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
            Ensure your cybersecurity policies meet <strong>NIS2 Directive</strong> requirements for EU essential and important entities.
            Strengthen authentication and access controls across your organisation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                Check NIS2 Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              EU cybersecurity compliance validation • No sensitive data stored
            </div>
          </div>
        </div>

        <section className="mb-16" data-testid="section-requirements">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            NIS2 Cybersecurity Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nis2Requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`card-requirement-${index}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2 rounded-full ${
                        requirement.type === 'risk'
                          ? 'bg-cyan-100 dark:bg-cyan-900'
                          : requirement.type === 'incident'
                          ? 'bg-teal-100 dark:bg-teal-900'
                          : 'bg-emerald-100 dark:bg-emerald-900'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          requirement.type === 'risk'
                            ? 'text-cyan-600 dark:text-cyan-400'
                            : requirement.type === 'incident'
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-emerald-600 dark:text-emerald-400'
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

        <section className="mb-16" data-testid="section-details">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Detailed NIS2 Requirements
          </h2>
          <div className="space-y-8">
            {requirementDetails.map((detail, index) => (
              <Card key={index} className="border-0 shadow-lg" data-testid={`card-detail-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-600 dark:text-cyan-400">
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

        <section className="mb-16" data-testid="section-compliance-areas">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            NIS2 Compliance Areas
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
                        <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
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
              Understanding NIS2
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  EU Network and Information Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The NIS2 Directive is the EU-wide legislation on cybersecurity that provides legal measures
                  to boost the overall level of cybersecurity across the European Union.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Replaces the original NIS Directive with broader scope</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Covers more sectors and types of entities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Harmonises cybersecurity requirements across EU member states</span>
                  </li>
                </ul>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 mb-4">
                  Password & Authentication Expectations
                </h3>
                <p className="text-cyan-800 dark:text-cyan-200 leading-relaxed">
                  NIS2 requires entities to implement robust authentication and access control measures.
                  This includes multi-factor authentication, continuous authentication solutions, and
                  secured communications to protect network and information systems from cyber threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-12 text-white" data-testid="section-cta">
          <h2 className="text-3xl font-bold mb-4">
            Strengthen Your EU Cybersecurity Posture
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Validate your passwords and authentication policies meet NIS2 Directive requirements
          </p>
          <Link href="/" data-testid="link-cta-check">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3"
            >
              Check NIS2 Compliance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}