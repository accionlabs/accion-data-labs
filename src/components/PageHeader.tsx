import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {subtitle && <p className="text-blue-100 text-sm font-semibold uppercase tracking-wide mb-2">{subtitle}</p>}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-blue-100 max-w-3xl">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
