import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Shield, TrendingUp, Users, Workflow, Award, ArrowRight, Brain, Zap, Target, Layers, Rocket, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const capabilities = [
    // Journey Sequence (Phases 1-5)
    {
      icon: TrendingUp,
      title: 'Data Strategy & Assessment',
      description: '450+ criteria maturity assessment across 8 core areas with 30-70% ROI potential.',
      path: '/data-strategy',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Comprehensive governance framework with data catalog, quality, security, and compliance.',
      path: '/data-governance',
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Master Data Management',
      description: 'GenAI-powered MDM with 6-phase methodology achieving 50% cost reduction.',
      path: '/master-data-management',
      color: 'indigo',
      highlight: true
    },
    {
      icon: Workflow,
      title: 'Data Transformation',
      description: '5 Pillars framework: Model, Quality, Process, Integrations, and Analytics.',
      path: '/data-transformation',
      color: 'emerald'
    },
    {
      icon: Brain,
      title: 'Generative AI & ML',
      description: 'KAPS framework with 30-75% efficiency gains and comprehensive AI guardrails.',
      path: '/generative-ai',
      color: 'cyan',
      highlight: true
    },
    // Supporting Capabilities
    {
      icon: Users,
      title: 'Data Practice',
      description: '250+ data professionals specializing in Big Data, Analytics, BI, and Data Strategy.',
      path: '/data-practice',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Technology Stack',
      description: 'Comprehensive ecosystem of 120+ tools and platforms across cloud and on-premise.',
      path: '/technology-stack',
      color: 'teal'
    },
    {
      icon: Award,
      title: 'Partnerships',
      description: 'Strategic partnerships with Microsoft, Snowflake, AWS, Databricks, and more.',
      path: '/partnerships',
      color: 'orange'
    }
  ];

  const stats = [
    { value: '250+', label: 'Data Professionals' },
    { value: '120+', label: 'Technologies' },
    { value: '15+', label: 'Years Experience' },
    { value: '100+', label: 'Successful Projects' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Data Into
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
                Competitive Advantage
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive data services from strategy to implementation.
              Leverage our expertise in governance, analytics, and modern data platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/data-governance"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-gray-200">
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

      {/* Executive Summary - The Enterprise Data Journey */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Enterprise Data Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we guide enterprises through a proven path to data-driven transformation
            </p>
          </div>

          {/* Journey Story */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-gray-900">Every enterprise data transformation begins with a fundamental question:</strong>
                {' '}<em>"Where are we today, and where do we need to be?"</em>
              </p>
              <p className="text-gray-700 mb-6">
                Organizations struggle with data silos, inconsistent quality, regulatory compliance challenges, and
                the inability to leverage data for competitive advantage. The path forward requires a structured approach
                that addresses strategy, governance, transformation, and innovation in a coordinated manner.
              </p>
              <p className="text-gray-700 mb-6">
                <strong className="text-gray-900">Our comprehensive framework</strong> guides enterprises through this journey,
                starting with a detailed maturity assessment across 450+ criteria to understand your current state. From
                there, we establish a robust governance foundation, create a single source of truth through master data
                management, transform your data architecture and processes, and finally leverage AI/ML to unlock new
                capabilities and competitive advantages.
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">The result?</strong> Organizations achieving 30-70% operational efficiency
                improvements, 50%+ cost reductions, and the agility to respond to market changes in real-time. This isn't
                just about technology—it's about transforming how your enterprise creates value from data.
              </p>
            </div>
          </div>

          {/* Journey Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Phase 1</div>
                  <h3 className="text-lg font-bold text-gray-900">Assess</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Understand your current data maturity across 450+ criteria spanning 8 core areas. Identify gaps,
                prioritize opportunities, and build a strategic roadmap.
              </p>
              <Link to="/data-strategy" className="text-sm text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                Data Strategy & Assessment <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Phase 2</div>
                  <h3 className="text-lg font-bold text-gray-900">Establish Foundation</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Build comprehensive governance framework with data catalog, quality controls, security, and compliance.
                Create trust in your data assets.
              </p>
              <Link to="/data-governance" className="text-sm text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                Data Governance <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Phase 3</div>
                  <h3 className="text-lg font-bold text-gray-900">Create Single Truth</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Implement GenAI-powered Master Data Management using our 6-phase methodology. Establish golden records
                and eliminate data silos across the enterprise.
              </p>
              <Link to="/master-data-management" className="text-sm text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center">
                Master Data Management <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Layers className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Phase 4</div>
                  <h3 className="text-lg font-bold text-gray-900">Transform</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Modernize data architecture with our 5 Pillars framework: Model, Quality, Process, Integrations,
                and Analytics. Achieve 60-80% efficiency gains.
              </p>
              <Link to="/data-transformation" className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
                Data Transformation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Continuation Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border-t-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                  <Brain className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">Phase 5</div>
                  <h3 className="text-lg font-bold text-gray-900">Innovate with AI</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Deploy GenAI capabilities using our KAPS framework. Achieve 30-75% efficiency improvements with
                autonomous support, intelligent automation, and AI-powered analytics.
              </p>
              <Link to="/generative-ai" className="text-sm text-cyan-700 font-semibold hover:text-cyan-800 inline-flex items-center">
                Generative AI & ML <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">Enablers</div>
                  <h3 className="text-lg font-bold text-gray-900">Technology & Team</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Leverage 120+ best-in-class technologies and 250+ data professionals with deep expertise in
                cloud platforms, big data, analytics, and AI/ML.
              </p>
              <div className="flex gap-2">
                <Link to="/technology-stack" className="text-sm text-green-700 font-semibold hover:text-green-800 inline-flex items-center">
                  Technology <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/data-practice" className="text-sm text-green-700 font-semibold hover:text-green-800 inline-flex items-center">
                  Team <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border-t-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Proven Results</div>
                  <h3 className="text-lg font-bold text-gray-900">Track Record</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                100+ successful projects across 15+ industries with strategic partnerships from Microsoft,
                Snowflake, AWS, Databricks, and leading technology providers.
              </p>
              <div className="flex gap-2">
                <Link to="/case-studies" className="text-sm text-orange-700 font-semibold hover:text-orange-800 inline-flex items-center">
                  Case Studies <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/partnerships" className="text-sm text-orange-700 font-semibold hover:text-orange-800 inline-flex items-center">
                  Partners <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Data Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end data services designed to help you unlock the full potential of your data assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Link
                key={index}
                to={capability.path}
                className={`bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 ${
                  capability.highlight ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {capability.highlight && (
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center text-sm">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our data capabilities can drive your business forward
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
