"use client"
import React, { createContext, useContext, useState } from 'react';

interface PasswordResetContextProps {
  currentStep: number
  setCurrentStep: React.Dispatch<
    React.SetStateAction<number>
  >;
}

const PasswordResetContext = createContext<PasswordResetContextProps>({
  currentStep: 0,
  setCurrentStep: (value) => value,
});

export const PasswordResetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <PasswordResetContext.Provider value={{
      currentStep, setCurrentStep
    }}>
      {children}
    </PasswordResetContext.Provider>
  )
};

export const usePasswordReset = () => {
  const { currentStep, setCurrentStep } = useContext(PasswordResetContext);
  return { currentStep, setCurrentStep };
};
