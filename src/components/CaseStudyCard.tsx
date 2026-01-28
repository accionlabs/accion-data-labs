import React from 'react';
import { Building2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
        <h3 className="text-xl font-semibold text-white">{caseStudy.title}</h3>
        <p className="text-blue-100 text-sm mt-1">{caseStudy.industry}</p>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center mb-2">
            <Building2 className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Client</h4>
          </div>
          <p className="text-gray-700">{caseStudy.client}</p>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Challenge</h4>
          </div>
          <p className="text-gray-700">{caseStudy.challenge}</p>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Solution</h4>
          </div>
          <p className="text-gray-700">{caseStudy.solution}</p>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Outcome</h4>
          </div>
          <p className="text-gray-700">{caseStudy.outcome}</p>
        </div>

        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
