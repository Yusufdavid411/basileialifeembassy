// src/components/Section.jsx
import React from "react";
import "./section.css"; // Import CSS file for styling

const Section = () => {
  return (
    <div className="section1">
      <div className="section1-content">
        <h1>Welcome to Section 1</h1>
        <p>This section has a unique fixed background.</p>
      </div>

      <div className="section1-content2">
        <h1>Welcome to Section 1</h1>
        <p>This section has a unique fixed background.</p>
      </div>
    </div>
  );
};

export default Section;
