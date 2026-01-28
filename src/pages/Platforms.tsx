import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Award, Cloud, Database, BarChart3, Shield, Star, ArrowRight, Brain } from 'lucide-react';

const Platforms: React.FC = () => {
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

  const platforms = [
    {
      name: 'Microsoft',
      expertise: 'Expert',
      icon: Cloud,
      description: 'Azure, Power BI, Purview, Synapse Analytics',
      capabilities: [
        'Azure Data Platform Solutions',
        'Power BI Advanced Analytics',
        'Microsoft Purview Governance',
        'Azure Synapse Analytics',
        'Azure Machine Learning'
      ],
      color: 'blue',
      deepDiveLink: '/platforms/microsoft',
      relatedCategories: ['Cloud & Infrastructure', 'Analytics & Visualization', 'Data Governance & Quality']
    },
    {
      name: 'Snowflake',
      expertise: 'Expert',
      icon: Database,
      description: 'Cloud data platform and data warehouse',
      capabilities: [
        'Data Warehouse Modernization',
        'Data Lake Implementation',
        'Data Sharing Solutions',
        'Snowpark for Python',
        'Data Engineering'
      ],
      color: 'cyan',
      deepDiveLink: '/platforms/snowflake',
      relatedCategories: ['Data Warehousing', 'AI & Machine Learning']
    },
    {
      name: 'Amazon Web Services (AWS)',
      expertise: 'Expert',
      icon: Cloud,
      description: 'Complete cloud data and analytics platform',
      capabilities: [
        'AWS Data Lake Formation',
        'Redshift Data Warehousing',
        'EMR Big Data Processing',
        'SageMaker ML Platform',
        'Glue ETL Services'
      ],
      color: 'orange',
      deepDiveLink: '/platforms/aws',
      relatedCategories: ['Cloud & Infrastructure', 'Data Integration & Orchestration', 'Data Warehousing']
    },
    {
      name: 'Databricks',
      expertise: 'Expert',
      icon: Database,
      description: 'Unified analytics platform built on Apache Spark',
      capabilities: [
        'Lakehouse Architecture',
        'Delta Lake Implementation',
        'MLflow Model Management',
        'Real-time Analytics',
        'Collaborative Notebooks'
      ],
      color: 'red',
      deepDiveLink: '/platforms/databricks',
      relatedCategories: ['Big Data & Distributed Systems', 'Data Warehousing', 'AI & Machine Learning']
    },
    {
      name: 'Google Cloud',
      expertise: 'Advanced',
      icon: Cloud,
      description: 'Google Cloud Platform data and AI services',
      capabilities: [
        'BigQuery Data Warehouse',
        'Dataflow Stream Processing',
        'Vertex AI Platform',
        'Looker Analytics',
        'Data Catalog'
      ],
      color: 'green',
      deepDiveLink: '/platforms/google-cloud',
      relatedCategories: ['Cloud & Infrastructure', 'Data Warehousing', 'AI & Machine Learning']
    },
    {
      name: 'Tableau',
      expertise: 'Expert',
      icon: BarChart3,
      description: 'Visual analytics and business intelligence',
      capabilities: [
        'Interactive Dashboards',
        'Self-Service Analytics',
        'Embedded Analytics',
        'Mobile BI',
        'Data Storytelling'
      ],
      color: 'blue',
      deepDiveLink: '/platforms/tableau',
      relatedCategories: ['Analytics & Visualization']
    },
    {
      name: 'Collibra',
      expertise: 'Advanced',
      icon: Shield,
      description: 'Data governance and catalog platform',
      capabilities: [
        'Data Governance',
        'Data Catalog',
        'Data Privacy',
        'Data Quality',
        'Workflow Automation'
      ],
      color: 'purple',
      deepDiveLink: '/platforms/collibra',
      relatedCategories: ['Data Governance & Quality']
    },
    {
      name: 'Cloudera',
      expertise: 'Proficient',
      icon: Database,
      description: 'Enterprise data cloud platform',
      capabilities: [
        'Hybrid Cloud Platform',
        'Data Engineering',
        'Data Warehouse',
        'Machine Learning',
        'Operational Database'
      ],
      color: 'indigo',
      deepDiveLink: '/platforms/cloudera',
      relatedCategories: ['Big Data & Distributed Systems']
    },
    {
      name: 'AI & Machine Learning',
      expertise: 'Expert',
      icon: Brain,
      description: 'Enterprise AI/ML platforms across all major clouds',
      capabilities: [
        'Amazon SageMaker',
        'Azure Machine Learning',
        'Google Vertex AI',
        'Databricks ML & MLflow',
        'Snowflake Cortex'
      ],
      color: 'purple',
      deepDiveLink: '/platforms/ai-ml',
      relatedCategories: ['AI & Machine Learning']
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
      description: 'Industry best practices and reference architectures'
    },
    {
      icon: BarChart3,
      title: 'Platform Agnostic',
      description: 'We help you choose the right platform for your needs'
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Data Platform Expertise"
        title="Data Platforms"
        description="Deep expertise across leading data and cloud platforms to deliver best-in-class solutions"
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Capabilities</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our deep expertise across leading data platforms enables us to deliver cutting-edge solutions
                tailored to your specific needs and technology preferences.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We bring certified professionals and proven methodologies across major cloud platforms,
                data warehouses, analytics tools, and governance platforms.
              </p>
              <Link
                to="/technology-stack"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                View technology categories <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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

      {/* Platforms Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Platform Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities across cloud, data, analytics, and governance platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => {
              const colorClasses = getColorClasses(platform.color);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${colorClasses.gradient} p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <platform.icon className="w-8 h-8 text-white mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                          <p className="text-sm text-white opacity-90">{platform.description}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs font-semibold rounded-full">
                        {platform.expertise}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2 mb-4">
                      {platform.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${colorClasses.text} mr-2`}>•</span>
                          <span className="text-gray-700">{capability}</span>
                        </li>
                      ))}
                    </ul>
                    {platform.relatedCategories && platform.relatedCategories.length > 0 && (
                      <div className="pt-3 border-t border-gray-100 mb-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Technology Categories</p>
                        <div className="flex flex-wrap gap-1">
                          {platform.relatedCategories.map((category, idx) => (
                            <Link
                              key={idx}
                              to="/technology-stack"
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {platform.deepDiveLink && (
                      <Link
                        to={platform.deepDiveLink}
                        className={`inline-flex items-center ${colorClasses.text} font-semibold hover:underline`}
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expertise Levels */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expertise Levels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400">
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert</h3>
                <p className="text-gray-700">
                  Highest level expertise with advanced certifications, dedicated practice teams, and extensive implementation experience
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-400">
              <div className="text-center">
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
                <p className="text-gray-700">
                  Strong expertise with certified professionals and proven track record of successful implementations
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-400">
              <div className="text-center">
                <Cloud className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proficient</h3>
                <p className="text-gray-700">
                  Solid capabilities with trained professionals and growing implementation experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
