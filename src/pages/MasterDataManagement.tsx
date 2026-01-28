import React from 'react';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import JourneyProgress from '../components/JourneyProgress';
import JourneyContext from '../components/JourneyContext';
import { Database, CheckCircle2, TrendingUp, Zap, Shield, Users, GitBranch, Workflow } from 'lucide-react';

const MasterDataManagement: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'MDM Diagnostics',
      duration: '3 months',
      activities: [
        'Identify key business functions across value chain',
        'Conduct workshops with business & IT leaders',
        'Understand pain points and impact areas',
        'Prioritize opportunities and create program scope',
        'Establish steering committee and implementation team'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Initiate',
      duration: '6 months',
      activities: [
        'Create domain teams (Sponsors, Champions, Stewards)',
        'Perform As-Is analysis',
        'Define To-Be MDM state',
        'Evaluate technology for target state',
        'Create implementation roadmap'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Define',
      duration: '6 months',
      activities: [
        'Design governance framework and council',
        'Establish domain taxonomy and attributes',
        'Create business glossary and metadata definitions',
        'Define data quality rules',
        'Design MVP of MDM solution'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Implement',
      duration: '6 months',
      activities: [
        'Build domain-specific MDM hubs',
        'Cleanse data and fix quality in source systems',
        'Apply governance to MDM hubs',
        'Integrate with upstream and downstream systems',
        'Implement pilot process improvement project'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Expand',
      duration: '6-12 months',
      activities: [
        'Map MDM definition to existing records',
        'Update business processes system-by-system',
        'Expand to other geographies',
        'Implement additional domains/sub-domains',
        'Take up downstream process changes'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'Continuous Improvement',
      duration: 'Ongoing',
      activities: [
        'Enterprise governance management',
        'Continuous monitoring and quality assurance',
        'Ongoing process optimization',
        'Adaptation to evolving requirements'
      ]
    }
  ];

  const maturityLevels = [
    {
      level: 1,
      title: 'Aware',
      description: 'Multiple masters in source systems, no centralized architecture, manual synchronization',
      characteristics: ['No centralized rules', 'App-based change management', 'Reactive governance']
    },
    {
      level: 2,
      title: 'Reactive',
      description: 'Multiple masters in central repository, admin-managed synchronization',
      characteristics: ['Isolated MDM initiatives', 'No MDM roadmap', 'Siloed governance']
    },
    {
      level: 3,
      title: 'Developing',
      description: 'Centralized MDM hub established with data standards and business rules',
      characteristics: ['Basic MDM roadmap', 'Centralized standards', 'Manual quality checks']
    },
    {
      level: 4,
      title: 'Mature',
      description: 'Enterprise-wide MDM with single master referenced by all applications',
      characteristics: ['Well-established metadata', 'Automated synchronization', 'Centralized data rules']
    },
    {
      level: 5,
      title: 'Optimizing',
      description: 'Real-time automated synchronization with high governance and automatic DQ detection',
      characteristics: ['Source apps don\'t own master data', 'Real-time sync', 'Automatic DQ violation detection']
    }
  ];

  const domains = [
    { icon: Users, name: 'Customer Master', type: 'Operational', description: 'Customer 360-degree view with hierarchy management' },
    { icon: Database, name: 'Product Master', type: 'Collaborative', description: 'Product attributes, SKU management, taxonomy' },
    { icon: TrendingUp, name: 'Supplier Master', type: 'Analytical', description: 'Supplier data with overlap detection' },
    { icon: GitBranch, name: 'Location Master', type: 'Collaborative', description: 'Store, shipping, and facility locations' },
    { icon: CheckCircle2, name: 'Account Master', type: 'Analytical', description: 'Account data consolidation and analytics' }
  ];

  const genAIFeatures = [
    {
      icon: Zap,
      title: 'AI-Driven Ingestion & Unification',
      description: 'Automated data normalization and consolidation from multiple sources'
    },
    {
      icon: Database,
      title: 'Semantic Enrichment',
      description: 'LLM-powered attribute generation and relationship mapping'
    },
    {
      icon: Shield,
      title: 'AI-Powered Data Quality',
      description: 'Automated validation, conflict resolution, and anomaly detection'
    },
    {
      icon: Workflow,
      title: 'Intelligent Matching',
      description: 'ML algorithms for category matching, brand matching, and de-duplication'
    }
  ];

  const caseStudy = {
    client: 'Global Medical Devices Company',
    challenge: '14+ ERPs, 6 CRMs, 5 PLMs with fragmented master data causing significant operational inefficiencies',
    solution: '2-year MDM program for Customer and Product Master across Americas',
    outcome: '50% reduction in inventory management costs',
    scope: 'Product line generating 55% of total revenue'
  };

  return (
    <div>
      <PageHeader
        subtitle="Master Data Management"
        title="Single Source of Truth for Enterprise Data"
        description="Comprehensive MDM solutions with AI-powered automation, proven 6-phase methodology, and 50% cost reduction results"
      />

      <JourneyProgress currentPhase={3} />

      <JourneyContext
        phase={3}
        title="Create Single Truth: Eliminate Data Silos"
        description="With governance foundations in place, you're ready to consolidate and manage your critical master data. MDM creates golden records and establishes the single source of truth that becomes the backbone of all data initiatives."
        whyThisMatters="Data silos cost enterprises an average of $15M annually in inefficiencies, duplicate efforts, and poor decisions. Without MDM, every downstream initiative—from analytics to AI—struggles with inconsistent, conflicting data. MDM solves this once, benefiting everything that follows."
        prerequisites={[
          {
            title: "Data Governance",
            description: "Governance provides the framework, policies, and quality controls that MDM requires",
            path: "/data-governance"
          },
          {
            title: "Data Strategy",
            description: "Strategy identifies which master data domains to prioritize and sequence",
            path: "/data-strategy"
          }
        ]}
        nextSteps={[
          {
            title: "Data Transformation",
            description: "Transform your data architecture leveraging your trusted master data foundation",
            path: "/data-transformation"
          },
          {
            title: "Generative AI & ML",
            description: "Use GenAI to automate MDM processes like matching, enrichment, and quality improvement",
            path: "/generative-ai"
          }
        ]}
        enablesWhatNext="MDM creates the trusted data foundation that transformation and AI initiatives need. With golden records established, you can modernize your architecture and leverage AI with confidence in data quality and consistency."
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Master Data Management?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Organizations struggle with fragmented master data across multiple systems—14+ ERPs, 6 CRMs, 5 PLMs—
                leading to tremendous loss of efficiency, complex reconciliation, and operational inefficiencies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our MDM solutions create a single, authoritative source of truth for critical business entities,
                powered by GenAI for automated definition extraction, intelligent matching, and continuous enrichment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50%</div>
                  <div className="text-sm text-gray-700">Cost Reduction Achieved</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24</div>
                  <div className="text-sm text-gray-700">Months Typical Program</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Challenges Addressed</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multiple Masters Problem across systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Inconsistent data quality and reconciliation overhead</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Operational inefficiency in processes and analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regulatory compliance with inconsistent attributes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6-Phase Methodology */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6-Phase MDM Transformation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven implementation approach from diagnostics to continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{phase.phase}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-blue-600 mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maturity Model */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5-Level MDM Maturity Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Approximately 6 months per maturity level - complete transformation in 24-30 months
            </p>
          </div>

          <div className="space-y-4">
            {maturityLevels.map((level, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {level.level}
                    </div>
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Level {level.level}: {level.title}</h3>
                    <p className="text-gray-700 mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.characteristics.map((char, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                          {char}
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

      {/* Master Data Domains */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Data Domains</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MDM across operational, collaborative, and analytical domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <domain.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{domain.name}</h3>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {domain.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GenAI-Powered MDM */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GenAI-Powered MDM Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage AI agents for automated definition extraction, intelligent matching, and continuous enrichment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {genAIFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">6-Phase GenAI Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Centralized & Enriched</h4>
                <p className="text-blue-100 text-sm">AI-driven ingestion, unification, and attribute generation using LLMs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Visualized & Standardized</h4>
                <p className="text-blue-100 text-sm">Interactive GigaMap, AI-guided link detection, automated taxonomy</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operationalized & Governed</h4>
                <p className="text-blue-100 text-sm">Real-time enrichment, automated content creation, policy enforcement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h3 className="text-2xl font-bold text-white">{caseStudy.client}</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-gray-700 mb-6">{caseStudy.challenge}</p>

                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    Solution
                  </h4>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>
                <div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="text-3xl font-bold text-green-600 mb-2">{caseStudy.outcome}</p>
                    <p className="text-sm text-gray-600">{caseStudy.scope}</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Implementation Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        Customer and Product Master domains
                      </li>
                      <li className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        Consolidated 14+ ERPs, 6 CRMs, 5 PLMs
                      </li>
                      <li className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        Phased rollout across Americas
                      </li>
                      <li className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        Parallel execution with ERP transformation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Capabilities */}
      <RelatedLinks
        title="Related Capabilities"
        links={[
          {
            title: 'Data Governance',
            description: 'Comprehensive governance framework with data catalog, quality, security, and compliance',
            path: '/data-governance'
          },
          {
            title: 'Data Strategy & Assessment',
            description: 'Maturity assessment covering MDM readiness and implementation planning',
            path: '/data-strategy'
          },
          {
            title: 'Generative AI & ML',
            description: 'Explore GenAI capabilities for MDM automation, matching, and enrichment',
            path: '/generative-ai'
          }
        ]}
      />
    </div>
  );
};

export default MasterDataManagement;
