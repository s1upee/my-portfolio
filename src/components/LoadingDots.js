import React from 'react';
import './LoadingDots.css'; // Import the CSS file for the animation

const LoadingDots = () => {
  return (
    <div className="loading-container" aria-live="polite">
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </div>
  );
};

export default LoadingDots;
