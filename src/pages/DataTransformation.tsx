import React from 'react';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import JourneyProgress from '../components/JourneyProgress';
import JourneyContext from '../components/JourneyContext';
import { Database, CheckCircle2, Workflow, Link, BarChart3 } from 'lucide-react';

const DataTransformation: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { gradient: string; text: string } } = {
      blue: { gradient: 'bg-gradient-to-r from-blue-600 to-blue-700', text: 'text-blue-600' },
      green: { gradient: 'bg-gradient-to-r from-green-600 to-green-700', text: 'text-green-600' },
      purple: { gradient: 'bg-gradient-to-r from-purple-600 to-purple-700', text: 'text-purple-600' },
      orange: { gradient: 'bg-gradient-to-r from-orange-600 to-orange-700', text: 'text-orange-600' },
      indigo: { gradient: 'bg-gradient-to-r from-indigo-600 to-indigo-700', text: 'text-indigo-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const pillars = [
    {
      icon: Database,
      title: 'Model',
      description: 'Data Modeling & Architecture',
      details: [
        'Conceptual, logical, and physical data models',
        'Dimensional modeling for analytics',
        'Data vault and data lake architectures',
        'Metadata management and data dictionaries',
        'Enterprise data architecture design'
      ],
      color: 'blue'
    },
    {
      icon: CheckCircle2,
      title: 'Quality',
      description: 'Data Quality Management',
      details: [
        'Data profiling and assessment',
        'Quality rules and validation logic',
        'Cleansing and standardization',
        'Deduplication and matching',
        'Quality monitoring and scorecards'
      ],
      color: 'green'
    },
    {
      icon: Workflow,
      title: 'Process',
      description: 'Data Processing & ETL',
      details: [
        'ETL/ELT pipeline development',
        'Real-time data streaming',
        'Batch processing optimization',
        'Change data capture (CDC)',
        'Data orchestration and scheduling'
      ],
      color: 'purple'
    },
    {
      icon: Link,
      title: 'Integrations',
      description: 'Data Integration',
      details: [
        'API design and development',
        'Microservices integration',
        'Legacy system connectivity',
        'Cloud and on-premise integration',
        'Data mesh and data fabric patterns'
      ],
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Analytics & Insights',
      details: [
        'Descriptive and diagnostic analytics',
        'Predictive and prescriptive models',
        'Self-service BI platforms',
        'Advanced visualization',
        'AI/ML model deployment'
      ],
      color: 'indigo'
    }
  ];

  const benefits = [
    'Reduce data processing time by 60-80%',
    'Improve data quality and accuracy',
    'Enable real-time decision making',
    'Lower total cost of ownership',
    'Accelerate time to insights',
    'Scale data operations efficiently'
  ];

  const journey = [
    {
      phase: 'Assess',
      description: 'Evaluate current state, identify gaps, and define transformation objectives',
      duration: '2-4 weeks'
    },
    {
      phase: 'Design',
      description: 'Architect target state across all five pillars with detailed technical design',
      duration: '4-6 weeks'
    },
    {
      phase: 'Build',
      description: 'Implement solutions using agile methodology with iterative delivery',
      duration: '12-16 weeks'
    },
    {
      phase: 'Deploy',
      description: 'Migrate workloads, validate performance, and cutover to production',
      duration: '4-6 weeks'
    },
    {
      phase: 'Optimize',
      description: 'Monitor performance, tune systems, and continuously improve',
      duration: 'Ongoing'
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="5 Pillars Framework"
        title="Data Transformation"
        description="Comprehensive framework for transforming legacy data environments into modern, cloud-native data platforms"
      />

      <JourneyProgress currentPhase={4} />

      <JourneyContext
        phase={4}
        title="Transform: Modernize Your Data Architecture"
        description="With governance established and master data consolidated, you're ready to transform your data architecture. This phase modernizes legacy systems, implements cloud-native platforms, and creates scalable data pipelines—all built on the foundation of trusted, governed data."
        whyThisMatters="Legacy architectures can't keep pace with modern business needs. Organizations that transform see 60-80% faster time-to-insights, 40-50% lower infrastructure costs, and the ability to scale data operations efficiently. Transformation without prior governance and MDM work often fails—you'd be moving bad data faster."
        prerequisites={[
          {
            title: "Data Governance",
            description: "Governance ensures quality controls and policies are built into new architecture",
            path: "/data-governance"
          },
          {
            title: "Master Data Management",
            description: "MDM provides the trusted master data that feeds transformed systems",
            path: "/master-data-management"
          }
        ]}
        nextSteps={[
          {
            title: "Generative AI & ML",
            description: "Leverage your modern, trusted data platform to deploy AI/ML capabilities at scale",
            path: "/generative-ai"
          }
        ]}
        enablesWhatNext="Modern, scalable data architecture is the platform that AI and advanced analytics need. With transformation complete, you can deploy GenAI solutions that require reliable, performant, and governed data access."
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Data Platform</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our proven 5 Pillars framework guides organizations through complete data platform transformation,
                addressing critical dimensions from architecture to analytics.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This holistic approach ensures sustainable transformation that delivers measurable business value
                while building a foundation for future innovation.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-blue-900 font-semibold mb-2">Proven Results</p>
                <p className="text-blue-800">
                  Organizations following our framework achieve 60-80% reduction in processing time,
                  significant cost savings, and faster time-to-insights.
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

      {/* 5 Pillars */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 5 Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Model • Quality • Process • Integrations • Analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const colorClasses = getColorClasses(pillar.color);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${colorClasses.gradient} p-4`}>
                    <pillar.icon className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-white opacity-90 text-sm">{pillar.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {pillar.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${colorClasses.text} mr-2`}>•</span>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Transformation Journey */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to deliver successful transformation in 6-9 months
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {journey.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-4 border-blue-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{step.phase}</h3>
                    <p className="text-sm text-gray-700 text-center mb-3">{step.description}</p>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
            description: 'Establish quality controls, lineage tracking, and governance framework',
            path: '/data-governance'
          },
          {
            title: 'Master Data Management',
            description: 'Create golden records and establish single source of truth',
            path: '/master-data-management'
          },
          {
            title: 'Data Strategy & Assessment',
            description: 'Build transformation roadmap based on maturity assessment',
            path: '/data-strategy'
          }
        ]}
      />
    </div>
  );
};

export default DataTransformation;
