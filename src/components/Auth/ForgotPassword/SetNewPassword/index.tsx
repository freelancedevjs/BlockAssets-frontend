"use client"

import React, { useState } from 'react'

import NewPasswordErrorDialog from '@/components/Auth/ForgotPassword/NewPasswordErrorPopup'
import LoginWrapper from '@/components/Auth/LoginWrapper'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { usePasswordReset } from '@/contexts/passwordResetContext'


const SetNewPassword = () => {
  const [openErrorPopup, setOpenErrorPopup] = useState(false)
  const { currentStep, setCurrentStep } = usePasswordReset()
  return (
    <LoginWrapper className="text-center" title="Set new password" subtitle="Your new password must be different to previously used passwords.">
      <Input
        placeholder='New Password'
        isPasswordInput
        label='Password'
        type='password'
        className='my-4'
      />
      <Input
        placeholder='Confirm Password'
        isPasswordInput
        label='Password'
        type='password'
        className='my-4'
      />
      <Button className='mb-2 mt-6 w-full' onClick={() => setCurrentStep(prev => prev + 1)}>Reset Password</Button>
      <NewPasswordErrorDialog open={openErrorPopup} onOpenChange={setOpenErrorPopup} />
    </LoginWrapper>
  )
}

export default SetNewPassword