import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Database,
  ChevronDown,
  ChevronRight,
  Home,
  Target,
  Users,
  Cpu,
  Server,
  FileText,
  Mail,
  Menu,
  X
} from 'lucide-react';
import SearchBar from './SearchBar';

interface MenuItem {
  name: string;
  path?: string;
  icon?: React.ElementType;
  children?: MenuItem[];
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { name: 'Home', path: '/', icon: Home },
    {
      name: 'Data Journey',
      icon: Target,
      children: [
        { name: 'Data Strategy', path: '/data-strategy' },
        { name: 'Data Governance', path: '/data-governance' },
        { name: 'Master Data Management', path: '/master-data-management' },
        { name: 'Data Transformation', path: '/data-transformation' },
        { name: 'Generative AI', path: '/generative-ai' },
      ]
    },
    {
      name: 'Technology',
      icon: Cpu,
      children: [
        { name: 'Technology Categories', path: '/technology-stack' },
      ]
    },
    {
      name: 'Platforms',
      icon: Server,
      children: [
        { name: 'All Platforms', path: '/platforms' },
        { name: 'Microsoft Azure', path: '/platforms/microsoft' },
        { name: 'AWS', path: '/platforms/aws' },
        { name: 'Google Cloud', path: '/platforms/google-cloud' },
        { name: 'Snowflake', path: '/platforms/snowflake' },
        { name: 'Databricks', path: '/platforms/databricks' },
        { name: 'Tableau', path: '/platforms/tableau' },
        { name: 'Collibra', path: '/platforms/collibra' },
        { name: 'Cloudera', path: '/platforms/cloudera' },
        { name: 'AI & ML Platforms', path: '/platforms/ai-ml' },
      ]
    },
    { name: 'Data Practice', path: '/data-practice', icon: Users },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  // Auto-expand sections based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const sectionsToExpand: string[] = [];

    menuItems.forEach(item => {
      if (item.children) {
        const hasActiveChild = item.children.some(child =>
          child.path === currentPath ||
          (child.path && currentPath.startsWith(child.path + '/'))
        );
        if (hasActiveChild) {
          sectionsToExpand.push(item.name);
        }
      }
    });

    setExpandedSections(prev => {
      const combined = [...prev, ...sectionsToExpand];
      const unique = combined.filter((item, index) => combined.indexOf(item) === index);
      return unique;
    });
  }, [location.pathname]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name);
    const active = item.path ? isActive(item.path) : false;
    const Icon = item.icon;

    if (hasChildren) {
      return (
        <div key={item.name}>
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              depth === 0
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-600 hover:bg-gray-50 ml-4'
            }`}
          >
            <div className="flex items-center">
              {Icon && <Icon className="w-5 h-5 mr-3 text-gray-500" />}
              <span>{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {isExpanded && (
            <div className="mt-1 space-y-1">
              {item.children!.map(child => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path!}
        onClick={closeMobileMenu}
        className={`flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors ${
          depth === 0 ? '' : 'ml-8'
        } ${
          active
            ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600 -ml-0.5 pl-3.5'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        } ${depth === 0 && !active ? 'font-medium text-gray-700' : ''}`}
      >
        {Icon && depth === 0 && (
          <Icon className={`w-5 h-5 mr-3 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
        )}
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md text-gray-700 hover:bg-gray-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-72 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <Database className="h-8 w-8 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">Accion Data Labs</span>
          </Link>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
