import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Database,
  Shield,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Brain
} from 'lucide-react';

const Microsoft: React.FC = () => {
  const credentials = [
    { number: '50+', label: 'Azure Certified Professionals' },
    { number: '40+', label: 'Power BI Implementations' },
    { number: '25+', label: 'Synapse Deployments' },
    { number: '15+', label: 'Purview Implementations' }
  ];

  const azureServices = [
    {
      icon: Database,
      title: 'Azure Synapse Analytics',
      description: 'Unified analytics service combining data integration, enterprise data warehousing, and big data analytics.',
      features: [
        'Serverless and dedicated SQL pools',
        'Apache Spark integration',
        'Data integration pipelines',
        'Power BI integration',
        'Machine learning capabilities'
      ]
    },
    {
      icon: BarChart3,
      title: 'Power BI',
      description: 'Business analytics service providing interactive visualizations and business intelligence capabilities.',
      features: [
        'Interactive dashboards',
        'Self-service analytics',
        'Enterprise reporting',
        'Embedded analytics',
        'AI-powered insights'
      ]
    },
    {
      icon: Shield,
      title: 'Microsoft Purview',
      description: 'Unified data governance solution for managing and governing on-premises, multi-cloud, and SaaS data.',
      features: [
        'Automated data discovery',
        'Data cataloging',
        'Data lineage tracking',
        'Sensitivity labeling',
        'Access policies'
      ]
    },
    {
      icon: Brain,
      title: 'Azure Machine Learning',
      description: 'Enterprise-grade machine learning service for building and deploying models faster.',
      features: [
        'Automated ML',
        'MLOps capabilities',
        'Responsible AI tools',
        'Model management',
        'Real-time inference'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Modern Data Platform',
      description: 'End-to-end Azure data platform implementation with Synapse, Data Lake, and Power BI.',
      capabilities: ['Data Lake Storage Gen2', 'Synapse Analytics', 'Power BI Premium', 'Azure Data Factory']
    },
    {
      title: 'Enterprise BI & Analytics',
      description: 'Comprehensive Power BI implementation with enterprise-scale architecture and governance.',
      capabilities: ['Power BI Premium', 'Paginated Reports', 'Dataflows', 'Deployment Pipelines']
    },
    {
      title: 'Data Governance & Compliance',
      description: 'Microsoft Purview implementation for unified data governance across your data estate.',
      capabilities: ['Data Catalog', 'Data Map', 'Data Lineage', 'Access Policies']
    },
    {
      title: 'Cloud Migration',
      description: 'Migrate on-premises data workloads to Azure with minimal disruption.',
      capabilities: ['Assessment', 'Migration Planning', 'Data Migration', 'Optimization']
    }
  ];

  const methodology = [
    {
      phase: 'Discover',
      description: 'Assess current environment and define Azure adoption strategy',
      activities: ['Current state assessment', 'Requirements gathering', 'Azure readiness evaluation', 'ROI analysis']
    },
    {
      phase: 'Design',
      description: 'Architect the Azure solution aligned with best practices',
      activities: ['Solution architecture', 'Security design', 'Governance framework', 'Migration planning']
    },
    {
      phase: 'Build',
      description: 'Implement the Azure solution with iterative development',
      activities: ['Infrastructure setup', 'Data pipeline development', 'Report development', 'Integration']
    },
    {
      phase: 'Operate',
      description: 'Ensure ongoing success with monitoring and optimization',
      activities: ['Performance monitoring', 'Cost optimization', 'Security management', 'Continuous improvement']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Microsoft Azure Data Platform"
        description="Premier partnership delivering enterprise data solutions with Azure Synapse, Power BI, Purview, and Azure ML"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Microsoft Expertise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Deep expertise across the Microsoft data platform with certified professionals and proven implementations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-blue-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Azure Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Azure Data Services Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities across the Microsoft Azure data and analytics ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {azureServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
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
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solution Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-packaged solutions leveraging Microsoft technologies for rapid value delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach aligned with Microsoft Cloud Adoption Framework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white h-full">
                  <div className="text-3xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-blue-100 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-blue-100 flex items-start">
                        <span className="mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform with Microsoft Azure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our certified experts help you build a modern data platform on Azure
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start Your Azure Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Microsoft;
