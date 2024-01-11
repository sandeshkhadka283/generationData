// FamilyDetails.js - Example Family Details Component

import React from 'react';
import './FamilyDetails.css'; // Import custom CSS file for styling

const FamilyDetails = () => {
  return (
    <div className="family-details-container">
      <div className="node">
        <div className="node-header">Root Node</div>
        <div className="node-content">
          {/* Node content here */}
          <p>Details about the root family</p>
        </div>
      </div>

      

      <div className="node">
        <div className="node-header">Child Node 1</div>
        <div className="node-content">
          {/* Node content here */}
          <p>Details about child family 1</p>
        </div>
      </div>

      {/* No SVG between Root Node and Child Node 1 */}
      <svg className="rope" width="200" height="200"></svg>

      <div className="node">
        <div className="node-header">Child Node 2</div>
        <div className="node-content">
          {/* Node content here */}
          <p>Details about child family 2</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
