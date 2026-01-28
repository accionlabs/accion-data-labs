import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  GitBranch,
  BarChart3
} from 'lucide-react';

const AIMLPlatforms: React.FC = () => {
  const credentials = [
    { number: '50+', label: 'ML Engineers & Data Scientists' },
    { number: '40+', label: 'AI/ML Projects Delivered' },
    { number: '30+', label: 'Models in Production' },
    { number: '15+', label: 'GenAI Implementations' }
  ];

  const platforms = [
    {
      name: 'Amazon SageMaker',
      provider: 'AWS',
      color: 'orange',
      description: 'Fully managed ML service for building, training, and deploying models at scale.',
      features: [
        'SageMaker Studio IDE',
        'Automated model training',
        'Built-in algorithms',
        'Model registry & deployment',
        'MLOps pipelines',
        'Ground Truth labeling'
      ]
    },
    {
      name: 'Azure Machine Learning',
      provider: 'Microsoft',
      color: 'blue',
      description: 'Enterprise ML platform with automated ML and responsible AI capabilities.',
      features: [
        'Azure ML Studio',
        'AutoML capabilities',
        'Responsible AI dashboard',
        'MLOps with Azure DevOps',
        'Managed endpoints',
        'Azure OpenAI integration'
      ]
    },
    {
      name: 'Vertex AI',
      provider: 'Google Cloud',
      color: 'green',
      description: 'Unified ML platform with AutoML and custom model training capabilities.',
      features: [
        'Vertex AI Workbench',
        'AutoML for no-code ML',
        'Model Garden',
        'Generative AI Studio',
        'Feature Store',
        'Model monitoring'
      ]
    },
    {
      name: 'Databricks ML',
      provider: 'Databricks',
      color: 'red',
      description: 'Unified analytics and ML platform built on Apache Spark.',
      features: [
        'MLflow integration',
        'Feature Store',
        'Model serving',
        'AutoML',
        'Collaborative notebooks',
        'Delta Lake for ML'
      ]
    },
    {
      name: 'Snowflake Cortex',
      provider: 'Snowflake',
      color: 'cyan',
      description: 'AI and ML capabilities natively integrated into Snowflake.',
      features: [
        'Cortex AI functions',
        'Snowpark ML',
        'Document AI',
        'LLM functions',
        'Vector search',
        'ML model deployment'
      ]
    }
  ];

  const mlopsCapabilities = [
    {
      icon: GitBranch,
      title: 'Model Development',
      description: 'End-to-end model development lifecycle management',
      items: ['Experiment tracking', 'Version control', 'Collaborative notebooks', 'Feature engineering']
    },
    {
      icon: Cpu,
      title: 'Training & Tuning',
      description: 'Scalable model training and hyperparameter optimization',
      items: ['Distributed training', 'AutoML', 'Hyperparameter tuning', 'GPU/TPU acceleration']
    },
    {
      icon: Zap,
      title: 'Deployment & Serving',
      description: 'Production deployment and real-time inference',
      items: ['Model registry', 'A/B testing', 'Canary deployments', 'Real-time & batch inference']
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Governance',
      description: 'Production monitoring and model governance',
      items: ['Model drift detection', 'Performance monitoring', 'Explainability', 'Bias detection']
    }
  ];

  const genAICapabilities = [
    {
      title: 'Large Language Models',
      description: 'Enterprise LLM deployment and fine-tuning',
      platforms: ['Azure OpenAI', 'Amazon Bedrock', 'Vertex AI', 'Snowflake Cortex']
    },
    {
      title: 'RAG Applications',
      description: 'Retrieval-augmented generation for enterprise knowledge',
      platforms: ['Vector databases', 'Embedding models', 'Knowledge graphs', 'Semantic search']
    },
    {
      title: 'AI Agents',
      description: 'Autonomous AI agents for complex workflows',
      platforms: ['LangChain', 'AutoGPT patterns', 'Tool integration', 'Multi-agent systems']
    },
    {
      title: 'Responsible AI',
      description: 'Safe and ethical AI deployment practices',
      platforms: ['Content filtering', 'Guardrails', 'Bias mitigation', 'Explainability']
    }
  ];

  const solutions = [
    {
      title: 'ML Platform Setup',
      description: 'End-to-end ML platform implementation on your cloud of choice.',
      capabilities: ['Platform selection', 'Architecture design', 'MLOps setup', 'Team enablement']
    },
    {
      title: 'Model Development',
      description: 'Custom ML model development from ideation to production.',
      capabilities: ['Use case assessment', 'Data preparation', 'Model training', 'Deployment']
    },
    {
      title: 'GenAI Solutions',
      description: 'Enterprise generative AI applications and integrations.',
      capabilities: ['LLM selection', 'RAG implementation', 'Fine-tuning', 'Production deployment']
    },
    {
      title: 'MLOps Transformation',
      description: 'Establish MLOps practices for scalable ML operations.',
      capabilities: ['CI/CD for ML', 'Model monitoring', 'Governance', 'Best practices']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; light: string } } = {
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50' },
      red: { bg: 'bg-red-600', text: 'text-red-600', light: 'bg-red-50' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', light: 'bg-cyan-50' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div>
      <PageHeader
        subtitle="Platform Deep Dive"
        title="AI & Machine Learning Platforms"
        description="Deep expertise across enterprise AI/ML platforms for building, deploying, and managing intelligent applications"
      />

      {/* Credentials Section */}
      <div className="py-16 bg-gradient-to-br from-purple-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI/ML Expertise</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Experienced team delivering AI/ML solutions across all major cloud platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.number}</div>
                <div className="text-purple-200">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ML Platform Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep capabilities across leading enterprise ML platforms
            </p>
          </div>

          <div className="space-y-6">
            {platforms.map((platform, index) => {
              const colors = getColorClasses(platform.color);
              return (
                <div key={index} className={`${colors.light} rounded-lg p-6`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-2">
                        <Brain className={`w-6 h-6 ${colors.text} mr-2`} />
                        <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                      </div>
                      <span className={`inline-block px-2 py-1 ${colors.bg} text-white text-xs rounded mb-3`}>
                        {platform.provider}
                      </span>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-700 text-sm">
                            <CheckCircle2 className={`w-4 h-4 ${colors.text} mr-2 flex-shrink-0`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MLOps Capabilities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MLOps Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end ML lifecycle management across all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mlopsCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{capability.description}</p>
                <ul className="space-y-1">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GenAI Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Generative AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise generative AI solutions across platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {genAICapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.platforms.map((platform, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {platform}
                    </span>
                  ))}
                </div>
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
              End-to-end AI/ML solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.capabilities.map((cap, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your AI Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let our AI/ML experts help you build intelligent applications on the platform of your choice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/platforms"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Platforms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLPlatforms;
