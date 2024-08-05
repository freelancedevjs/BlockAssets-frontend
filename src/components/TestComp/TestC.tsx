// pages/YourPage.tsx
import React, { useEffect,useState } from 'react';

import StepIndicator from './index';

const YourPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionHeight = 300;
  const totalSteps = 6;

 const handleScroll = () => {
    const newStep = Math.ceil(window.scrollY / sectionHeight);

    if (newStep !== currentStep) {
      setCurrentStep(newStep);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 1</h2>
      </section>
      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 2</h2>
      </section>
      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 3</h2>
      </section>
      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 4</h2>
      </section>
      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 5</h2>
      </section>
      <section style={{ height: `${sectionHeight}px`, border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Section 6</h2>
      </section>

    </div>
  );
};

export default YourPage;
