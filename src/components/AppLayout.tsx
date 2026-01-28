import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main content area with left margin for sidebar */}
      <div className="lg:ml-72 min-h-screen flex flex-col">
        {/* Add padding top on mobile for the menu button */}
        <main className="flex-grow pt-16 lg:pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
