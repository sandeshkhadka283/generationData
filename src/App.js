// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import FamilyGeneration from './components/FamilyGeneration';
import Footer from './components/Footer';
import FamilyDetails from './components/FamilyDetails'; // Create FamilyDetails component

const App = () => {
  return (
    <Router>
      <div className="main-content">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<FamilyGeneration />} />
          <Route path="/family-details" element={<FamilyDetails />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </Router>
  );
};

export default App;
