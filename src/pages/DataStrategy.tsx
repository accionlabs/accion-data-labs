import React from 'react';
import PageHeader from '../components/PageHeader';
import JourneyProgress from '../components/JourneyProgress';
import JourneyContext from '../components/JourneyContext';
import { Target, TrendingUp, Lightbulb, Workflow, BarChart3, Users, CheckCircle2, Shield, Database } from 'lucide-react';

const DataStrategy: React.FC = () => {
  const focusAreas = [
    {
      icon: Target,
      title: 'Data Strategy & Roadmap',
      description: 'Define vision, objectives, and execution plan for data-driven transformation',
      capabilities: [
        'Current state assessment',
        'Future state vision and architecture',
        'Gap analysis and prioritization',
        'Multi-year roadmap development',
        'Stakeholder alignment'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Data Monetization',
      description: 'Unlock new revenue streams and business value from data assets',
      capabilities: [
        'Data product development',
        'Pricing and packaging strategies',
        'Market opportunity analysis',
        'Revenue model design',
        'Go-to-market planning'
      ]
    },
    {
      icon: Lightbulb,
      title: 'AI & Analytics Strategy',
      description: 'Leverage advanced analytics and AI for competitive advantage',
      capabilities: [
        'AI use case identification',
        'ML model strategy',
        'Analytics maturity assessment',
        'Self-service analytics enablement',
        'AI governance framework'
      ]
    },
    {
      icon: Workflow,
      title: 'Data Architecture',
      description: 'Design scalable, modern data architectures for the cloud era',
      capabilities: [
        'Data lake and lakehouse design',
        'Modern data warehouse architecture',
        'Data mesh implementation',
        'API and microservices strategy',
        'Real-time data architecture'
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Value Realization',
      description: 'Ensure data initiatives deliver measurable business outcomes',
      capabilities: [
        'KPI definition and tracking',
        'ROI analysis and reporting',
        'Business case development',
        'Value stream mapping',
        'Success metrics dashboard'
      ]
    },
    {
      icon: Users,
      title: 'Data Culture & Organization',
      description: 'Build data-driven culture and organizational capabilities',
      capabilities: [
        'Operating model design',
        'Roles and responsibilities definition',
        'Change management',
        'Training and enablement',
        'Community of practice development'
      ]
    }
  ];

  const benefits = [
    'Accelerate time-to-insight with clear strategic direction',
    'Align data initiatives with business priorities',
    'Optimize technology investments and reduce costs',
    'Enable data-driven decision making at all levels',
    'Build scalable foundation for future growth',
    'Create competitive advantage through data innovation'
  ];

  return (
    <div>
      <PageHeader
        subtitle="Strategic Data Leadership"
        title="Data Strategy & Consulting"
        description="Transform your organization with a comprehensive data strategy that aligns technology investments with business outcomes"
      />

      <JourneyProgress currentPhase={1} />

      <JourneyContext
        phase={1}
        title="Assess: Understand Your Data Maturity"
        description="Every successful data transformation begins with understanding where you are today. Our comprehensive assessment evaluates your organization across 450+ criteria to create a baseline and strategic roadmap."
        whyThisMatters="Without a clear understanding of your current state, data investments become scattered and reactive. Organizations that skip assessment often spend 40-60% more on initiatives that don't align with actual needs. Our structured approach identifies quick wins while building toward long-term transformation."
        nextSteps={[
          {
            title: "Establish Data Governance",
            description: "Build the foundation of trust, quality, and compliance that enables all future initiatives",
            path: "/data-governance"
          },
          {
            title: "Create Single Source of Truth",
            description: "Implement MDM to consolidate and govern your critical master data entities",
            path: "/master-data-management"
          }
        ]}
        enablesWhatNext="Once you understand your maturity and have a strategic roadmap, you're ready to establish governance foundations and begin creating your single source of truth through Master Data Management."
      />

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Data Strategy Matters</h2>
              <p className="text-lg text-gray-700 mb-4">
                In today's data-driven economy, organizations need more than just technology—they need a clear strategic vision
                that connects data initiatives to business outcomes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our data strategy services help you navigate complexity, prioritize investments, and build a roadmap for
                sustainable competitive advantage through data and analytics.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-blue-900 font-semibold mb-2">Our Approach</p>
                <p className="text-blue-800">
                  We combine industry best practices with deep technical expertise to create pragmatic,
                  actionable strategies that deliver measurable business value.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategy services across six critical dimensions of data leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Capabilities:</p>
                  <ul className="space-y-1">
                    {area.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Maturity Assessment Framework */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Maturity Assessment Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-standard evaluation with 450+ criteria points across 70 categories in 8 core areas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Assessment Scope</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">450+</div>
                  <div className="text-sm text-gray-700">Criteria Points</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">70</div>
                  <div className="text-sm text-gray-700">Data Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">8</div>
                  <div className="text-sm text-gray-700">Core Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">0-5</div>
                  <div className="text-sm text-gray-700">Maturity Scale</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Three Assessment Buckets</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business</h4>
                    <p className="text-sm text-gray-600">Data Quality, Metadata, Analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operations</h4>
                    <p className="text-sm text-gray-600">Data Ops, Security, Governance, Change Management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IT/Engineering</h4>
                    <p className="text-sm text-gray-600">Architecture, Design, Data Pipelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Core Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">8 Core Assessment Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Data Quality & Metadata', categories: 10, criteria: 80, bucket: 'Business' },
                { name: 'Data Analytics', categories: 6, criteria: 50, bucket: 'Business' },
                { name: 'Data Operations', categories: 8, criteria: 40, bucket: 'Operations' },
                { name: 'Data Security', categories: 8, criteria: 50, bucket: 'Operations' },
                { name: 'Data Governance', categories: 4, criteria: 10, bucket: 'Operations' },
                { name: 'Change Management', categories: 5, criteria: 40, bucket: 'Operations' },
                { name: 'Data Architecture & Design', categories: 15, criteria: 100, bucket: 'IT/Engineering' },
                { name: 'Data Pipelines', categories: 14, criteria: 110, bucket: 'IT/Engineering' }
              ].map((area, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{area.name}</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Categories:</span>
                      <span className="font-semibold">{area.categories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Criteria:</span>
                      <span className="font-semibold">~{area.criteria}</span>
                    </div>
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{area.bucket}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Programs */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right assessment depth for your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 p-4 text-center">
                <h3 className="text-xl font-bold text-white">STARTER</h3>
                <p className="text-blue-100 text-sm">Quick Assessment</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">1 Week</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Assessment on ONE bucket (Business OR IT/Eng OR Ops)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-level findings</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Brief recommendations</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-600 font-semibold">Deliverable:</p>
                  <p className="text-sm text-gray-700">Maturity score of one group with key observations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 p-4 text-center">
                <h3 className="text-xl font-bold text-white">STANDARD</h3>
                <p className="text-purple-100 text-sm">Comprehensive View</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">2 Weeks</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Assessment on all areas and functions</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Engagement with key IT leaders</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Overall and individual function scores</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-600 font-semibold">Deliverable:</p>
                  <p className="text-sm text-gray-700">High-level maturity assessment with recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-500">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-center relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-bold text-white">ADVANCED</h3>
                <p className="text-green-100 text-sm">Deep Dive Analysis</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">4 Weeks</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed assessment on all areas</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>20 days of deep-dive engagement</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Business AND IT leader engagement</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Concrete roadmap to target maturity</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-600 font-semibold">Deliverable:</p>
                  <p className="text-sm text-gray-700">Complete maturity score + detailed analysis + short & long-term recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Impact */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expected ROI & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantified cost reductions and efficiency improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h3>
              <p className="text-sm text-gray-700 mb-4">Current state challenges leading to:</p>
              <div className="bg-white rounded p-4">
                <p className="text-3xl font-bold text-red-600 mb-2">70%</p>
                <p className="text-sm text-gray-700">Higher efforts due to data credibility and reconciliation needs</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Operations Impact</h3>
              <p className="text-sm text-gray-700 mb-4">Current inefficiencies resulting in:</p>
              <div className="bg-white rounded p-4 space-y-2">
                <div>
                  <p className="text-2xl font-bold text-yellow-600">50%</p>
                  <p className="text-xs text-gray-700">Higher operations costs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-600">30-40%</p>
                  <p className="text-xs text-gray-700">Higher data management costs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">IT/Engineering Impact</h3>
              <p className="text-sm text-gray-700 mb-4">Fragmented landscape causing:</p>
              <div className="bg-white rounded p-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
                <p className="text-sm text-gray-700">Higher costs due to fragmented data, infrastructure, and tools</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Target State Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold mb-1">Business Value</p>
                <p className="text-sm text-green-100">High trust on data, automated reporting (70% effort reduction), faster decision-making</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold mb-1">Operational Value</p>
                <p className="text-sm text-green-100">50% cost reduction potential, 30-40% savings in data management</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold mb-1">Technical Value</p>
                <p className="text-sm text-green-100">40% cost reduction from unified landscape, scalable modern architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStrategy;
