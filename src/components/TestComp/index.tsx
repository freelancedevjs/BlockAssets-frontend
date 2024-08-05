import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div style={{ marginBottom: '20px', position: "sticky" }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <li
            key={index}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: index === currentStep - 1 ? 'blue' : 'gray',
              margin: '0 5px',
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default StepIndicator;
