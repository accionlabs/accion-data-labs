import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database } from 'lucide-react';

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
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
    </header>
  );
};

export default Header;
