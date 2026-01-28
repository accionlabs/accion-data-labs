import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Users,
  Shield,
  Code
} from 'lucide-react';

const Tableau: React.FC = () => {
  const credentials = [
    { number: '45+', label: 'Tableau Certified Professionals' },
    { number: '100+', label: 'Dashboard Implementations' },
    { number: '50+', label: 'Enterprise Deployments' },
    { number: '30+', label: 'Embedded Analytics Projects' }
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive visualizations that tell compelling data stories.',
      features: [
        'Drag-and-drop interface',
        'Rich visualization library',
        'Interactive filtering',
        'Custom calculations',
        'Dashboard actions'
      ]
    },
    {
      icon: Users,
      title: 'Self-Service Analytics',
      description: 'Empower business users to explore data and find insights independently.',
      features: [
        'Ask Data natural language',
        'Explain Data AI insights',
        'Data source connections',
        'Web authoring',
        'Data prep flows'
      ]
    },
    {
      icon: Code,
      title: 'Embedded Analytics',
      description: 'Integrate Tableau visualizations into your applications and portals.',
      features: [
        'JavaScript API',
        'Embedded dashboards',
        'Single sign-on',
        'Connected apps',
        'Custom styling'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Governance',
      description: 'Manage and govern analytics at enterprise scale with security and compliance.',
      features: [
        'Row-level security',
        'Content certification',
        'Data management add-on',
        'Catalog and lineage',
        'Usage analytics'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Enterprise BI Platform',
      description: 'Full Tableau Server/Cloud implementation with governance and best practices.',
      capabilities: ['Tableau Server/Cloud', 'Site Architecture', 'Security Model', 'Governance Framework']
    },
    {
      title: 'Executive Dashboards',
      description: 'C-suite analytics with KPIs, metrics, and strategic insights.',
      capabilities: ['KPI Dashboards', 'Mobile Optimization', 'Alert Notifications', 'Executive Views']
    },
    {
      title: 'Self-Service Enablement',
      description: 'Training and enablement to build a data-driven culture.',
      capabilities: ['User Training', 'Best Practices', 'Center of Excellence', 'Adoption Program']
    },
    {
      title: 'Embedded Analytics',
      description: 'Integrate Tableau into your products and customer-facing applications.',
      capabilities: ['API Integration', 'Custom Portals', 'White-labeling', 'Multi-tenancy']
    }
  ];

  const bestPractices = [
    {
      title: 'Visual Best Practices',
      items: ['Choose right chart types', 'Effective use of color', 'Dashboard layout design', 'Mobile-first approach']
    },
    {
      title: 'Performance Optimization',
      items: ['Extract optimization', 'Query efficiency', 'Dashboard load time', 'Data source design']
    },
    {
      title: 'Governance Standards',
      items: ['Naming conventions', 'Folder structure', 'Certification process', 'Documentation standards']
    },
    {
      title: 'Development Standards',
      items: ['Calculation best practices', 'Parameter usage', 'Set actions', 'LOD expressions']
    }
  ];

  const methodology = [
    {
      phase: 'Discover',
      description: 'Understand business requirements and current analytics landscape',
      activities: ['Stakeholder interviews', 'Requirements gathering', 'Current state assessment', 'Use case definition']
    },
    {
      phase: 'Design',
      description: 'Architect the Tableau solution and design visualizations',
      activities: ['Architecture design', 'Data modeling', 'Dashboard wireframes', 'Security design']
    },
    {
      phase: 'Develop',
      description: 'Build dashboards and implement the platform',
      activities: ['Dashboard development', 'Data connections', 'Testing and QA', 'Performance tuning']
    },
    {
      phase: 'Deploy & Enable',
      description: 'Roll out to users and drive adoption',
      activities: ['Deployment', 'User training', 'Documentation', 'Adoption support']
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Partnership Deep Dive"
        title="Tableau Visual Analytics"
        description="Premier partnership delivering world-class business intelligence and visual analytics solutions"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Tableau Expertise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Deep expertise in Tableau with certified professionals delivering enterprise analytics solutions
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

      {/* Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tableau Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the Tableau platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
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

      {/* Best Practices */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tableau Best Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading standards for Tableau development and governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{practice.title}</h3>
                <ul className="space-y-2">
                  {practice.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Comprehensive Tableau solutions for every analytics need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach for successful Tableau implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-6 text-white h-full">
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
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our Tableau experts help you build a world-class analytics platform
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start Your Tableau Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
