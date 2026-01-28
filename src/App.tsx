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
import Snowflake from './pages/Snowflake';
import Microsoft from './pages/Microsoft';
import AWS from './pages/AWS';
import GoogleCloud from './pages/GoogleCloud';
import Tableau from './pages/Tableau';
import Collibra from './pages/Collibra';
import Cloudera from './pages/Cloudera';

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
          <Route path="/partnerships/snowflake" element={<Snowflake />} />
          <Route path="/partnerships/microsoft" element={<Microsoft />} />
          <Route path="/partnerships/aws" element={<AWS />} />
          <Route path="/partnerships/google-cloud" element={<GoogleCloud />} />
          <Route path="/partnerships/tableau" element={<Tableau />} />
          <Route path="/partnerships/collibra" element={<Collibra />} />
          <Route path="/partnerships/cloudera" element={<Cloudera />} />
          <Route path="/data-transformation" element={<DataTransformation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
