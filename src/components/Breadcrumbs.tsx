import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels: { [key: string]: string } = {
  '': 'Home',
  'data-strategy': 'Data Strategy',
  'data-governance': 'Data Governance',
  'master-data-management': 'Master Data Management',
  'generative-ai': 'Generative AI',
  'data-practice': 'Data Practice',
  'technology-stack': 'Technology',
  'platforms': 'Platforms',
  'case-studies': 'Case Studies',
  'data-transformation': 'Data Transformation',
  'contact': 'Contact',
  // Platform deep dives
  'microsoft': 'Microsoft Azure',
  'snowflake': 'Snowflake',
  'aws': 'AWS',
  'databricks': 'Databricks',
  'google-cloud': 'Google Cloud',
  'tableau': 'Tableau',
  'collibra': 'Collibra',
  'cloudera': 'Cloudera',
  'ai-ml': 'AI & ML Platforms'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumbs
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [{ label: 'Home', path: '/' }];
  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({ label, path: currentPath });
  });

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30 lg:z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm h-12">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    to={crumb.path}
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumbs;
