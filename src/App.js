// src/App.js
import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import FamilyGeneration from './components/FamilyGeneration';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <CustomNavbar />
      <FamilyGeneration/>
      <Footer/>
    </div>
  );
};



export default App;
