import React from 'react';
import PageHeader from '../components/PageHeader';
import RelatedLinks from '../components/RelatedLinks';
import { Users, Award, Brain, Shield, TrendingUp, Building2, Globe2 } from 'lucide-react';

interface STAGMember {
  name: string;
  title: string;
  experience: string;
  background: string;
  expertise: string;
  expertiseTags: string[];
  initials: string;
  photoUrl?: string;
  journeyPhases?: string[];
}

const DataPractice: React.FC = () => {
  const stagMembers: STAGMember[] = [
    {
      name: 'Dwarak Sri',
      title: 'Senior Vice President & Global Head AI',
      experience: '26+ years of experience',
      background: 'With over 26 years of international experience across the US, UK and Europe, Dwarak specializes in turning AI into real business outcomes. Currently serves as Senior Vice President & Global Head AI at Accion Labs, leading AI-enabled service development and strategy.',
      expertise: 'Leads high-performing software teams and specializes in AI initiatives across financial services, manufacturing, healthcare, retail, sports, and advertising — consistently translating emerging tech into measurable value.',
      expertiseTags: ['AI Leadership', 'AI Business Outcomes', 'Team Leadership', 'Cross-Industry AI', 'Service Development'],
      initials: 'DS',
      journeyPhases: ['Phase 5: Innovate with AI']
    },
    {
      name: 'Karteek Yadavilli',
      title: 'Vice President of Solutions & Strategy | Field CTO',
      experience: '18+ years of experience',
      background: 'A recognized member of the firm\'s Strategy and Technology Advisory Group (StAG) who plays a cross-functional leadership role in driving Accion\'s evolution from staffing-heavy models to AI-first, solution-oriented enterprise engagement. Has prior experience at the UK\'s National Health Service. Recognized as one of the Top 50 Analytics & Data Consultants in North America.',
      expertise: 'Brings deep expertise in data strategy, managed services, and generative AI. Rapidly prototypes agentic AI solutions to modernize support operations and unlock scale.',
      expertiseTags: ['Data Strategy', 'Generative AI', 'Analytics', 'Managed Services', 'Agentic AI'],
      initials: 'KY',
      journeyPhases: ['Phase 1: Assess', 'Phase 5: Innovate with AI']
    },
    {
      name: 'Mandar Garge',
      title: 'Enterprise Transformation (Business & Technology) Strategy Leader, Advisor',
      experience: '27+ years of experience',
      background: 'A Digital Transformation leader with extensive experience in Enterprise IT and Product Development across multiple geographies and industry domains in various leadership capacities. Holds Master\'s degrees from Boston University (Computer Science) and Oklahoma State University (Mechanical Engineering).',
      expertise: 'Expert in Industry 4.0 roadmaps, Business and Tech transformation strategies and roadmaps, business process optimization, enterprise data, and organizational transformation strategies.',
      expertiseTags: ['Digital Transformation', 'Enterprise Architecture', 'Industry 4.0', 'Data Analytics', 'Business Process Optimization'],
      initials: 'MG',
      photoUrl: 'https://www.accionlabs.com/hubfs/Accion%20HubSpot%202023/Leadership/mandar-Garge_500x500.jpg',
      journeyPhases: ['Phase 1: Assess', 'Phase 4: Transform']
    },
    {
      name: 'Nischal Doshi',
      title: 'Head of Solutions (EMEA) & Global Presales',
      experience: '27+ years of experience',
      background: 'Techno-functional leader with extensive experience covering business and IT transformation engagements, architecture governance, strategy & road mapping, and solutions consulting. Brings cross-cultural and global/local perspective to engagements.',
      expertise: 'Specializes in large / very large deals, outcome-based engagement and commercial models. Has solid experience across both product/tech companies and enterprises across multiple industry segments.',
      expertiseTags: ['Solutions Architecture', 'Business Transformation', 'Technology Advisory', 'Cloud Technologies', 'Architecture Governance'],
      initials: 'ND',
      journeyPhases: ['Phase 2: Establish Foundation', 'Phase 4: Transform']
    },
    {
      name: 'Rahul Bhardwaj',
      title: 'SVP of Digital Consulting across Industry Verticals',
      experience: '24+ years of experience',
      background: 'Experienced leader in System Integration and Product Engineering with expertise in driving growth via large scale Digital Transformation engagements with deep expertise in Solution & Enterprise Architecture across App, Cloud, Data, and AI.',
      expertise: 'Specializes in cross-service line transformation solutions for Product/Platform Modernization, Data Transformation, Product Consolidation, Cloud Migration, Tech Due-diligence, Technology/Quality/Security Upgrades, Cost & Process Optimization.',
      expertiseTags: ['Digital Transformation', 'Solution Architecture', 'Cloud Migration', 'Data Transformation', 'Product Modernization'],
      initials: 'RB',
      journeyPhases: ['Phase 4: Transform']
    },
    {
      name: 'Saurabh Periwal',
      title: 'Vice President of Information Technology',
      experience: '15+ years of experience',
      background: 'A seasoned technology executive and startup founder with extensive experience leading digital transformation, enterprise architecture, and product innovation across global markets. Currently oversees strategic technology initiatives at Accion Labs.',
      expertise: 'Drives scalable solutions in cloud, data, and AI for clients across the globe. Specializes in helping organizations evolve into technology-first businesses and supporting technology leaders during critical phases such as due diligence for mergers and acquisitions.',
      expertiseTags: ['Digital Transformation', 'Enterprise Architecture', 'Product Innovation', 'Cloud Solutions', 'M&A Due Diligence'],
      initials: 'SP',
      journeyPhases: ['Phase 1: Assess', 'Phase 4: Transform']
    },
    {
      name: 'Dwaip Chaudhary',
      title: 'Principal Consultant for Enterprise Transformations',
      experience: '15+ years of experience',
      background: 'Principal Consultant specializing in enterprise transformations with deep expertise in business process automation, intelligent systems design, and strategic technology consulting across various industry verticals.',
      expertise: 'Specializes in business process automation, intelligent systems design, and strategic technology consulting. Expert in driving enterprise transformation initiatives and implementing cutting-edge technology solutions.',
      expertiseTags: ['Enterprise Transformation', 'Business Process Automation', 'Intelligent Systems', 'Strategic Consulting', 'Technology Implementation'],
      initials: 'DC',
      journeyPhases: ['Phase 4: Transform']
    },
    {
      name: 'Hemesh Thakkar',
      title: 'Chief Solutions Architect',
      experience: '12+ years of experience',
      background: 'Experienced Software Solutions Architect with demonstrated expertise in platform integrations, enterprise application architecture, and technology strategy development. Holds Bachelor of Engineering from K.J. Somaiya College of Engineering.',
      expertise: 'Specializes in platform integrations, enterprise application architecture, and technology strategy development. Leads complex client engagement solutioning and DevSecOps automation for digital platforms.',
      expertiseTags: ['Platform Integration', 'Enterprise Architecture', 'DevSecOps', 'Technology Strategy', 'Web Development'],
      initials: 'HT',
      journeyPhases: ['Phase 4: Transform']
    },
    {
      name: 'Mahendiran Madhaiyan',
      title: 'Senior Technology Advisor',
      experience: '18+ years of experience',
      background: 'Senior Technology Advisor with extensive experience in data analytics, AI-driven solutions, and enterprise platform strategies. Expert in technology evaluation and strategic roadmap development across multiple industry domains.',
      expertise: 'Focuses on data analytics, AI-driven solutions, and enterprise platform strategies. Expert in technology evaluation and strategic roadmap development for digital transformation initiatives.',
      expertiseTags: ['Data Analytics', 'AI Solutions', 'Enterprise Platforms', 'Technology Evaluation', 'Strategic Roadmaps'],
      initials: 'MM',
      journeyPhases: ['Phase 1: Assess', 'Phase 5: Innovate with AI']
    },
    {
      name: 'Mahesh Ghule',
      title: 'Strategic Solutions Architect',
      experience: '16+ years of experience',
      background: 'Strategic Solutions Architect with extensive experience in industry-specific technology implementations, platform integrations, and digital transformation strategies across various business domains.',
      expertise: 'Specializes in industry-specific technology implementations, platform integrations, and digital transformation strategies. Expert in designing scalable solutions for complex enterprise environments.',
      expertiseTags: ['Solutions Architecture', 'Platform Integration', 'Digital Transformation', 'Industry Solutions', 'Technology Implementation'],
      initials: 'MG',
      journeyPhases: ['Phase 4: Transform']
    },
    {
      name: 'Shrijeet Polke',
      title: 'Innovation and Technology Strategy Leader',
      experience: '14+ years of experience',
      background: 'Innovation and Technology Strategy Leader with deep expertise in emerging technologies, AI/ML solutions, and next-generation platform development. Presents at innovation summits on cutting-edge technology implementations.',
      expertise: 'Focuses on emerging technologies, AI/ML solutions, and next-generation platform development. Expert in innovation strategy and technology trend analysis for enterprise transformation.',
      expertiseTags: ['Innovation Strategy', 'Emerging Technologies', 'AI/ML Solutions', 'Platform Development', 'Technology Trends'],
      initials: 'SP',
      journeyPhases: ['Phase 5: Innovate with AI']
    },
    {
      name: 'Bharadwaj Satbhai',
      title: 'Principal Solution Architect & Business Analyst',
      experience: '12+ years of experience',
      background: 'Principal Solution Architect and Business Analyst working in the business solution group at Accion Labs. Specializes in solution architecting and business analysis for digital transformation services with extensive contributions across multiple domains.',
      expertise: 'Expert in solution architecting and business analysis for digital transformation services. Has contributed significantly in e-commerce, enterprise mobility, and BFSI domains. Presents at innovation summits on AI solutions and generative AI architecture implementations.',
      expertiseTags: ['Solution Architecture', 'Business Analysis', 'Digital Transformation', 'Enterprise Mobility', 'AI Solutions'],
      initials: 'BS',
      journeyPhases: ['Phase 1: Assess', 'Phase 5: Innovate with AI']
    }
  ];

  const teamStats = [
    { icon: Users, value: '12', label: 'Senior Technology Advisors', color: 'blue' },
    { icon: Award, value: '200+', label: 'Combined Years Experience', color: 'purple' },
    { icon: Brain, value: '5', label: 'Journey Phases Covered', color: 'indigo' },
    { icon: Building2, value: '15+', label: 'Industry Verticals', color: 'emerald' }
  ];

  const getPhaseColor = (phase: string): string => {
    if (phase.includes('Phase 1')) return 'text-purple-600 bg-purple-50';
    if (phase.includes('Phase 2')) return 'text-blue-600 bg-blue-50';
    if (phase.includes('Phase 3')) return 'text-indigo-600 bg-indigo-50';
    if (phase.includes('Phase 4')) return 'text-emerald-600 bg-emerald-50';
    if (phase.includes('Phase 5')) return 'text-cyan-600 bg-cyan-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div>
      <PageHeader
        subtitle="Strategy & Technology Advisory Group"
        title="Meet Our STAG Team"
        description="12 senior technology advisors with 200+ combined years of expertise driving enterprise data transformation"
      />

      {/* Introduction Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex items-center mb-6">
              <Shield className="w-10 h-10 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our STAG Team</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              The Strategy and Technology Advisory Group (STAG) represents Accion Labs' most experienced technology
              leaders and advisors. This elite team brings together deep expertise across data strategy, enterprise
              transformation, AI/ML, cloud architecture, and digital innovation.
            </p>
            <p className="text-lg text-gray-700">
              Each STAG member plays a critical role in guiding enterprises through their data journey—from initial
              assessment through governance, transformation, and AI-powered innovation. Their combined experience spans
              200+ years across multiple industries and geographies.
            </p>
          </div>

          {/* Team Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${stat.color}-100 rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Advisors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts guiding your data transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stagMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-200">
                {/* Profile Header */}
                <div className="flex items-start mb-6 pb-6 border-b-2 border-gray-100">
                  <div className="flex-shrink-0 mr-6">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-3 border-blue-600 shadow-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2 text-sm">{member.title}</p>
                    <p className="text-gray-600 text-sm font-medium">{member.experience}</p>
                  </div>
                </div>

                {/* Background */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Background
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.background}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                    Area of Expertise
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{member.expertise}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertiseTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Journey Phases */}
                {member.journeyPhases && member.journeyPhases.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                      Journey Phase Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.journeyPhases.map((phase, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full font-medium ${getPhaseColor(phase)}`}
                        >
                          {phase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Across Journey Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expertise Across the Data Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our STAG team provides expert guidance at every phase of your data transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-sm text-gray-600 mb-3">Data Strategy & Maturity Assessment</p>
              <div className="text-xs text-purple-600 font-medium">
                4 Advisors with expertise in this phase
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Establish Foundation</h3>
              <p className="text-sm text-gray-600 mb-3">Data Governance Framework</p>
              <div className="text-xs text-blue-600 font-medium">
                1 Advisor with expertise in this phase
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Single Truth</h3>
              <p className="text-sm text-gray-600 mb-3">Master Data Management</p>
              <div className="text-xs text-indigo-600 font-medium">
                Supported by all transformation advisors
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transform</h3>
              <p className="text-sm text-gray-600 mb-3">Data Architecture Modernization</p>
              <div className="text-xs text-emerald-600 font-medium">
                7 Advisors with expertise in this phase
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-cyan-600">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovate with AI</h3>
              <p className="text-sm text-gray-600 mb-3">AI/ML & GenAI Solutions</p>
              <div className="text-xs text-cyan-600 font-medium">
                4 Advisors with expertise in this phase
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reach Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-6">
              <Globe2 className="w-10 h-10 mr-4" />
              <h2 className="text-3xl font-bold">Global Perspective, Local Expertise</h2>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Our STAG team brings international experience across the US, UK, Europe, and EMEA regions,
              combined with deep understanding of local market dynamics. This global perspective enables
              us to deliver world-class solutions while understanding your regional business context.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Industry Verticals</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Client Transformations</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">Continents Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <RelatedLinks
        title="Explore Our Data Journey"
        links={[
          {
            title: 'Data Strategy & Assessment',
            description: 'Phase 1: 450+ criteria maturity assessment and strategic roadmap',
            path: '/data-strategy'
          },
          {
            title: 'Data Governance',
            description: 'Phase 2: Comprehensive governance framework with data catalog and quality',
            path: '/data-governance'
          },
          {
            title: 'Master Data Management',
            description: 'Phase 3: 6-phase MDM methodology with GenAI-powered automation',
            path: '/master-data-management'
          },
          {
            title: 'Data Transformation',
            description: 'Phase 4: 5 Pillars framework for comprehensive data transformation',
            path: '/data-transformation'
          },
          {
            title: 'Generative AI & ML',
            description: 'Phase 5: KAPS framework delivering 30-75% efficiency improvements',
            path: '/generative-ai'
          },
          {
            title: 'Technology Stack',
            description: '120+ technologies across cloud, big data, and AI/ML platforms',
            path: '/technology-stack'
          }
        ]}
      />
    </div>
  );
};

export default DataPractice;
