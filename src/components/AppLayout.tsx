import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {/* Fixed breadcrumbs bar */}
      <div className="fixed top-0 right-0 left-0 lg:left-72 z-30 pt-16 lg:pt-0">
        <Breadcrumbs />
      </div>
      {/* Main content area with left margin for sidebar */}
      <div className="lg:ml-72 min-h-screen flex flex-col">
        {/* Add padding top for fixed breadcrumbs (mobile: menu button + breadcrumbs, desktop: just breadcrumbs) */}
        <main className="flex-grow pt-28 lg:pt-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
