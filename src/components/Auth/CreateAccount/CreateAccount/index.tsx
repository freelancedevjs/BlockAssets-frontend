"use client"
import Link from 'next/link'
import React, { FC, useState } from 'react'

import ErrorDialog from '@/components/Auth/CreateAccount/ErrorPopup'
import LoginWrapper from '@/components/Auth/LoginWrapper'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useSignUp } from '@/contexts/signUpContext'
import { ISignupStepProps } from '@/components/Auth/CreateAccount'
import { useSendOtpMutationMutation } from '@/generated/generated'
import { useToast } from '@/components/ui/Toast/use-toast'

const Createaccount: FC<ISignupStepProps> = ({ formik }) => {
  const { setCurrentStep } = useSignUp()
  const { toast } = useToast()
  const [openErrorPopup, setOpenErrorPopup] = useState(false)
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } = formik
  const [sendEmailOtp, { data, loading, error }] = useSendOtpMutationMutation()

  const handleSendOtp = async () => {
    try {
      const result = await sendEmailOtp({
        variables: {
          input: {
            email: values.email
          }
        }
      })
      if (result) {
        formik.setFieldValue("emailOtp", { ...values.emailOtp, token: result.data?.sendOtp.token })
      }
      console.log(result, "email OTP")
    } catch (error) {
      console.log("Error while sending email OTP", error)
    }
  }

  const handleCreateAccount = async () => {
    if (Object.keys(formik.errors).length < 1) {
      await handleSendOtp()
      setCurrentStep(prev => prev + 1)
    } else {
      toast({ title: "Fill the form correctly !", variant: "destructive" })
    }
  }

  return (
    <LoginWrapper title="Create your account" subtitle="Unlock your property dreams">
      <form onSubmit={handleSubmit}>
        <Input placeholder='Enter Email' label='Email' name='email' onChange={handleChange} value={values.email} error={errors.email} />
        <Input
          placeholder='Create Password'
          label='Password'
          type='password'
          name='password'
          className='my-4'
          isPasswordInput
          value={values.password}
          error={errors.password}
          onChange={handleChange}
          additionalInfo='At least 8 characters, but longer is better.'
        />
        <p className='text-center text-xs text-[#808080]'>
          By Signing up, you agree to the{' '}
          <span className='font-medium text-black'> Terms and Conditions </span>{' '}
          and <span className='font-medium text-black'> Privacy Policy </span>
        </p>
        <Button className='mb-2 mt-6 w-full' onClick={handleCreateAccount}>Create Account</Button>
        <p className='text-center text-xs text-[#808080]'>
          Already have an account?{' '}
          <Link href="/login">
            <span className='font-medium text-black'>Log In</span>
          </Link>
        </p>
      </form>
      <ErrorDialog open={openErrorPopup} onOpenChange={setOpenErrorPopup} />
    </LoginWrapper>
  )
}

export default Createaccount