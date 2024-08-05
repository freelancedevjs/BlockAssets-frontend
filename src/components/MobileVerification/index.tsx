"use client"
import React, { useState } from 'react'

import Step1 from '@/components/MobileVerification/Step1'
import Step2 from '@/components/MobileVerification/Step2'

const MobileVerify = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [mobileNumber, setMobileNumber] = useState<number | undefined>()



  const ReturnStep = () => {
    switch (currentStep) {
      case 0:
        return < Step1 mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} setCurrentStep={setCurrentStep} />
      case 1:
        return <Step2 mobileNumber={mobileNumber} />
      default:
        break;
    }
  }

  return (
    <>
      {ReturnStep()}
    </>
  )
}

export default MobileVerify