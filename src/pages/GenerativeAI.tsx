import React from 'react';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import JourneyProgress from '../components/JourneyProgress';
import JourneyContext from '../components/JourneyContext';
import { Brain, Zap, Shield, Code, BarChart3, Workflow, Users, Lock, CheckCircle2, TrendingUp, ExternalLink, Github } from 'lucide-react';

const GenerativeAI: React.FC = () => {
  const solutions = [
    {
      icon: Users,
      title: 'Autonomous Support',
      description: 'AI-driven customer & employee support systems',
      benefits: ['70% reduction in resolution time', '45% fewer tickets', '75% engagement increase']
    },
    {
      icon: Code,
      title: 'Legacy Migration',
      description: 'Automated migration to modern cloud infrastructure',
      benefits: ['AI-powered code analysis', 'Cost reduction', 'Streamlined operations']
    },
    {
      icon: BarChart3,
      title: 'Data Transformation',
      description: 'AI-powered data transformation and analytics automation',
      benefits: ['40% data retrieval reduction', '25% productivity increase', 'Enhanced data quality']
    },
    {
      icon: Zap,
      title: 'Agent as a Service',
      description: 'Enable ISVs to integrate GenAI agents into products',
      benefits: ['White-label AI integration', 'Transform product offerings', 'Embedded capabilities']
    },
    {
      icon: Workflow,
      title: 'SDLC Transformation',
      description: 'AI-powered software development lifecycle tools',
      benefits: ['Code documentation', 'Test generation', 'Cybersecurity scanning']
    }
  ];

  const kapsQuadrants = [
    {
      letter: 'K',
      title: 'Knowledge Agents',
      subtitle: 'Unstructured Content',
      capabilities: [
        'Conversational assistants',
        'Data extraction tools',
        'Document generation',
        'Customer support systems'
      ],
      color: 'blue'
    },
    {
      letter: 'A',
      title: 'Analytics/Gen BI Agents',
      subtitle: 'Structured Data',
      capabilities: [
        'Data exploration tools',
        'Reports and dashboards',
        'Right Answers / DataBots',
        'Self-service analytics'
      ],
      color: 'purple'
    },
    {
      letter: 'P',
      title: 'Process Automation Agents',
      subtitle: 'Cognitive Business Tasks',
      capabilities: [
        'Cognitive process automation',
        'AI-driven process redesign',
        'Data curation & quality',
        'Intelligent RPA'
      ],
      color: 'green'
    },
    {
      letter: 'S',
      title: 'System Agents',
      subtitle: 'Codebase & SDLC',
      capabilities: [
        'Code documentation & migration',
        'Test case generation',
        'Managed services support',
        'Cybersecurity scanning'
      ],
      color: 'orange'
    }
  ];

  const guardrails = [
    {
      stage: 'Input Stage',
      controls: [
        'Input Validation Rails',
        'Encryption & Anonymization',
        'Retrieval Rails'
      ]
    },
    {
      stage: 'Processing Stage',
      controls: [
        'LLM Interaction Rails',
        'Ethical AI (Policy-Driven)',
        'Bias Mitigation Rails',
        'Compliance & Regulations'
      ]
    },
    {
      stage: 'Output Stage',
      controls: [
        'Output Moderation Rails',
        'Integration/Execution Rails',
        'Audit Trails / Transparency'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Driven Clinical Knowledge Mesh',
      industry: 'Biopharma',
      results: ['50% reduction in drug discovery time', '40% cost savings', '30% accuracy improvement']
    },
    {
      title: 'Employee Chatbot for ITSM',
      industry: 'IT Services',
      results: ['70% reduction in resolution time', '45% fewer tickets', '24% productivity improvement']
    },
    {
      title: 'Agentic AI for NLP Queries',
      industry: 'Global Health (WHO)',
      results: ['40% reduction in data retrieval times', '25% productivity increase']
    },
    {
      title: 'GenAI for HR Productivity',
      industry: 'HR & Workforce',
      results: ['60% increase in productivity', '50% fewer IT support tickets']
    }
  ];

  const engagementPhases = [
    {
      phase: 'Phase 1',
      title: 'Strategize & Design',
      duration: '< 1 week ramp',
      type: 'Short-term',
      pricing: 'Fixed fee',
      description: 'Strategy workshops, roadmapping, use case identification'
    },
    {
      phase: 'Phase 2',
      title: 'Define & Prepare',
      duration: '< 1 week ramp',
      type: 'Medium-term',
      pricing: 'Time & Materials',
      description: 'Data preparation, infrastructure setup, model selection'
    },
    {
      phase: 'Phase 3',
      title: 'Build & Test',
      duration: '2-3 weeks ramp',
      type: 'Medium-term',
      pricing: 'Time & Materials',
      description: 'Development, testing, iteration, validation'
    },
    {
      phase: 'Phase 4',
      title: 'Run & Scale',
      duration: '2-4 weeks ramp',
      type: 'Long-term',
      pricing: 'Managed services',
      description: 'Production deployment, monitoring, optimization'
    }
  ];

  return (
    <div>
      <PageHeader
        subtitle="Generative AI & Machine Learning"
        title="AI-Powered Transformation with KAPS Framework"
        description="Comprehensive GenAI solutions delivering 30-75% efficiency improvements with enterprise-grade guardrails"
      />

      <JourneyProgress currentPhase={5} />

      <JourneyContext
        phase={5}
        title="Innovate with AI: Unlock Competitive Advantage"
        description="With trusted data, strong governance, and modern architecture in place, you're ready to leverage AI for transformative business impact. GenAI becomes your competitive differentiator, automating processes, enhancing analytics, and creating entirely new capabilities."
        whyThisMatters="AI built on poor data quality or ungoverned data fails. Organizations that reach Phase 5 with the proper foundation see 30-75% efficiency gains, while those who skip earlier phases see AI initiatives stall or deliver inconsistent results. The journey matters—AI is the reward for doing the foundational work right."
        prerequisites={[
          {
            title: "Data Transformation",
            description: "Modern, scalable architecture provides the platform AI solutions need",
            path: "/data-transformation"
          },
          {
            title: "Data Governance",
            description: "Governance ensures AI operates on trusted, quality data with proper controls",
            path: "/data-governance"
          },
          {
            title: "Master Data Management",
            description: "MDM provides consistent entities and golden records that AI systems rely on",
            path: "/master-data-management"
          }
        ]}
        enablesWhatNext="This is the culmination of your data journey—AI capabilities that create competitive advantage, automate complex processes, and unlock insights that drive business value. With the right foundation, AI becomes sustainable and continuously improving."
      />

      {/* Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise GenAI Solutions</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our comprehensive GenAI platform leverages open-source models (Llama, Mistral, Mixtral) with proprietary
                KAPS orchestration framework to deliver measurable business outcomes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From autonomous support to legacy migration, we provide end-to-end AI transformation with
                enterprise-grade security, compliance, and ethical AI guardrails built-in.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">30-75%</div>
                  <div className="text-sm text-gray-700">Efficiency Improvements</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                  <div className="text-sm text-gray-700">Industry Applications</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our GenAI Platform</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">GenAI platform offered at no extra cost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Open-source models (Llama, Mistral, Mixtral)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rapid deployment (&lt; 1 week ramp-up)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive guardrails and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proven ROI across 10+ industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Core GenAI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</p>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KAPS Framework */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">KAPS Orchestration Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proprietary framework orchestrating Knowledge, Analytics, Process, and System agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {kapsQuadrants.map((quadrant, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-3xl mr-4">
                    {quadrant.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{quadrant.title}</h3>
                    <p className="text-sm text-gray-600">{quadrant.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {quadrant.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Brain className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Central KAPS Orchestration Agent</h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              The orchestration layer coordinates all four agent types (K-A-P-S) for comprehensive AI solutions,
              intelligently routing requests and maintaining context across interactions
            </p>
          </div>
        </div>
      </div>

      {/* Gen AI In A Box */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gen AI In A Box</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete 3-layer stack for on-premise or cloud deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hardware Layer</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  High-performance GPUs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Enterprise servers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Scalable storage
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Security & monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Lenovo/Dell partnerships
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">LLM Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  ML development platforms
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Training frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Kubernetes orchestration
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Open-source models
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Llama, Mistral, Mixtral
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Business Apps</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Conversational assistants
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Generative BI & analytics
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Process automation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Code assist tools
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Business context graph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Guardrails */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive AI Guardrails</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security, compliance, and ethical AI controls at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {guardrails.map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{stage.stage}</h3>
                </div>
                <ul className="space-y-2">
                  {stage.controls.map((control, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Lock className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      {control}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Operational Guardrails</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Disaster recovery and business continuity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance tracking and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete audit trails for transparency</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  AWS Bedrock Guardrails
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Azure AI Content Safety
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  NVIDIA NeMo Guardrails (Open-source)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Custom proprietary solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies & ROI */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world outcomes with quantified business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <h3 className="text-lg font-semibold text-white">{study.title}</h3>
                  <p className="text-blue-100 text-sm">{study.industry}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Model */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Engagement Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four-phase approach from strategy to scaled operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementPhases.map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{phase.phase}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{phase.title}</h3>
                  <p className="text-xs text-gray-600">{phase.duration}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Type:</span>
                    <span className="text-sm font-semibold text-gray-900">{phase.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pricing:</span>
                    <span className="text-sm font-semibold text-gray-900">{phase.pricing}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Source & GitHub Resources */}
      <div className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Github className="w-8 h-8 text-gray-900 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Open Source Platforms</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our GenAI platforms and accelerators on GitHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/accionlabs/accion-ai-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    Accion AI Labs Platform
                  </h3>
                  <p className="text-gray-700">
                    Complete GenAI platform with KAPS framework, agent orchestration, and enterprise guardrails
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-2" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  KAPS Framework
                </span>
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  Multi-Agent Orchestration
                </span>
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  Enterprise Guardrails
                </span>
              </div>
            </a>

            <a
              href="https://github.com/accionlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    Accion Labs GitHub
                  </h3>
                  <p className="text-gray-700">
                    Explore our full collection of data platforms, AI accelerators, and open-source contributions
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-2" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  Data Platforms
                </span>
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  AI/ML Tools
                </span>
                <span className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                  Data Engineering
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Related Capabilities */}
      <RelatedLinks
        title="Related Capabilities"
        links={[
          {
            title: 'Master Data Management',
            description: 'GenAI-powered MDM with automated matching, enrichment, and quality improvement',
            path: '/master-data-management'
          },
          {
            title: 'Technology Stack',
            description: 'Explore AI/ML tools and platforms including TensorFlow, PyTorch, and MLflow',
            path: '/technology-stack'
          },
          {
            title: 'Case Studies',
            description: 'See real-world GenAI implementations with measurable ROI across industries',
            path: '/case-studies'
          }
        ]}
      />
    </div>
  );
};

export default GenerativeAI;
