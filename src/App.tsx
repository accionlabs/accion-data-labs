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
import Platforms from './pages/Platforms';
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
import AIMLPlatforms from './pages/AIMLPlatforms';

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
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/platforms/databricks" element={<Databricks />} />
          <Route path="/platforms/snowflake" element={<Snowflake />} />
          <Route path="/platforms/microsoft" element={<Microsoft />} />
          <Route path="/platforms/aws" element={<AWS />} />
          <Route path="/platforms/google-cloud" element={<GoogleCloud />} />
          <Route path="/platforms/tableau" element={<Tableau />} />
          <Route path="/platforms/collibra" element={<Collibra />} />
          <Route path="/platforms/cloudera" element={<Cloudera />} />
          <Route path="/platforms/ai-ml" element={<AIMLPlatforms />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/data-transformation" element={<DataTransformation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
