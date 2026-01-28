import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Database,
  Search,
  Lock
} from 'lucide-react';

const Collibra: React.FC = () => {
  const credentials = [
    { number: '30+', label: 'Collibra Certified Professionals' },
    { number: '25+', label: 'Governance Implementations' },
    { number: '15+', label: 'Data Catalog Deployments' },
    { number: '20+', label: 'Data Quality Projects' }
  ];

  const capabilities = [
    {
      icon: Search,
      title: 'Data Catalog',
      description: 'Enterprise data catalog for discovering, understanding, and trusting your data.',
      features: [
        'Automated data discovery',
        'Business glossary',
        'Technical metadata',
        'Data lineage visualization',
        'Search and browse'
      ]
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Policy-based governance framework for managing data across the enterprise.',
      features: [
        'Policy management',
        'Stewardship workflows',
        'Issue management',
        'Certification workflows',
        'Governance dashboards'
      ]
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'Manage privacy regulations and protect sensitive data across your organization.',
      features: [
        'Privacy impact assessments',
        'Data subject requests',
        'Consent management',
        'Sensitive data discovery',
        'Compliance reporting'
      ]
    },
    {
      icon: Database,
      title: 'Data Quality',
      description: 'Monitor, measure, and improve data quality across your data estate.',
      features: [
        'Quality rules engine',
        'Quality scorecards',
        'Issue tracking',
        'Root cause analysis',
        'Quality dashboards'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Data Governance Program',
      description: 'End-to-end governance program implementation with Collibra as the backbone.',
      capabilities: ['Operating Model', 'Policy Framework', 'Stewardship Program', 'Governance Metrics']
    },
    {
      title: 'Enterprise Data Catalog',
      description: 'Implement a comprehensive data catalog for self-service data discovery.',
      capabilities: ['Data Discovery', 'Business Glossary', 'Data Lineage', 'Metadata Management']
    },
    {
      title: 'Data Quality Management',
      description: 'Establish data quality monitoring and improvement programs.',
      capabilities: ['Quality Rules', 'Quality Monitoring', 'Issue Management', 'Quality Reporting']
    },
    {
      title: 'Privacy & Compliance',
      description: 'Implement privacy controls for GDPR, CCPA, and other regulations.',
      capabilities: ['Privacy Assessments', 'DSR Automation', 'Sensitive Data Management', 'Compliance Dashboards']
    }
  ];

  const governanceFramework = [
    {
      layer: 'Strategy',
      description: 'Define data governance vision, objectives, and success metrics',
      components: ['Vision & Objectives', 'Governance Charter', 'Success Metrics', 'Roadmap']
    },
    {
      layer: 'Organization',
      description: 'Establish roles, responsibilities, and operating model',
      components: ['Data Governance Council', 'Data Stewards', 'Data Owners', 'RACI Matrix']
    },
    {
      layer: 'Process',
      description: 'Define policies, standards, and procedures',
      components: ['Data Policies', 'Data Standards', 'Workflows', 'Issue Resolution']
    },
    {
      layer: 'Technology',
      description: 'Implement Collibra platform and integrations',
      components: ['Collibra Platform', 'Integrations', 'Automation', 'Reporting']
    }
  ];

  const methodology = [
    {
      phase: 'Assess',
      description: 'Evaluate current data governance maturity and define target state',
      activities: ['Maturity assessment', 'Stakeholder interviews', 'Gap analysis', 'Roadmap development']
    },
    {
      phase: 'Design',
      description: 'Design the governance framework and Collibra configuration',
      activities: ['Operating model design', 'Policy framework', 'Collibra architecture', 'Integration design']
    },
    {
      phase: 'Implement',
      description: 'Configure Collibra and roll out governance processes',
      activities: ['Platform configuration', 'Data onboarding', 'Workflow setup', 'Integration build']
    },
    {
      phase: 'Sustain',
      description: 'Drive adoption and continuous improvement',
      activities: ['User training', 'Adoption program', 'Governance monitoring', 'Continuous improvement']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Collibra Data Governance"
        description="Advanced partnership delivering enterprise data governance, catalog, and quality solutions"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-purple-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Collibra Expertise</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Deep expertise in data governance with certified Collibra professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-purple-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collibra Platform Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the Collibra Data Intelligence Cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-600 rounded-lg p-3 mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                    <p className="text-gray-600 mt-1">{capability.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governance Framework */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Governance Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive framework for establishing enterprise data governance
            </p>
          </div>

          <div className="space-y-4">
            {governanceFramework.map((layer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{layer.layer}</h3>
                    </div>
                  </div>
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <p className="text-gray-600">{layer.description}</p>
                  </div>
                  <div className="md:w-5/12">
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solution Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-packaged solutions for rapid governance implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach for successful data governance implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white h-full">
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-purple-100 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-purple-100 flex items-start">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Govern Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let our governance experts help you build a trusted data foundation with Collibra
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
          >
            Start Your Governance Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collibra;
