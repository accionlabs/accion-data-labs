import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';

interface JourneyContextProps {
  phase: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  whyThisMatters: string;
  prerequisites?: {
    title: string;
    description: string;
    path: string;
  }[];
  nextSteps?: {
    title: string;
    description: string;
    path: string;
  }[];
  enablesWhatNext?: string;
}

const JourneyContext: React.FC<JourneyContextProps> = ({
  phase,
  title,
  description,
  whyThisMatters,
  prerequisites,
  nextSteps,
  enablesWhatNext
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Context */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {phase}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  Phase {phase}
                </span>
              </div>
              <p className="text-lg text-gray-700">{description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Why This Matters in Your Journey</h4>
                <p className="text-gray-700">{whyThisMatters}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites and Next Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Prerequisites */}
          {prerequisites && prerequisites.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                <h4 className="text-lg font-bold text-gray-900">Foundation Required</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                These capabilities should typically be in place before or during this phase:
              </p>
              <div className="space-y-3">
                {prerequisites.map((prereq, index) => (
                  <Link
                    key={index}
                    to={prereq.path}
                    className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-gray-900 group-hover:text-green-700">{prereq.title}</h5>
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">{prereq.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {nextSteps && nextSteps.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-bold text-gray-900">What Comes Next</h4>
              </div>
              {enablesWhatNext && (
                <p className="text-sm text-gray-600 mb-4">
                  {enablesWhatNext}
                </p>
              )}
              <div className="space-y-3">
                {nextSteps.map((next, index) => (
                  <Link
                    key={index}
                    to={next.path}
                    className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-gray-900 group-hover:text-blue-700">{next.title}</h5>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">{next.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Journey Tip */}
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold">💡</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">Flexible Entry Points</h5>
              <p className="text-sm text-gray-700">
                While we recommend following this journey sequence, every enterprise is different. You can start
                at any phase based on your current maturity and immediate needs. Our team will help you assess
                dependencies and create the right roadmap for your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyContext;
