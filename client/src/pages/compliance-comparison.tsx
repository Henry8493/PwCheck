import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle, XCircle, Info, ArrowRight, GitCompare, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ComplianceComparison() {
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['NIST', 'GDPR', 'ISO27001', 'PCI-DSS']);
  const [focusArea, setFocusArea] = useState<string>('all');

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Password Policy Compliance Comparison Guide | Pw Check';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Compare password policy requirements across NIST SP 800-63B, GDPR, ISO 27001, and PCI DSS standards. Interactive comparison guide for compliance professionals.');
    
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
    
    addMetaTag('og:title', 'Password Policy Compliance Comparison Guide');
    addMetaTag('og:description', 'Interactive comparison of password requirements across major compliance frameworks.');
    addMetaTag('og:type', 'website');
  }, []);

  const complianceData = {
    'NIST': {
      name: 'NIST SP 800-63B',
      color: 'blue',
      focus: 'Federal/Government',
      description: 'Federal cybersecurity guidelines for digital identity',
      requirements: {
        minLength: { value: '8 characters', status: 'required', details: 'Minimum 8 characters for memorized secrets' },
        maxLength: { value: 'Accept ≥64 chars', status: 'required', details: 'Must accept passwords of at least 64 characters' },
        complexity: { value: 'None required', status: 'discouraged', details: 'Explicitly discourages composition rules' },
        commonPasswords: { value: 'Prohibited', status: 'required', details: 'Must check against breach databases' },
        rotation: { value: 'Not required', status: 'discouraged', details: 'Only when compromised' },
        mfa: { value: 'Recommended', status: 'recommended', details: 'For higher authentication levels' }
      }
    },
    'GDPR': {
      name: 'GDPR',
      color: 'purple',
      focus: 'EU Data Protection',
      description: 'European Union data protection regulation',
      requirements: {
        minLength: { value: 'Risk-based', status: 'flexible', details: 'Length appropriate to risk level' },
        maxLength: { value: 'No limit', status: 'flexible', details: 'No specific upper limit defined' },
        complexity: { value: 'Risk-based', status: 'recommended', details: 'Appropriate to risk level' },
        commonPasswords: { value: 'Risk assessment', status: 'recommended', details: 'Based on data sensitivity' },
        rotation: { value: 'Risk-based', status: 'flexible', details: 'When security requires it' },
        mfa: { value: 'Risk-appropriate', status: 'recommended', details: 'When appropriate to risk level' }
      }
    },
    'ISO27001': {
      name: 'ISO 27001',
      color: 'green',
      focus: 'Enterprise Security',
      description: 'International information security management',
      requirements: {
        minLength: { value: 'Policy-defined', status: 'flexible', details: 'Based on risk assessment' },
        maxLength: { value: 'Policy-defined', status: 'flexible', details: 'Organizational decision' },
        complexity: { value: 'Risk-appropriate', status: 'recommended', details: 'Match information classification' },
        commonPasswords: { value: 'Avoided', status: 'recommended', details: 'Part of password policy' },
        rotation: { value: 'Regular review', status: 'recommended', details: 'Based on access control policy' },
        mfa: { value: 'Risk-based', status: 'recommended', details: 'Recommended for privileged access (5.17)' }
      }
    },
    'PCI-DSS': {
      name: 'PCI DSS',
      color: 'red',
      focus: 'Payment Security',
      description: 'Payment card industry security standards',
      requirements: {
        minLength: { value: '12+ characters', status: 'required', details: 'Minimum 12 characters (Req 8.3.6 v4.0)' },
        maxLength: { value: 'Not specified', status: 'flexible', details: 'No upper limit requirement' },
        complexity: { value: 'Alphanumeric', status: 'required', details: 'Must contain letters and numbers' },
        commonPasswords: { value: 'Avoided', status: 'recommended', details: 'Not explicitly required' },
        rotation: { value: 'When compromised', status: 'conditional', details: 'Change when suspected compromise (Req 8.3.7 v4.0)' },
        mfa: { value: 'Required', status: 'required', details: 'For cardholder data environment' }
      }
    }
  };

  const requirementCategories = {
    minLength: 'Minimum Length',
    maxLength: 'Length Limits', 
    complexity: 'Complexity Rules',
    commonPasswords: 'Common Password Checking',
    rotation: 'Password Rotation',
    mfa: 'Multi-Factor Authentication'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'required': return 'text-red-600 dark:text-red-400';
      case 'recommended': return 'text-yellow-600 dark:text-yellow-400';
      case 'discouraged': return 'text-orange-600 dark:text-orange-400';
      case 'conditional': return 'text-blue-600 dark:text-blue-400';
      case 'flexible': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'required': return <CheckCircle className="h-4 w-4 text-red-600 dark:text-red-400" />;
      case 'recommended': return <Info className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />;
      case 'discouraged': return <XCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />;
      case 'conditional': return <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
      case 'flexible': return <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />;
      default: return <Info className="h-4 w-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const filteredStandards = selectedStandards.length > 0 ? selectedStandards : Object.keys(complianceData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <SiteHeader />

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <GitCompare className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Compliance Standards Comparison
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Compare password policy requirements across <strong>NIST SP 800-63B</strong>, 
            <strong> GDPR</strong>, <strong>ISO 27001</strong>, and <strong>PCI DSS</strong> 
            to choose the right framework for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" data-testid="link-start-checking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Test Your Passwords
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="font-medium">Filter Comparison:</span>
            </div>
            
            <div className="flex flex-wrap gap-4 flex-1">
              <div className="flex flex-wrap gap-2">
                {Object.keys(complianceData).map((standard) => (
                  <Button
                    key={standard}
                    variant={selectedStandards.includes(standard) ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedStandards(prev => 
                        prev.includes(standard) 
                          ? prev.filter(s => s !== standard)
                          : [...prev, standard]
                      );
                    }}
                    data-testid={`filter-${standard.toLowerCase()}`}
                    className="text-xs"
                  >
                    {complianceData[standard as keyof typeof complianceData].name}
                  </Button>
                ))}
              </div>
              
              <Select value={focusArea} onValueChange={setFocusArea}>
                <SelectTrigger className="w-48" data-testid="focus-area-select">
                  <SelectValue placeholder="Focus Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requirements</SelectItem>
                  <SelectItem value="length">Length Requirements</SelectItem>
                  <SelectItem value="complexity">Complexity Rules</SelectItem>
                  <SelectItem value="security">Security Measures</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <Tabs defaultValue="table" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-96 mx-auto">
            <TabsTrigger value="table" data-testid="tab-table">Comparison Table</TabsTrigger>
            <TabsTrigger value="overview" data-testid="tab-overview">Standards Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="space-y-6">
            <div className="overflow-x-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Requirement
                      </th>
                      {filteredStandards.map((standard) => (
                        <th key={standard} className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                          <div className="flex flex-col items-center space-y-1">
                            <span>{complianceData[standard as keyof typeof complianceData].name}</span>
                            <Badge variant="outline" className="text-xs">
                              {complianceData[standard as keyof typeof complianceData].focus}
                            </Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {Object.entries(requirementCategories).map(([key, category]) => {
                      if (focusArea !== 'all') {
                        if (focusArea === 'length' && !['minLength', 'maxLength'].includes(key)) return null;
                        if (focusArea === 'complexity' && !['complexity', 'commonPasswords'].includes(key)) return null;
                        if (focusArea === 'security' && !['rotation', 'mfa'].includes(key)) return null;
                      }
                      
                      return (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-gray-700" data-testid={`row-${key}`}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {category}
                          </td>
                          {filteredStandards.map((standard) => {
                            const requirement = complianceData[standard as keyof typeof complianceData].requirements[key as keyof typeof complianceData.NIST.requirements];
                            return (
                              <td key={standard} className="px-6 py-4 text-center">
                                <div className="flex flex-col items-center space-y-2">
                                  <div className="flex items-center space-x-2">
                                    {getStatusIcon(requirement.status)}
                                    <span className={`text-sm font-medium ${getStatusColor(requirement.status)}`}>
                                      {requirement.value}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-32">
                                    {requirement.details}
                                  </p>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStandards.map((standard) => {
                const data = complianceData[standard as keyof typeof complianceData];
                return (
                  <Card key={standard} className="border-0 shadow-lg" data-testid={`overview-${standard.toLowerCase()}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className={`text-xl text-${data.color}-600 dark:text-${data.color}-400`}>
                          {data.name}
                        </CardTitle>
                        <Badge variant="secondary">{data.focus}</Badge>
                      </div>
                      <CardDescription>{data.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(data.requirements).map(([key, req]) => (
                          <div key={key} className="flex items-start space-x-3">
                            {getStatusIcon(req.status)}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">
                                  {requirementCategories[key as keyof typeof requirementCategories]}:
                                </span>
                                <span className={`text-sm ${getStatusColor(req.status)}`}>
                                  {req.value}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {req.details}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Legend</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-sm">Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Info className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm">Recommended</span>
            </div>
            <div className="flex items-center space-x-2">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">Conditional</span>
            </div>
            <div className="flex items-center space-x-2">
              <XCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm">Discouraged</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm">Flexible</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Test Your Passwords?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our compliance checker to validate your passwords against these standards
          </p>
          <Link href="/" data-testid="link-cta-test">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Password Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}