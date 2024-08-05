"use client"

import React, { useState } from 'react'

import ErrorDialog from "@/components/Auth/ForgotPassword/ErrorPopup"
import LoginWrapper from '@/components/Auth/LoginWrapper'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { usePasswordReset } from '@/contexts/passwordResetContext'
import Link from 'next/link'


const EnterEmail = () => {

  const [openErrorPopup, setOpenErrorPopup] = useState(false)
  const { setCurrentStep } = usePasswordReset()

  const handleContinue = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <LoginWrapper className="text-center" title="Forgot password?" subtitle="No worries, Please enter your email so we can send you a verification OTP">
      <Input placeholder='Enter Your Email' label='Email' />
      <Button className='mb-2 mt-6 w-full' onClick={handleContinue}>Continue</Button>
      <Link href="/login">
        <p className='text-center text-xs font-medium'>
          Return to Log in
        </p>
      </Link>
      <ErrorDialog open={openErrorPopup} onOpenChange={setOpenErrorPopup} />
    </LoginWrapper>
  )
}

export default EnterEmail