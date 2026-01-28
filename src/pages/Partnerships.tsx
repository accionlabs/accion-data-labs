import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Cloud, Database, BarChart3, Shield, Star } from 'lucide-react';

const Partnerships: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { gradient: string; text: string } } = {
      blue: { gradient: 'bg-gradient-to-r from-blue-600 to-blue-700', text: 'text-blue-600' },
      cyan: { gradient: 'bg-gradient-to-r from-cyan-600 to-cyan-700', text: 'text-cyan-600' },
      orange: { gradient: 'bg-gradient-to-r from-orange-600 to-orange-700', text: 'text-orange-600' },
      red: { gradient: 'bg-gradient-to-r from-red-600 to-red-700', text: 'text-red-600' },
      green: { gradient: 'bg-gradient-to-r from-green-600 to-green-700', text: 'text-green-600' },
      purple: { gradient: 'bg-gradient-to-r from-purple-600 to-purple-700', text: 'text-purple-600' },
      indigo: { gradient: 'bg-gradient-to-r from-indigo-600 to-indigo-700', text: 'text-indigo-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const partners = [
    {
      name: 'Microsoft',
      tier: 'Premier',
      icon: Cloud,
      description: 'Azure, Power BI, Purview, Synapse Analytics',
      capabilities: [
        'Azure Data Platform Solutions',
        'Power BI Advanced Analytics',
        'Microsoft Purview Governance',
        'Azure Synapse Analytics',
        'Azure Machine Learning'
      ],
      color: 'blue'
    },
    {
      name: 'Snowflake',
      tier: 'Premier',
      icon: Database,
      description: 'Cloud data platform and data warehouse',
      capabilities: [
        'Data Warehouse Modernization',
        'Data Lake Implementation',
        'Data Sharing Solutions',
        'Snowpark for Python',
        'Data Engineering'
      ],
      color: 'cyan'
    },
    {
      name: 'Amazon Web Services (AWS)',
      tier: 'Premier',
      icon: Cloud,
      description: 'Complete cloud data and analytics platform',
      capabilities: [
        'AWS Data Lake Formation',
        'Redshift Data Warehousing',
        'EMR Big Data Processing',
        'SageMaker ML Platform',
        'Glue ETL Services'
      ],
      color: 'orange'
    },
    {
      name: 'Databricks',
      tier: 'Premier',
      icon: Database,
      description: 'Unified analytics platform built on Apache Spark',
      capabilities: [
        'Lakehouse Architecture',
        'Delta Lake Implementation',
        'MLflow Model Management',
        'Real-time Analytics',
        'Collaborative Notebooks'
      ],
      color: 'red'
    },
    {
      name: 'Google Cloud',
      tier: 'Advanced',
      icon: Cloud,
      description: 'Google Cloud Platform data and AI services',
      capabilities: [
        'BigQuery Data Warehouse',
        'Dataflow Stream Processing',
        'Vertex AI Platform',
        'Looker Analytics',
        'Data Catalog'
      ],
      color: 'green'
    },
    {
      name: 'Tableau',
      tier: 'Premier',
      icon: BarChart3,
      description: 'Visual analytics and business intelligence',
      capabilities: [
        'Interactive Dashboards',
        'Self-Service Analytics',
        'Embedded Analytics',
        'Mobile BI',
        'Data Storytelling'
      ],
      color: 'blue'
    },
    {
      name: 'Collibra',
      tier: 'Advanced',
      icon: Shield,
      description: 'Data governance and catalog platform',
      capabilities: [
        'Data Governance',
        'Data Catalog',
        'Data Privacy',
        'Data Quality',
        'Workflow Automation'
      ],
      color: 'purple'
    },
    {
      name: 'Cloudera',
      tier: 'Partner',
      icon: Database,
      description: 'Enterprise data cloud platform',
      capabilities: [
        'Hybrid Cloud Platform',
        'Data Engineering',
        'Data Warehouse',
        'Machine Learning',
        'Operational Database'
      ],
      color: 'indigo'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Certified Expertise',
      description: 'Our teams hold advanced certifications across all major platforms'
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Hundreds of successful implementations across industries'
    },
    {
      icon: Cloud,
      title: 'Best Practices',
      description: 'Access to partner best practices and reference architectures'
    },
    {
      icon: BarChart3,
      title: 'Innovation Access',
      description: 'Early access to new features and beta programs'
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Strategic Alliances"
        title="Technology Partnerships"
        description="Premier partnerships with leading data and cloud platforms to deliver best-in-class solutions"
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Ecosystem</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our strategic partnerships with leading technology vendors enable us to deliver cutting-edge solutions
                and provide our clients with access to the latest innovations in data and analytics.
              </p>
              <p className="text-lg text-gray-700">
                We maintain premier and advanced partnerships with major cloud platforms, data warehouses,
                analytics tools, and governance platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <benefit.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships across cloud, data, analytics, and governance platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
              const colorClasses = getColorClasses(partner.color);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${colorClasses.gradient} p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <partner.icon className="w-8 h-8 text-white mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                          <p className="text-sm text-white opacity-90">{partner.description}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs font-semibold rounded-full">
                        {partner.tier}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {partner.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${colorClasses.text} mr-2`}>•</span>
                          <span className="text-gray-700">{capability}</span>
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

      {/* Partnership Tiers */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Tiers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400">
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premier</h3>
                <p className="text-gray-700">
                  Highest level partnerships with advanced certifications, dedicated support, and co-innovation programs
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-400">
              <div className="text-center">
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
                <p className="text-gray-700">
                  Strong partnerships with certified professionals and proven track record of successful implementations
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-400">
              <div className="text-center">
                <Cloud className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Partner</h3>
                <p className="text-gray-700">
                  Established partnerships with expertise in implementation and support services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
