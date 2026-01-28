import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Database,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Layers,
  Brain,
  Server,
  Settings
} from 'lucide-react';

const Cloudera: React.FC = () => {
  const credentials = [
    { number: '35+', label: 'Cloudera Certified Professionals' },
    { number: '20+', label: 'CDP Implementations' },
    { number: '15+', label: 'Hybrid Cloud Deployments' },
    { number: '25+', label: 'Big Data Projects' }
  ];

  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloudera Data Platform',
      description: 'Enterprise data cloud platform for any data, anywhere, with security and governance.',
      features: [
        'Hybrid and multi-cloud',
        'Unified data services',
        'Integrated analytics',
        'Machine learning workbench',
        'Real-time streaming'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build and orchestrate data pipelines at scale with Apache Spark and NiFi.',
      features: [
        'Apache Spark processing',
        'Apache NiFi data flow',
        'Data pipeline orchestration',
        'Schema registry',
        'Data transformation'
      ]
    },
    {
      icon: Layers,
      title: 'Data Warehouse',
      description: 'Enterprise data warehouse with Cloudera Data Warehouse service.',
      features: [
        'Impala and Hive',
        'Auto-scaling compute',
        'Workload isolation',
        'BI tool integration',
        'Cost optimization'
      ]
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'End-to-end ML workflows with Cloudera Machine Learning.',
      features: [
        'Collaborative workbench',
        'Model development',
        'Model deployment',
        'MLOps capabilities',
        'GPU support'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Hybrid Data Platform',
      description: 'Implement CDP across on-premises and cloud environments.',
      capabilities: ['CDP Private Cloud', 'CDP Public Cloud', 'SDX Security', 'Workload Migration']
    },
    {
      title: 'Real-time Data Platform',
      description: 'Build streaming analytics solutions with Kafka and Flink.',
      capabilities: ['Streams Messaging', 'SQL Stream Builder', 'Schema Registry', 'Real-time Analytics']
    },
    {
      title: 'Data Lake Modernization',
      description: 'Modernize Hadoop environments to Cloudera Data Platform.',
      capabilities: ['Assessment', 'Migration Planning', 'Workload Migration', 'Optimization']
    },
    {
      title: 'Enterprise ML Platform',
      description: 'Deploy machine learning at scale with Cloudera ML.',
      capabilities: ['ML Workbench', 'Model Deployment', 'MLOps', 'Applied ML Services']
    }
  ];

  const cdpComponents = [
    { name: 'Data Hub', description: 'Purpose-built clusters for specific workloads', icon: Server },
    { name: 'Data Warehouse', description: 'Self-service analytics with auto-scaling', icon: Database },
    { name: 'Data Engineering', description: 'Orchestrated data pipelines at scale', icon: Settings },
    { name: 'Machine Learning', description: 'ML workspaces and model deployment', icon: Brain },
    { name: 'Data Flow', description: 'No-code data ingestion and transformation', icon: Zap },
    { name: 'Streams Messaging', description: 'Enterprise Kafka for real-time data', icon: Layers }
  ];

  const methodology = [
    {
      phase: 'Assess',
      description: 'Evaluate existing environment and define modernization strategy',
      activities: ['Environment assessment', 'Workload analysis', 'TCO modeling', 'Migration planning']
    },
    {
      phase: 'Architect',
      description: 'Design CDP architecture for hybrid/multi-cloud deployment',
      activities: ['Architecture design', 'Security design', 'Network planning', 'Integration patterns']
    },
    {
      phase: 'Implement',
      description: 'Deploy CDP and migrate workloads',
      activities: ['CDP deployment', 'SDX configuration', 'Workload migration', 'Integration build']
    },
    {
      phase: 'Optimize',
      description: 'Tune performance and operationalize the platform',
      activities: ['Performance tuning', 'Cost optimization', 'Operations setup', 'Team enablement']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Cloudera Data Platform"
        description="Partner expertise delivering hybrid and multi-cloud data solutions with Cloudera"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-indigo-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Cloudera Expertise</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Deep expertise in Cloudera Data Platform with certified professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-indigo-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CDP Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the Cloudera Data Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-indigo-600 rounded-lg p-3 mr-4">
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
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CDP Components */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CDP Data Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated data services powering the Cloudera Data Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cdpComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <component.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.name}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
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
              Accelerators for common Cloudera implementation patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hybrid Cloud */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hybrid & Multi-Cloud</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy CDP anywhere with consistent security and governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-indigo-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CDP Private Cloud</h3>
              <p className="text-gray-600">
                Deploy on-premises or in your data center with full CDP capabilities and SDX security.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-indigo-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CDP Public Cloud</h3>
              <p className="text-gray-600">
                Run on AWS, Azure, or GCP with auto-scaling, pay-as-you-go data services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-indigo-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SDX Security</h3>
              <p className="text-gray-600">
                Consistent security, governance, and lineage across all deployment modes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach for successful Cloudera implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg p-6 text-white h-full">
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-indigo-100 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-indigo-100 flex items-start">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-indigo-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Modernize Your Data Platform?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let our Cloudera experts help you build a hybrid data platform for the enterprise
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Start Your Cloudera Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cloudera;
