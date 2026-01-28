import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import { Cloud, Database, BarChart3, Cpu, Shield, Workflow, Brain, ArrowRight } from 'lucide-react';

const TechnologyStack: React.FC = () => {
  const categories = [
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Cloud-native architectures and infrastructure patterns',
      technologies: [
        'Infrastructure as Code',
        'Kubernetes & Containers',
        'Serverless Computing',
        'Cloud Storage & Data Lakes',
        'Virtual Networks & Security',
        'Multi-cloud Architecture'
      ]
    },
    {
      icon: Database,
      title: 'Big Data & Distributed Systems',
      description: 'Distributed storage and processing frameworks',
      technologies: [
        'Apache Hadoop Ecosystem',
        'Apache Spark',
        'Apache Kafka',
        'Apache Flink',
        'Apache HBase',
        'Apache Cassandra',
        'MongoDB',
        'Elasticsearch'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Visualization',
      description: 'Business intelligence and data visualization approaches',
      technologies: [
        'Self-Service Analytics',
        'Embedded Analytics',
        'Real-time Dashboards',
        'Semantic Layers',
        'OLAP & Cube Design',
        'Data Storytelling',
        'Mobile Analytics',
        'Augmented Analytics'
      ]
    },
    {
      icon: Cpu,
      title: 'Data Warehousing',
      description: 'Modern and traditional data warehousing architectures',
      technologies: [
        'Cloud Data Warehousing',
        'Lakehouse Architecture',
        'Data Vault 2.0',
        'Dimensional Modeling',
        'ELT Patterns',
        'Data Mesh',
        'Real-time Analytics',
        'Query Optimization'
      ]
    },
    {
      icon: Workflow,
      title: 'Data Integration & Orchestration',
      description: 'Data integration patterns and pipeline orchestration',
      technologies: [
        'ETL/ELT Frameworks',
        'Change Data Capture',
        'API Integration',
        'Event-Driven Architecture',
        'Workflow Orchestration',
        'Data Quality Pipelines',
        'Streaming Ingestion',
        'Batch Processing'
      ]
    },
    {
      icon: Shield,
      title: 'Data Governance & Quality',
      description: 'Data governance frameworks and quality management',
      technologies: [
        'Data Cataloging',
        'Metadata Management',
        'Data Lineage',
        'Data Quality Rules',
        'Access Control & Security',
        'Privacy & Compliance',
        'Master Data Management',
        'Reference Data Management'
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'AI/ML frameworks, libraries, and methodologies',
      technologies: [
        'Python & R Ecosystems',
        'TensorFlow & PyTorch',
        'Scikit-learn & XGBoost',
        'MLOps & Model Management',
        'Feature Engineering',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision'
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Technology Expertise"
        title="Technology Categories"
        description="Comprehensive expertise across modern data architectures, frameworks, and methodologies"
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology-Agnostic Approach</h2>
              <p className="text-lg text-gray-700 mb-4">
                We bring deep expertise across technology categories and patterns, enabling us to recommend
                the right solutions based on your specific requirements—not vendor preferences.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our teams are skilled in both modern cloud-native architectures and traditional enterprise
                patterns, ensuring we can work with your existing investments while modernizing for the future.
              </p>
              <Link
                to="/platforms"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                View our platform expertise <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Technology-agnostic recommendations based on your requirements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Best practices and proven patterns from hundreds of implementations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Continuous evaluation of emerging technologies and trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across all layers of the modern data stack
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-50 rounded text-sm text-gray-700">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for Specific Platform Expertise?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We have deep expertise across leading data platforms including AWS, Azure, Snowflake, Databricks, and more.
          </p>
          <Link
            to="/platforms"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Explore Our Platform Expertise <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Related Capabilities */}
      <RelatedLinks
        title="Related Capabilities"
        links={[
          {
            title: 'Data Platforms',
            description: 'Deep expertise in AWS, Azure, Snowflake, Databricks, and more',
            path: '/platforms'
          },
          {
            title: 'Generative AI',
            description: 'AI/ML solutions powered by our KAPS framework',
            path: '/generative-ai'
          },
          {
            title: 'Case Studies',
            description: 'Real-world implementations across industries',
            path: '/case-studies'
          }
        ]}
      />
    </div>
  );
};

export default TechnologyStack;
