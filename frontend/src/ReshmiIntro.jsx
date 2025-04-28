import React from 'react';
import './ReshmiIntro.css';

export default function ReshmiIntro() {
  return (
    <div className="container">
      {/* Circles */}
      <div className="circle left-circle"></div>
      <div className="circle right-circle"></div>
      <div className="circle large-circle"></div>

      {/* Text */}
      <div className="text-container">
        <div className="name-text">reshmi</div>
      </div>
    </div>
  );
}