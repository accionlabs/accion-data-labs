import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import DataGovernance from './pages/DataGovernance';
import DataStrategy from './pages/DataStrategy';
import DataPractice from './pages/DataPractice';
import MasterDataManagement from './pages/MasterDataManagement';
import GenerativeAI from './pages/GenerativeAI';
import TechnologyStack from './pages/TechnologyStack';
import CaseStudies from './pages/CaseStudies';
import Partnerships from './pages/Partnerships';
import DataTransformation from './pages/DataTransformation';
import Contact from './pages/Contact';
import Databricks from './pages/Databricks';

function App() {
  return (
    <Router basename="/accion-data-labs">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/data-governance" element={<DataGovernance />} />
          <Route path="/data-strategy" element={<DataStrategy />} />
          <Route path="/master-data-management" element={<MasterDataManagement />} />
          <Route path="/generative-ai" element={<GenerativeAI />} />
          <Route path="/data-practice" element={<DataPractice />} />
          <Route path="/technology-stack" element={<TechnologyStack />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/partnerships/databricks" element={<Databricks />} />
          <Route path="/data-transformation" element={<DataTransformation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
