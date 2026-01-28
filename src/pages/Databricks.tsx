import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Database,
  Award,
  Building2,
  Sparkles,
  Layers,
  GitBranch,
  Workflow,
  Radio,
  Brain,
  ArrowRight,
  CheckCircle2,
  Cloud
} from 'lucide-react';

const Databricks: React.FC = () => {
  const credentials = [
    { number: '65', label: 'Technical Trained', color: 'bg-gray-800' },
    { number: '15', label: 'Technical Certified', color: 'bg-blue-600' },
    { number: '20', label: 'Clients', color: 'bg-cyan-600' },
    { number: '30', label: 'Lakehouses Built', color: 'bg-teal-600' },
    { number: '5', label: 'Gen AI Solutions', color: 'bg-orange-500' }
  ];

  const certifications = [
    'Databricks Fundamentals',
    'Lakehouse Fundamentals',
    'Platform Architect - AWS',
    'Platform Architect - Azure',
    'Spark Developer Associate',
    'Data Engineer Associate',
    'Data Analyst Associate'
  ];

  const engagementModels = [
    {
      title: 'Greenfield Data Platform',
      subtitle: 'Build and Sustenance',
      icon: Building2,
      items: [
        'Build a data platform from scratch',
        'Gather and understand requirements',
        'Build a roadmap',
        'Iterative build of layered data platform',
        'Enable data quality and governance'
      ]
    },
    {
      title: 'Data Lake/DW Modernization',
      subtitle: 'and Sustenance',
      icon: Database,
      items: [
        'Understand current and upcoming needs',
        'Perform fit-gap analysis with existing ecosystem',
        'Prioritize and build a roadmap',
        'Accelerated build using accelerators',
        'Downstream compatibility enabled iterations'
      ]
    },
    {
      title: 'Advanced Analytics',
      subtitle: 'Solution Build and Sustenance',
      icon: Brain,
      items: [
        'Curate and build datasets for applications',
        'Build analytics and ML models',
        'Build applications or integrate datasets',
        'Integrate back into the data platform',
        'Perform sustenance of applications'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Unity Catalog',
      icon: Layers,
      description: 'Fine-grained governance for data and AI',
      features: [
        'Cross-workspace catalog management',
        'Delegation of management (admin isolation)',
        'Storage isolation at catalog level',
        'Workspace to catalog binding',
        'UC access control with agreed rules'
      ]
    },
    {
      title: 'Databricks Workflows',
      icon: Workflow,
      description: 'Orchestrate any task across any platform',
      features: [
        'Delta Live Tables orchestration',
        'Auto Loader for incremental ingestion',
        'Support for Spark, Python, Java, SQL',
        'MLflow integration',
        'Cross-platform: Azure, AWS, GCP'
      ]
    },
    {
      title: 'Structured Streaming',
      icon: Radio,
      description: 'Real-time data processing at scale',
      features: [
        'Streaming ingestion and ETL',
        'Event processing and ML inference',
        'Live dashboards and alerts',
        'Fraud prevention use cases',
        'Dynamic pricing and ads'
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'End-to-end ML lifecycle management',
      features: [
        'Model building with TensorFlow, PyTorch, XGBoost',
        'MLflow for tracking and registry',
        'Automation and governance',
        'Runtime and library management',
        'Integration with Spark and Horovod'
      ]
    }
  ];

  const methodology = [
    { phase: '1', title: 'Discovery', description: 'Migration specific discovery and consultation' },
    { phase: '2', title: 'Assessment', description: 'Assessment, design, tooling, accelerators, sizing' },
    { phase: '3', title: 'Strategy', description: 'Technology mapping, migration workshop, planning' },
    { phase: '4', title: 'Production Pilot', description: 'Reference implementation, overall migration plan' },
    { phase: '5', title: 'Execution', description: 'Migration execution and support' }
  ];

  const caseStudies = [
    {
      industry: 'Financial Advisory',
      company: 'AlixPartners',
      solution: 'Delinquency ML Model, Gen-AI using Mosaic, Data Consolidation',
      technologies: ['Databricks Lakehouse', 'Mosaic', 'ML Models', 'SAP', 'ServiceNow', 'Salesforce']
    },
    {
      industry: 'Banking',
      company: 'Choice Bank',
      solution: 'Warehouse Migration and Modernization',
      technologies: ['Databricks Lakehouse', 'Unity Catalog', 'AWS Redshift', 'BigQuery', 'Looker', 'Power BI']
    },
    {
      industry: 'Manufacturing',
      company: 'Atlas Copco',
      solution: 'SAP HANA to Databricks Migration',
      technologies: ['Databricks Lakehouse', 'Workflows', 'Delta Tables', 'Power BI', 'SAP HANA']
    },
    {
      industry: 'Healthcare',
      company: 'Ingenovis Health',
      solution: 'Candidate Prioritization, Profile Matching, Natural Query',
      technologies: ['Databricks Lakehouse', 'Unity Catalog', 'Azure OpenAI', 'Bullhorn ATS', 'Redis']
    },
    {
      industry: 'Publishing',
      company: 'SAGE Publishing',
      solution: 'Business Warehouse with Self-service Reporting',
      technologies: ['Databricks Delta Live Tables', 'Lakehouse', 'SQL Server', 'Power BI', 'Marketo']
    },
    {
      industry: 'Telecom',
      company: 'Red Castle',
      solution: 'Bills generation, Complex Events Processing (Streaming)',
      technologies: ['Databricks Lakehouse', 'Spark Streaming CEP', 'Databricks as ODS']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Select Consulting Partner"
        title="Databricks Capabilities"
        description="Building modern lakehouses with unified analytics, data engineering, and AI on the Databricks platform"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Databricks Select Consulting Partner
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Databricks Credentials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified expertise across the Databricks platform with proven delivery track record
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${cred.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl font-bold text-white">{cred.number}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{cred.label}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Team Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-700 border border-gray-200">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work with Databricks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models tailored to your data platform needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <model.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{model.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{model.subtitle}</p>
                <ul className="space-y-2">
                  {model.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lakehouse Architecture */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lakehouse Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern data engineering with the medallion architecture
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-amber-600 bg-opacity-20 border border-amber-500 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Bronze Zone</h3>
                <p className="text-sm text-gray-300">Raw data ingestion with continuous or scheduled ingest</p>
              </div>
              <div className="bg-gray-400 bg-opacity-20 border border-gray-400 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-300 mb-2">Silver Zone</h3>
                <p className="text-sm text-gray-300">Data transformation, quality checks, and cleansing</p>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Gold Zone</h3>
                <p className="text-sm text-gray-300">Business-level aggregates and curated datasets</p>
              </div>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-500 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Consumption</h3>
                <p className="text-sm text-gray-300">Analytics, ML, business insights, operational apps</p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center"><Database className="w-4 h-4 mr-1" /> Delta Lake</span>
              <span>|</span>
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1" /> Apache Spark</span>
              <span>|</span>
              <span className="flex items-center"><GitBranch className="w-4 h-4 mr-1" /> End-to-end Lineage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Capabilities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the Databricks platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <cap.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {cap.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Methodology */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modernization Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven 5-phase approach to Databricks migration and modernization
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between">
            {methodology.map((phase, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {phase.phase}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600 px-4">{phase.description}</p>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-2 pt-8">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving business outcomes with Databricks across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                  <span className="text-xs font-semibold text-red-200">{study.industry}</span>
                  <h3 className="text-lg font-bold text-white">{study.company}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-700 mb-4">{study.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        +{study.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Platforms */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy Databricks on your preferred cloud platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-600">Azure Databricks with native integration to Azure services</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <Cloud className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Web Services</h3>
              <p className="text-sm text-gray-600">Databricks on AWS with S3, Redshift, and more</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Cloud</h3>
              <p className="text-sm text-gray-600">Databricks on GCP with BigQuery and Looker integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Lakehouse?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let our certified Databricks experts help you modernize your data platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/platforms"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View All Partnerships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Databricks;
