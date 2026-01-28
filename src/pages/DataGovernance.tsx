import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import RelatedLinks from '../components/RelatedLinks';
import JourneyProgress from '../components/JourneyProgress';
import JourneyContext from '../components/JourneyContext';
import {
  Database,
  Shield,
  GitBranch,
  Lock,
  Search,
  Users,
  CheckCircle2,
  FileText
} from 'lucide-react';

const DataGovernance: React.FC = () => {
  const services = [
    {
      title: 'Data Catalog',
      description: 'Centralized repository of data assets with comprehensive metadata management and discovery capabilities.',
      icon: Database,
      features: [
        'Automated metadata harvesting',
        'Business glossary management',
        'Asset tagging and classification',
        'Search and discovery'
      ]
    },
    {
      title: 'Data Quality & Integrity',
      description: 'Ensure data accuracy, completeness, and reliability across your organization.',
      icon: CheckCircle2,
      features: [
        'Data profiling and assessment',
        'Quality rules and validation',
        'Anomaly detection',
        'Quality scorecards and KPIs'
      ]
    },
    {
      title: 'Master Data Management',
      description: 'Single source of truth for critical business entities. Our comprehensive MDM solution includes 6-phase methodology with GenAI capabilities.',
      icon: FileText,
      features: [
        'Golden record creation',
        'Data stewardship workflows',
        'Hierarchy management',
        'Multi-domain MDM',
        '→ See our detailed MDM Capabilities'
      ]
    },
    {
      title: 'Data Lineage',
      description: 'End-to-end visibility into data flow and transformations across systems.',
      icon: GitBranch,
      features: [
        'Automated lineage capture',
        'Impact analysis',
        'Root cause analysis',
        'Compliance reporting'
      ]
    },
    {
      title: 'Data Security',
      description: 'Comprehensive security controls to protect sensitive data assets.',
      icon: Lock,
      features: [
        'Access control management',
        'Encryption at rest and in transit',
        'Data masking and anonymization',
        'Security monitoring and alerts'
      ]
    },
    {
      title: 'Data Privacy',
      description: 'Ensure compliance with privacy regulations like GDPR, CCPA, and HIPAA.',
      icon: Shield,
      features: [
        'PII identification and classification',
        'Consent management',
        'Right to be forgotten',
        'Privacy impact assessments'
      ]
    },
    {
      title: 'Data Discovery & Search',
      description: 'Intelligent search capabilities to find and access data assets quickly.',
      icon: Search,
      features: [
        'Full-text search',
        'Faceted navigation',
        'Personalized recommendations',
        'AI-powered insights'
      ]
    },
    {
      title: 'Data Collaboration',
      description: 'Enable teams to work together effectively on data initiatives.',
      icon: Users,
      features: [
        'Collaborative workflows',
        'Data sharing and access requests',
        'Discussion forums',
        'Knowledge sharing'
      ]
    }
  ];

  const tools = [
    { name: 'Alation', category: 'Data Catalog & Governance' },
    { name: 'Collibra', category: 'Data Governance Platform' },
    { name: 'Microsoft Purview', category: 'Data Governance & Compliance' },
    { name: 'Atlan', category: 'Modern Data Catalog' },
    { name: 'Informatica', category: 'Enterprise Data Management' },
    { name: 'AWS Glue Data Catalog', category: 'Cloud Data Catalog' },
    { name: 'Azure Data Catalog', category: 'Cloud Data Discovery' },
    { name: 'Google Cloud Data Catalog', category: 'Metadata Management' },
    { name: 'Ataccama', category: 'Data Quality & MDM' },
    { name: 'GoodData', category: 'Analytics Governance' }
  ];

  const approach = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current state of data governance, identify gaps, and define success criteria'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop governance framework, policies, and roadmap aligned with business objectives'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy governance tools, establish processes, and configure workflows'
    },
    {
      step: '04',
      title: 'Enablement',
      description: 'Train users, onboard data stewards, and create documentation'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Monitor adoption, measure KPIs, and continuously improve governance practices'
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Enterprise Data Governance"
        title="Build a Foundation of Trust"
        description="Comprehensive data governance capabilities to ensure quality, security, and compliance across your data landscape"
      />

      <JourneyProgress currentPhase={2} />

      <JourneyContext
        phase={2}
        title="Establish Foundation: Build Trust in Your Data"
        description="With your strategic roadmap in place, the next critical step is establishing a governance foundation. This creates the policies, processes, and tools needed to ensure data quality, security, and compliance across your organization."
        whyThisMatters="Data without governance is like building on sand—you can't trust it for decisions, you can't comply with regulations, and you can't scale. Organizations with strong governance see 40-60% fewer data quality issues and reduce compliance costs by 30-50%."
        prerequisites={[
          {
            title: "Data Strategy & Assessment",
            description: "Understanding your maturity and having a strategic roadmap helps prioritize governance initiatives",
            path: "/data-strategy"
          }
        ]}
        nextSteps={[
          {
            title: "Master Data Management",
            description: "With governance in place, create your single source of truth through MDM",
            path: "/master-data-management"
          },
          {
            title: "Data Transformation",
            description: "Modernize your data architecture with quality controls and governance built-in",
            path: "/data-transformation"
          }
        ]}
        enablesWhatNext="Strong governance is the foundation that enables MDM success, transformation initiatives, and AI/ML adoption. Without it, these efforts struggle with data quality and trust issues."
      />

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eight key service areas to establish comprehensive data governance across your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading governance platforms to deliver best-in-class solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five-phase methodology to implement data governance successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {approach.map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
                {index < approach.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Capabilities */}
      <RelatedLinks
        title="Related Capabilities"
        links={[
          {
            title: 'Master Data Management',
            description: 'Explore our comprehensive 6-phase MDM methodology with GenAI-powered capabilities',
            path: '/master-data-management'
          },
          {
            title: 'Data Strategy & Assessment',
            description: '450+ criteria maturity assessment covering governance, quality, and compliance',
            path: '/data-strategy'
          },
          {
            title: 'Data Transformation',
            description: '5 Pillars framework including quality, process, and integration excellence',
            path: '/data-transformation'
          }
        ]}
      />
    </div>
  );
};

export default DataGovernance;
