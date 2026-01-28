import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Database,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Brain,
  Search
} from 'lucide-react';

const GoogleCloud: React.FC = () => {
  const credentials = [
    { number: '40+', label: 'GCP Certified Professionals' },
    { number: '30+', label: 'BigQuery Implementations' },
    { number: '20+', label: 'Dataflow Pipelines' },
    { number: '15+', label: 'Vertex AI Projects' }
  ];

  const gcpServices = [
    {
      icon: Database,
      title: 'BigQuery',
      description: 'Serverless, highly scalable enterprise data warehouse with built-in ML capabilities.',
      features: [
        'Serverless architecture',
        'Real-time analytics',
        'BigQuery ML for in-database ML',
        'BI Engine for fast dashboards',
        'Data sharing with Analytics Hub'
      ]
    },
    {
      icon: Zap,
      title: 'Dataflow',
      description: 'Unified stream and batch data processing with Apache Beam.',
      features: [
        'Unified batch and streaming',
        'Auto-scaling infrastructure',
        'Apache Beam SDK',
        'Real-time processing',
        'Exactly-once processing'
      ]
    },
    {
      icon: Brain,
      title: 'Vertex AI',
      description: 'Unified ML platform for building, deploying, and scaling ML models.',
      features: [
        'AutoML for no-code ML',
        'Custom model training',
        'Feature Store',
        'Model monitoring',
        'Generative AI studio'
      ]
    },
    {
      icon: BarChart3,
      title: 'Looker',
      description: 'Enterprise platform for business intelligence and embedded analytics.',
      features: [
        'LookML semantic layer',
        'Self-service exploration',
        'Embedded analytics',
        'Data applications',
        'Governed metrics'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Analytics Data Warehouse',
      description: 'Modern analytics platform built on BigQuery with Looker for visualization.',
      capabilities: ['BigQuery', 'Looker', 'Data Transfer Service', 'BigQuery ML']
    },
    {
      title: 'Real-time Data Platform',
      description: 'Stream processing and real-time analytics with Pub/Sub and Dataflow.',
      capabilities: ['Pub/Sub', 'Dataflow', 'BigQuery Streaming', 'Cloud Functions']
    },
    {
      title: 'Data Lake Modernization',
      description: 'Build a modern data lake on Cloud Storage with BigQuery integration.',
      capabilities: ['Cloud Storage', 'Dataproc', 'BigQuery External Tables', 'Data Catalog']
    },
    {
      title: 'AI/ML Platform',
      description: 'End-to-end ML operations with Vertex AI and BigQuery ML.',
      capabilities: ['Vertex AI', 'BigQuery ML', 'Feature Store', 'MLOps Pipelines']
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: 'Serverless First',
      description: 'Focus on data, not infrastructure with fully managed services'
    },
    {
      icon: Brain,
      title: 'AI-Native',
      description: 'Built-in AI and ML capabilities across the platform'
    },
    {
      icon: Search,
      title: 'Data Intelligence',
      description: 'Intelligent data discovery and recommendations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Security and compliance built into every service'
    }
  ];

  const methodology = [
    {
      phase: 'Envision',
      description: 'Define vision and success criteria for GCP adoption',
      activities: ['Business case development', 'Use case prioritization', 'Architecture vision', 'Roadmap creation']
    },
    {
      phase: 'Foundation',
      description: 'Establish secure and scalable GCP foundation',
      activities: ['Project structure', 'IAM and security', 'Networking setup', 'Governance framework']
    },
    {
      phase: 'Implement',
      description: 'Build data solutions with agile delivery',
      activities: ['Data pipeline development', 'Analytics implementation', 'ML model deployment', 'Integration']
    },
    {
      phase: 'Scale',
      description: 'Optimize and scale for enterprise adoption',
      activities: ['Performance optimization', 'Cost management', 'Team enablement', 'Innovation programs']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Google Cloud Data Platform"
        description="Advanced partnership delivering analytics and AI solutions with BigQuery, Vertex AI, and Looker"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Google Cloud Expertise</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Deep expertise in Google Cloud data and analytics services with certified professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-green-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GCP Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GCP Data Services Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities across Google Cloud data and AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gcpServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Google Cloud for Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key differentiators that make Google Cloud ideal for modern data platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <diff.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{diff.title}</h3>
                <p className="text-gray-600 text-sm">{diff.description}</p>
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
              Pre-built solutions leveraging Google Cloud best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
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
              Proven approach for successful Google Cloud data platform implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white h-full">
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-green-100 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-green-100 flex items-start">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Innovate with Google Cloud?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our certified experts help you build a modern data platform on Google Cloud
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
          >
            Start Your GCP Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoogleCloud;
