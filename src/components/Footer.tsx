import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Database className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Accion Data Labs</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Transform your data into actionable insights with our comprehensive data services.
              From strategy to implementation, we help organizations leverage data for competitive advantage.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/accionlabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/accionlabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@accionlabs.com" className="hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/data-governance" className="hover:text-blue-500 transition-colors">Data Governance</Link></li>
              <li><Link to="/data-strategy" className="hover:text-blue-500 transition-colors">Data Strategy</Link></li>
              <li><Link to="/data-practice" className="hover:text-blue-500 transition-colors">Data Practice</Link></li>
              <li><Link to="/data-transformation" className="hover:text-blue-500 transition-colors">Data Transformation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/technology-stack" className="hover:text-blue-500 transition-colors">Technology Stack</Link></li>
              <li><Link to="/platforms" className="hover:text-blue-500 transition-colors">Platforms</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Accion Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
