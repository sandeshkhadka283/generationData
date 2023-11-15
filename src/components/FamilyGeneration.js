// src/components/FamilyGeneration.js
import React from 'react';
import './FamilyGeneration.css'; // Import custom CSS file for styling

const FamilyGeneration = () => {
  const generations = [
    { id: 1, label: 'Generation 1' },
    { id: 2, label: 'Generation 2' },
    { id: 3, label: 'Generation 3' },
    { id: 4, label: 'Generation 4' },
    // Add more generations as needed
  ];

  const handleItemClick = (generation) => {
    // Handle the click/tap event for the selected generation
    console.log(`Selected Generation: ${generation.label}`);
  };

  return (
    <div className="family-generation">
      <div className="family-generation-header">
        <h1>Select Family Generation</h1>
        <p>Choose a generation from the list below:</p>
      </div>
      <div className="tappable-container">
        {/* Mapping over the generations array to create tappable items */}
        {generations.map((generation) => (
          <div
            key={generation.id}
            className="tappable-item"
            onClick={() => handleItemClick(generation)}
          >
            {generation.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyGeneration;
