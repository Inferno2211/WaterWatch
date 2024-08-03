
import React from 'react';
import '@styles/issue.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="step">
        <div className="step-number">01</div>
        <div className="step-label">Locate</div>
      </div>
      <div className="step">
        <div className="step-number">02</div>
        <div className="step-label">Details</div>
      </div>
      <div className="step">
        <div className="step-number">03</div>
        <div className="step-label">Upload Images</div>
      </div>
      <div className="step">
        <div className="step-number">04</div>
        <div className="step-label">Tag Council</div>
      </div>
    </div>
  );
};

export default ProgressBar;
