// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import FamilyGeneration from './components/FamilyGeneration';
import BottomBar from './components/Bottombar';

const App = () => {
  return (
    <div>
      <Navbar />
      <FamilyGeneration />
      {/* Add other content or components */}
      <BottomBar />
    </div>
  );
};

export default App;
