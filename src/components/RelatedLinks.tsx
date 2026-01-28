import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  path: string;
  external?: boolean;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
  variant?: 'default' | 'compact';
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title = 'Related Capabilities',
  links,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {link.title}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {link.title}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </Link>
            )
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore related capabilities and services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {link.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {link.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedLinks;
