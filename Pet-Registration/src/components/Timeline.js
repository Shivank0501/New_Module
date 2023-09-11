import React from 'react';
import '../index.css';

function Timeline({ activeStep }) {
  const stepLabels = [
    'Owner Details',
    'Owner Address',
    'Pet Details',
    'Document Details',
    'Summary',
  ];

  return (
    <div>
      <div className="timeline-container">
        {stepLabels.map((label, index) => (
          <div className="timeline-checkpoint" key={index}>
            <div className="timeline-content">
              <span className={`circle ${activeStep >= index + 1 ? 'active' : ''}`}>
                {index + 1}
              </span>
              <span className={`secondary-color ${activeStep >= index + 1 ? 'active' : ''}`}>
                {label}
              </span>
            </div>
            {index < stepLabels.length - 1 && (
              <span className={`line ${activeStep > index + 1 ? 'active' : ''}`}></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
