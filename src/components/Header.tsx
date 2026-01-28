import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database, ChevronRight, Home } from 'lucide-react';
import SearchBar from './SearchBar';

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
  'microsoft': 'Microsoft',
  'snowflake': 'Snowflake',
  'aws': 'AWS',
  'databricks': 'Databricks',
  'google-cloud': 'Google Cloud',
  'tableau': 'Tableau',
  'collibra': 'Collibra',
  'cloudera': 'Cloudera',
  'ai-ml': 'AI & ML Platforms'
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    // Journey Sequence (Phases 1-5)
    { name: 'Data Strategy', path: '/data-strategy' }, // Phase 1: Assess
    { name: 'Data Governance', path: '/data-governance' }, // Phase 2: Establish Foundation
    { name: 'MDM', path: '/master-data-management' }, // Phase 3: Create Single Truth
    { name: 'Transformation', path: '/data-transformation' }, // Phase 4: Transform
    { name: 'Gen AI', path: '/generative-ai' }, // Phase 5: Innovate with AI
    // Supporting Pages
    { name: 'Data Practice', path: '/data-practice' },
    { name: 'Technology', path: '/technology-stack' },
    { name: 'Platforms', path: '/platforms' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Generate breadcrumbs
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = pathnames.length === 0;

  const breadcrumbs = [{ label: 'Home', path: '/' }];
  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({ label, path: currentPath });
  });

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Accion Data Labs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="px-3 py-2 mb-2">
              <SearchBar />
            </div>
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumbs row with Search */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Breadcrumbs */}
            <ol className="flex items-center space-x-2 text-sm">
              {isHomePage ? (
                <li className="flex items-center text-gray-500">
                  <Home className="w-4 h-4 mr-1" />
                  <span>Home</span>
                </li>
              ) : (
                breadcrumbs.map((crumb, index) => {
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
                })
              )}
            </ol>

            {/* Search - Desktop only (mobile has it in menu) */}
            <div className="hidden lg:block">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
