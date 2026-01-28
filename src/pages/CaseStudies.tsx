import React from 'react';
import PageHeader from '../components/PageHeader';
import CaseStudyCard from '../components/CaseStudyCard';
import { CaseStudy } from '../types';

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Enterprise Data Governance Implementation',
      client: 'Fortune 500 Financial Services Company',
      industry: 'Financial Services',
      challenge: 'Client struggled with data silos, inconsistent data quality, and regulatory compliance challenges across multiple business units and geographies.',
      solution: 'Implemented comprehensive data governance framework using Collibra, established data stewardship model, automated data quality monitoring, and deployed data catalog with 15,000+ data assets.',
      outcome: 'Achieved 90% data quality improvement, reduced compliance reporting time by 60%, and enabled self-service data discovery for 5,000+ users.',
      technologies: ['Collibra', 'Informatica', 'Azure', 'Power BI']
    },
    {
      title: 'Cloud Data Platform Modernization',
      client: 'Global Retail Enterprise',
      industry: 'Retail & E-commerce',
      challenge: 'Legacy on-premise data warehouse unable to scale for growing data volumes, slow query performance, and high infrastructure costs limiting analytics capabilities.',
      solution: 'Migrated to Snowflake cloud data platform, redesigned data architecture using modern ELT patterns, implemented real-time data pipelines, and deployed self-service analytics.',
      outcome: 'Reduced query times by 80%, lowered infrastructure costs by 40%, and enabled real-time inventory analytics across 2,000+ stores.',
      technologies: ['Snowflake', 'AWS', 'Fivetran', 'dbt', 'Tableau']
    },
    {
      title: 'AI-Powered Customer Analytics',
      client: 'Leading Telecommunications Provider',
      industry: 'Telecommunications',
      challenge: 'High customer churn rates, limited understanding of customer behavior, and inability to predict customer needs proactively.',
      solution: 'Built AI/ML platform on Databricks, developed churn prediction models, implemented customer segmentation, and created personalized recommendation engine.',
      outcome: 'Reduced customer churn by 25%, increased upsell revenue by 30%, and improved customer satisfaction scores by 15 points.',
      technologies: ['Databricks', 'Azure ML', 'Python', 'Power BI', 'Delta Lake']
    },
    {
      title: 'Real-Time Supply Chain Analytics',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into supply chain operations, delayed decision-making, and inefficient inventory management across global facilities.',
      solution: 'Implemented real-time data streaming platform using Kafka, built analytical data lake on AWS, deployed IoT sensor integration, and created operational dashboards.',
      outcome: 'Achieved real-time supply chain visibility, reduced inventory costs by $50M annually, and improved on-time delivery by 35%.',
      technologies: ['AWS', 'Kafka', 'Spark', 'Redshift', 'QuickSight']
    },
    {
      title: 'Healthcare Data Integration',
      client: 'Major Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple EHR systems, compliance requirements for HIPAA, and need for comprehensive patient 360 view.',
      solution: 'Built unified patient data platform using Azure, implemented MDM for patient master records, deployed data privacy controls, and created clinical analytics dashboards.',
      outcome: 'Unified data for 10M+ patients, achieved HIPAA compliance, reduced duplicate patient records by 95%, and improved care coordination.',
      technologies: ['Azure', 'Microsoft Purview', 'Synapse', 'FHIR', 'Power BI']
    },
    {
      title: 'Data Lake Implementation',
      client: 'Insurance Industry Leader',
      industry: 'Insurance',
      challenge: 'Siloed data across underwriting, claims, and policy administration systems preventing holistic business insights and advanced analytics.',
      solution: 'Designed and implemented enterprise data lake on Google Cloud, migrated 50+ data sources, established data governance, and deployed analytics workbenches.',
      outcome: 'Consolidated 200+ TB of data, reduced reporting time from weeks to hours, and enabled advanced analytics for risk modeling.',
      technologies: ['Google Cloud', 'BigQuery', 'Dataflow', 'Looker', 'Composer']
    }
  ];

  const stats = [
    { value: '100+', label: 'Successful Projects' },
    { value: '50+', label: 'Global Clients' },
    { value: '15+', label: 'Industries' },
    { value: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Success Stories"
        title="Case Studies"
        description="Real-world examples of how we help organizations transform their data capabilities and achieve measurable business outcomes"
      />

      {/* Stats Section */}
      <div className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped organizations across industries achieve their data transformation goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple industries with tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Financial Services',
              'Healthcare',
              'Retail & E-commerce',
              'Manufacturing',
              'Telecommunications',
              'Insurance',
              'Energy & Utilities',
              'Technology',
              'Transportation',
              'Media & Entertainment',
              'Pharmaceuticals',
              'Government'
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 text-center">
                <span className="text-gray-800 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our data capabilities can help you achieve similar results
          </p>
          <a
            href="/accion-data-labs/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
