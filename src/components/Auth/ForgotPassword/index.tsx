"use client"

import React from 'react'

import EmailVerification from '@/components/Auth/ForgotPassword/EmailVerification'
import EnterEmail from '@/components/Auth/ForgotPassword/EnterEmail'
import ResetSuccessful from '@/components/Auth/ForgotPassword/ResetSuccess'
import SetNewPassword from '@/components/Auth/ForgotPassword/SetNewPassword'

import { usePasswordReset } from '@/contexts/passwordResetContext'


const ForgotPassword = () => {
  const { currentStep } = usePasswordReset()

  const ReturnStep = () => {
    switch (currentStep) {
      case 0:
        return <EnterEmail />
      case 1:
        return <EmailVerification />
      case 2:
        return <SetNewPassword />
      case 3:
        return <ResetSuccessful />
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

export default ForgotPassword