import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Snowflake as SnowflakeIcon,
  Brain,
  Layers,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Code,
  Search,
  Settings
} from 'lucide-react';

const Snowflake: React.FC = () => {
  const aiEcosystem = [
    {
      title: 'Snowflake Cortex',
      description: 'Managed AI services for SQL analysts and data engineers',
      features: ['Natural Language to SQL', 'Anomaly Detection', 'Schema Extraction', 'Text/Image Embeddings']
    },
    {
      title: 'Snowpark ML',
      description: 'Scalable Python execution with ML frameworks',
      features: ['TensorFlow & PyTorch', 'Feature Engineering', 'Model Training', 'ML Pipelines']
    },
    {
      title: 'Dynamic Tables & Streams',
      description: 'Declarative pipeline orchestration',
      features: ['Real-time Processing', 'Event-driven Pipelines', 'Incremental Updates', 'Auto-refresh']
    },
    {
      title: 'Snowflake Horizon',
      description: 'Unified governance and observability',
      features: ['Data Lineage', 'Access Control', 'Quality Monitoring', 'Compliance']
    }
  ];

  const dataPillars = [
    { letter: 'M', title: 'Model', description: 'Business entities across multiple systems', color: 'bg-blue-600' },
    { letter: 'Q', title: 'Quality', description: 'Data quality in enterprise systems', color: 'bg-blue-700' },
    { letter: 'P', title: 'Process', description: 'Data dictates process flows', color: 'bg-cyan-600' },
    { letter: 'I', title: 'Integrations', description: 'Master data exchange between apps', color: 'bg-cyan-700' },
    { letter: 'A', title: 'Analytics', description: 'Models & analytics from business data', color: 'bg-teal-600' }
  ];

  const capabilities = [
    {
      title: 'AI for Data Engineering',
      icon: Code,
      description: 'Automate complex data engineering processes',
      features: [
        'Automated schema detection with 92% accuracy',
        'Intelligent pipeline creation & transformation',
        'AI-driven feature engineering',
        'Unstructured data processing at scale',
        'Proactive data observability'
      ],
      metrics: ['70% reduction in schema design time', 'Data onboarding: weeks to <48 hours']
    },
    {
      title: 'AI-Enabled Data Quality',
      icon: Shield,
      description: 'Ensure consistent, accurate, and reliable data',
      features: [
        'Native Data Metric Functions (DMFs)',
        'Medallion architecture enforcement',
        'AI-driven anomaly detection',
        'Schema governance and validation',
        'Autonomous monitoring'
      ],
      metrics: ['78% reduction in data defects', '40-60% less manual validation']
    },
    {
      title: 'AI-driven Metadata & Cataloging',
      icon: Search,
      description: 'Streamline metadata management and discovery',
      features: [
        'Horizon and Account Usage Schema',
        'Polaris Catalog for open-source interoperability',
        'Automated PII/PHI detection',
        'Cross-platform governance',
        'Natural language data discovery'
      ],
      metrics: ['40% faster data discovery', '35% storage cost reduction']
    },
    {
      title: 'Developer Productivity',
      icon: Zap,
      description: 'Accelerate development with AI-augmented workflows',
      features: [
        'Natural Language to SQL (NL2SQL)',
        'AI-powered notebooks with auto-complete',
        '100+ prebuilt pipeline templates',
        'Declarative DevOps pipelines',
        'Zero-copy sandboxing'
      ],
      metrics: ['10x faster MVP development', '83% faster incident resolution']
    }
  ];

  const medallionArchitecture = [
    {
      layer: 'Bronze',
      title: 'Raw Data Ingestion',
      description: 'Ingest raw data using EXTRACT_SCHEMA (Cortex) to auto-detect JSON/XML structures',
      color: 'from-amber-600 to-amber-700'
    },
    {
      layer: 'Silver',
      title: 'Transformation Pipelines',
      description: 'Enforce data consistency through declarative SQL and dbt tests for validation',
      color: 'from-gray-400 to-gray-500'
    },
    {
      layer: 'Gold',
      title: 'Consumer-Ready Data',
      description: 'Column-level masking policies and PII redaction using Snowflake Horizon',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const businessOutcomes = [
    { metric: '92%', description: 'Schema detection accuracy' },
    { metric: '78%', description: 'Reduction in data defects' },
    { metric: '99.9%', description: 'Pipeline reliability achieved' },
    { metric: '83%', description: 'Faster incident resolution' },
    { metric: '60%', description: 'Less manual metadata entry' },
    { metric: '35%', description: 'Storage cost reduction' }
  ];

  const useCases = [
    {
      industry: 'Retail',
      outcome: 'Reduced data defects by 78% with medallion architecture',
      technologies: ['Dynamic Tables', 'Cortex', 'Horizon']
    },
    {
      industry: 'Telecom',
      outcome: 'Automated 83% of CRM data transformations',
      technologies: ['Cortex Analyst', 'Snowpark ML', 'dbt']
    },
    {
      industry: 'Healthcare',
      outcome: 'Reduced pipeline incident resolution by 83%',
      technologies: ['Horizon Lineage', 'Data Quality DMFs', 'Alerts']
    },
    {
      industry: 'Oil & Gas',
      outcome: 'Automated 80% of well log QC with 66% efficiency gains',
      technologies: ['Snowpark ML', 'Anomaly Detection', 'Cortex']
    },
    {
      industry: 'Financial Services',
      outcome: 'Cut storage costs by 35% identifying stale datasets',
      technologies: ['Horizon', 'Atlan Integration', 'Usage Analytics']
    },
    {
      industry: 'Travel',
      outcome: 'Achieved 89 commits/week vs 20 on legacy systems',
      technologies: ['Snowflake CLI', 'GitHub Actions', 'Dynamic Tables']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Premier Partner"
        title="Snowflake AI Data Cloud"
        description="Accelerating data management with AI-driven engineering, quality, governance, and developer productivity on Snowflake"
      />

      {/* Business Outcomes */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              <SnowflakeIcon className="w-4 h-4 mr-2" />
              Snowflake Premier Partner
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Business Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable results with AI-powered data management on Snowflake
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {businessOutcomes.map((outcome, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{outcome.metric}</div>
                <p className="text-sm text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Transformation - 5 Pillars */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Transformation Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five pillars impacting business operations across the enterprise
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {dataPillars.map((pillar, index) => (
              <div key={index} className="flex-1 min-w-[180px] max-w-[220px]">
                <div className={`${pillar.color} rounded-t-xl p-4 text-center`}>
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-full text-white font-bold text-lg mb-2">
                    {pillar.letter}
                  </span>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                </div>
                <div className="bg-white rounded-b-xl p-4 shadow-md">
                  <p className="text-sm text-gray-600 text-center">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Snowflake AI Ecosystem */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Snowflake AI Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated AI capabilities throughout the data management process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiEcosystem.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-cyan-100 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-200" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medallion Architecture */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medallion Architecture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multi-layered data quality enforcement from ingestion to consumption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medallionArchitecture.map((layer, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-r ${layer.color} rounded-xl p-6`}>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-75">{layer.layer} Layer</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{layer.title}</h3>
                  <p className="text-sm opacity-90">{layer.description}</p>
                </div>
                {index < medallionArchitecture.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-cyan-400 font-semibold">
              A retail company reduced data defects by 78% after adopting this layered approach
            </p>
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging AI across the data lifecycle for efficiency, quality, and productivity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                      <cap.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                      <p className="text-sm text-cyan-100">{cap.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4">
                    {cap.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {cap.metrics.map((metric, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full">
                          {metric}
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

      {/* Key Tools & Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Platform Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cortex Analyst</h3>
              <p className="text-gray-600 mb-4">
                Converts natural language requests into optimized SQL pipelines with auto-generated Streams and Tasks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>NL2SQL conversion</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>40% efficiency improvement</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Dynamic recommendations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamic Tables</h3>
              <p className="text-gray-600 mb-4">
                Declarative pipeline orchestration with automatic incremental refreshes and dependency management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>50% less orchestration effort</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>40% lower compute costs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Auto-scaling</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Metric Functions</h3>
              <p className="text-gray-600 mb-4">
                Native and custom functions to measure freshness, duplicates, uniqueness, and completeness.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Prebuilt in SNOWFLAKE.CORE</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Scheduled execution</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Alert integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world results across industries with Snowflake AI Data Cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3">
                  <span className="text-sm font-semibold text-white">{useCase.industry}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{useCase.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Multi-Cloud */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Cloud Deployment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy Snowflake on your preferred cloud with consistent governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Web Services</h3>
              <p className="text-sm text-gray-600">Native S3 integration, Redshift migration support</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Cloud className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-600">Azure Blob storage, Power BI integration</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Cloud</h3>
              <p className="text-sm text-gray-600">GCS integration, BigQuery migration</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Data Management?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let our Snowflake experts help you build AI-powered data solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/platforms"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View All Partnerships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snowflake;
