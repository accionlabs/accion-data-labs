import React from 'react';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import { Cloud, Database, BarChart3, Cpu, Shield, Workflow } from 'lucide-react';

const TechnologyStack: React.FC = () => {
  const categories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Leading cloud infrastructure and data platforms',
      technologies: [
        { name: 'Amazon Web Services (AWS)', tier: 'Premier' },
        { name: 'Microsoft Azure', tier: 'Premier' },
        { name: 'Google Cloud Platform', tier: 'Advanced' },
        { name: 'Snowflake', tier: 'Premier' },
        { name: 'Databricks', tier: 'Premier' }
      ]
    },
    {
      icon: Database,
      title: 'Big Data & Storage',
      description: 'Distributed storage and processing frameworks',
      technologies: [
        { name: 'Apache Hadoop' },
        { name: 'Apache Spark' },
        { name: 'Apache Kafka' },
        { name: 'Cloudera' },
        { name: 'Hortonworks' },
        { name: 'MapR' },
        { name: 'Apache HBase' },
        { name: 'Apache Cassandra' },
        { name: 'MongoDB' },
        { name: 'Elasticsearch' }
      ]
    },
    {
      icon: BarChart3,
      title: 'BI & Visualization',
      description: 'Business intelligence and data visualization tools',
      technologies: [
        { name: 'Tableau' },
        { name: 'Power BI' },
        { name: 'Qlik Sense' },
        { name: 'Looker' },
        { name: 'ThoughtSpot' },
        { name: 'Sisense' },
        { name: 'MicroStrategy' },
        { name: 'SAP BusinessObjects' }
      ]
    },
    {
      icon: Cpu,
      title: 'Data Warehousing',
      description: 'Modern and traditional data warehousing platforms',
      technologies: [
        { name: 'Snowflake' },
        { name: 'Amazon Redshift' },
        { name: 'Google BigQuery' },
        { name: 'Azure Synapse Analytics' },
        { name: 'Teradata' },
        { name: 'Oracle Exadata' },
        { name: 'Vertica' },
        { name: 'Greenplum' }
      ]
    },
    {
      icon: Workflow,
      title: 'ETL & Integration',
      description: 'Data integration and pipeline orchestration',
      technologies: [
        { name: 'Informatica PowerCenter' },
        { name: 'Talend' },
        { name: 'Apache NiFi' },
        { name: 'Azure Data Factory' },
        { name: 'AWS Glue' },
        { name: 'Google Cloud Dataflow' },
        { name: 'Matillion' },
        { name: 'Fivetran' },
        { name: 'Apache Airflow' }
      ]
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Data governance and quality management',
      technologies: [
        { name: 'Alation' },
        { name: 'Collibra' },
        { name: 'Microsoft Purview' },
        { name: 'Atlan' },
        { name: 'Informatica EDC' },
        { name: 'Ataccama' },
        { name: 'AWS Glue Data Catalog' },
        { name: 'Azure Data Catalog' }
      ]
    }
  ];

  const aiMlTools = [
    { name: 'Python', category: 'Programming' },
    { name: 'R', category: 'Programming' },
    { name: 'TensorFlow', category: 'Deep Learning' },
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'Scikit-learn', category: 'Machine Learning' },
    { name: 'Keras', category: 'Deep Learning' },
    { name: 'SageMaker', category: 'ML Platform' },
    { name: 'Azure ML', category: 'ML Platform' },
    { name: 'Vertex AI', category: 'ML Platform' },
    { name: 'MLflow', category: 'ML Operations' },
    { name: 'Kubeflow', category: 'ML Operations' },
    { name: 'DataRobot', category: 'AutoML' }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Technology Ecosystem"
        title="Comprehensive Technology Stack"
        description="120+ technologies across cloud platforms, big data, analytics, and AI/ML to power your data initiatives"
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Data Technology</h2>
              <p className="text-lg text-gray-700 mb-4">
                We leverage a comprehensive ecosystem of best-in-class technologies spanning cloud platforms,
                big data frameworks, analytics tools, and AI/ML platforms.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our technology expertise covers both modern cloud-native solutions and traditional enterprise
                platforms, ensuring we can meet your specific requirements and constraints.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">120+</div>
                  <div className="text-sm text-gray-700">Technologies</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                  <div className="text-sm text-gray-700">Platform Partners</div>
                </div>
              </div>
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
              Comprehensive coverage across all layers of the modern data stack
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
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
                    <div key={idx} className="px-3 py-2 bg-gray-50 rounded text-sm text-gray-700 flex items-center justify-between">
                      <span>{tech.name}</span>
                      {'tier' in tech && tech.tier && (
                        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                          {tech.tier}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI/ML Tools */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI & Machine Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI/ML platforms and frameworks for intelligent applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiMlTools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="font-semibold text-gray-900 mb-1">{tool.name}</div>
                <div className="text-xs text-gray-600">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Capabilities */}
      <RelatedLinks
        title="See These Technologies in Action"
        links={[
          {
            title: 'Generative AI & ML',
            description: 'AI/ML platforms powering our KAPS framework and GenAI solutions',
            path: '/generative-ai'
          },
          {
            title: 'Data Governance',
            description: 'Governance tools ensuring quality, security, and compliance',
            path: '/data-governance'
          },
          {
            title: 'Case Studies',
            description: 'Real-world implementations across industries and platforms',
            path: '/case-studies'
          }
        ]}
      />
    </div>
  );
};

export default TechnologyStack;
