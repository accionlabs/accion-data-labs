import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Database,
  CheckCircle2,
  ArrowRight,
  Layers,
  Brain,
  GitBranch
} from 'lucide-react';

const AWS: React.FC = () => {
  const credentials = [
    { number: '60+', label: 'AWS Certified Professionals' },
    { number: '35+', label: 'Data Lake Implementations' },
    { number: '30+', label: 'Redshift Deployments' },
    { number: '20+', label: 'SageMaker Projects' }
  ];

  const awsServices = [
    {
      icon: Database,
      title: 'Amazon Redshift',
      description: 'Cloud data warehouse for analytics workloads with petabyte-scale data processing.',
      features: [
        'Columnar storage',
        'Massively parallel processing',
        'Redshift Spectrum for data lake queries',
        'ML integration with Redshift ML',
        'Automatic workload management'
      ]
    },
    {
      icon: Layers,
      title: 'AWS Lake Formation',
      description: 'Build, secure, and manage data lakes in days instead of months.',
      features: [
        'Centralized data catalog',
        'Fine-grained access control',
        'Data sharing across accounts',
        'Built-in data quality',
        'Governed tables'
      ]
    },
    {
      icon: GitBranch,
      title: 'AWS Glue',
      description: 'Serverless data integration service for ETL, data preparation, and cataloging.',
      features: [
        'Visual ETL designer',
        'Serverless Spark execution',
        'Data catalog and crawlers',
        'Data quality rules',
        'Job scheduling and orchestration'
      ]
    },
    {
      icon: Brain,
      title: 'Amazon SageMaker',
      description: 'Fully managed service to build, train, and deploy machine learning models.',
      features: [
        'SageMaker Studio IDE',
        'Automated model training',
        'Model registry and deployment',
        'MLOps pipelines',
        'Feature store'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Data Lake Foundation',
      description: 'Build a scalable, secure data lake on S3 with Lake Formation governance.',
      capabilities: ['S3 Data Lake', 'Lake Formation', 'Glue Catalog', 'Athena']
    },
    {
      title: 'Modern Data Warehouse',
      description: 'Implement high-performance analytics with Amazon Redshift.',
      capabilities: ['Redshift', 'Redshift Spectrum', 'QuickSight', 'Data Sharing']
    },
    {
      title: 'Real-time Analytics',
      description: 'Stream processing and real-time analytics with Kinesis and MSK.',
      capabilities: ['Kinesis Data Streams', 'Kinesis Firehose', 'Amazon MSK', 'Flink']
    },
    {
      title: 'ML Platform',
      description: 'End-to-end machine learning platform with SageMaker.',
      capabilities: ['SageMaker Studio', 'Feature Store', 'Model Registry', 'Pipelines']
    }
  ];

  const architectureComponents = [
    { name: 'Ingestion', services: ['Kinesis', 'DMS', 'AppFlow', 'Transfer Family'], color: 'orange' },
    { name: 'Storage', services: ['S3', 'Redshift', 'RDS', 'DynamoDB'], color: 'green' },
    { name: 'Processing', services: ['Glue', 'EMR', 'Lambda', 'Step Functions'], color: 'blue' },
    { name: 'Analytics', services: ['Athena', 'QuickSight', 'OpenSearch', 'SageMaker'], color: 'purple' }
  ];

  const methodology = [
    {
      phase: 'Assess',
      description: 'Evaluate current state and define AWS data strategy',
      activities: ['Workload assessment', 'AWS readiness review', 'Cost modeling', 'Migration planning']
    },
    {
      phase: 'Mobilize',
      description: 'Set up foundation and prepare for migration',
      activities: ['Landing zone setup', 'Security baseline', 'Network architecture', 'Team enablement']
    },
    {
      phase: 'Migrate & Modernize',
      description: 'Execute migration and implement modern architectures',
      activities: ['Data migration', 'Pipeline development', 'Application refactoring', 'Testing']
    },
    {
      phase: 'Optimize',
      description: 'Continuous improvement and cost optimization',
      activities: ['Performance tuning', 'Cost optimization', 'Operations automation', 'Innovation']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Amazon Web Services Data Platform"
        description="Premier partnership delivering scalable data solutions with AWS data and analytics services"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AWS Expertise</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Extensive experience building data solutions on AWS with certified architects and engineers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-orange-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AWS Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AWS Data Services Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep capabilities across the AWS data and analytics portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awsServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-600 rounded-lg p-3 mr-4">
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
                      <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AWS Data Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern data architecture leveraging AWS best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {architectureComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{component.name}</h3>
                <div className="space-y-2">
                  {component.services.map((service, idx) => (
                    <div key={idx} className="bg-orange-100 text-orange-800 px-3 py-2 rounded text-center text-sm font-medium">
                      {service}
                    </div>
                  ))}
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
              Accelerators and solutions for common AWS data patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
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
              Aligned with AWS Cloud Adoption Framework and Well-Architected principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white h-full">
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-orange-100 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-orange-100 flex items-start">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build on AWS?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Partner with our AWS certified experts to build your modern data platform
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Start Your AWS Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AWS;
