import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Database, Layers, Brain, ArrowRight } from 'lucide-react';

interface JourneyProgressProps {
  currentPhase: 1 | 2 | 3 | 4 | 5;
}

const JourneyProgress: React.FC<JourneyProgressProps> = ({ currentPhase }) => {
  const phases = [
    {
      phase: 1,
      icon: Target,
      title: 'Assess',
      shortTitle: 'Strategy',
      path: '/data-strategy',
      color: 'purple'
    },
    {
      phase: 2,
      icon: Shield,
      title: 'Establish Foundation',
      shortTitle: 'Governance',
      path: '/data-governance',
      color: 'blue'
    },
    {
      phase: 3,
      icon: Database,
      title: 'Create Single Truth',
      shortTitle: 'MDM',
      path: '/master-data-management',
      color: 'indigo'
    },
    {
      phase: 4,
      icon: Layers,
      title: 'Transform',
      shortTitle: 'Transform',
      path: '/data-transformation',
      color: 'emerald'
    },
    {
      phase: 5,
      icon: Brain,
      title: 'Innovate with AI',
      shortTitle: 'Gen AI',
      path: '/generative-ai',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string, isCurrent: boolean) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; activeBg: string; activeText: string } } = {
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-300',
        activeBg: 'bg-purple-600',
        activeText: 'text-white'
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-300',
        activeBg: 'bg-blue-600',
        activeText: 'text-white'
      },
      indigo: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-600',
        border: 'border-indigo-300',
        activeBg: 'bg-indigo-600',
        activeText: 'text-white'
      },
      emerald: {
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        border: 'border-emerald-300',
        activeBg: 'bg-emerald-600',
        activeText: 'text-white'
      },
      cyan: {
        bg: 'bg-cyan-100',
        text: 'text-cyan-600',
        border: 'border-cyan-300',
        activeBg: 'bg-cyan-600',
        activeText: 'text-white'
      }
    };

    const colors = colorMap[color] || colorMap.blue;

    if (isCurrent) {
      return {
        container: `${colors.activeBg} ring-4 ring-offset-2 ring-${color}-300`,
        text: colors.activeText,
        icon: colors.activeText
      };
    }

    return {
      container: `${colors.bg} border-2 ${colors.border} hover:shadow-md`,
      text: colors.text,
      icon: colors.text
    };
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Enterprise Data Journey</h3>
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            View Full Journey <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-500"
              style={{ width: `${((currentPhase - 1) / 4) * 100}%` }}
            />
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 relative">
            {phases.map((phase) => {
              const isCurrent = phase.phase === currentPhase;
              const isPast = phase.phase < currentPhase;
              const classes = getColorClasses(phase.color, isCurrent);

              return (
                <Link
                  key={phase.phase}
                  to={phase.path}
                  className={`${classes.container} rounded-lg p-3 md:p-4 transition-all duration-200 relative group`}
                >
                  {isCurrent && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      You are here
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 rounded-full ${isCurrent ? 'bg-white bg-opacity-20' : ''}`}>
                      <phase.icon className={`w-5 h-5 md:w-6 md:h-6 ${classes.icon}`} />
                    </div>

                    <div className={`text-xs md:text-sm font-bold mb-1 ${classes.text}`}>
                      Phase {phase.phase}
                    </div>

                    <div className={`text-xs md:text-sm font-semibold ${classes.text} hidden md:block`}>
                      {phase.title}
                    </div>

                    <div className={`text-xs font-semibold ${classes.text} md:hidden`}>
                      {phase.shortTitle}
                    </div>

                    {isPast && !isCurrent && (
                      <div className="mt-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyProgress;
