import React from 'react';
import './Vision.css'; // Styling for the component

function Vision() {
  return (
    <div className="vision-container">
      <div className="vision-text">
        <h2 className="vision-title">Our Vision</h2>
        <h5><strong>Rooted in Careful Nurturing</strong></h5>
        <p>To nurture each child from their earliest years like a growing bud.</p>
        <h5><strong>Strong Foundations Through CBSE</strong></h5>
        <p>To provide strong academic foundations through structured, NCERT-based CBSE education.</p>
        <h5><strong>Preparing for a Dynamic Future</strong></h5>
        <p>To empower students at every stage — Pre-primary to Secondary — with the knowledge, values, and skills needed to thrive in an ever-changing world.</p>
      </div>
      <div className="vision-image">
        <img src="/photos/ankuram staff.jpeg" alt="Vision" />
      </div>
    </div>
  );
}

export default Vision;
