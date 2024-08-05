"use client"
import React, { FC, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import { useSignUp } from '@/contexts/signUpContext';

import MobileIcon from '~/images/mobile.png';
import { ISignupStepProps } from '@/components/Auth/CreateAccount';
import { useResendEmailOtpMutation } from '@/generated/generated';
import { useToast } from '@/components/ui/Toast/use-toast';

const EmailOtpVerification: FC<ISignupStepProps> = ({ formik }) => {
  const { setCurrentStep } = useSignUp()
  const { toast } = useToast()
  const [resendEmailOtp, { data, loading, error }] = useResendEmailOtpMutation()

  const { values, errors } = formik
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timerId);
          return prevCountdown;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleResendOtp = async () => {
    try {
      formik.setFieldValue("emailOtp", { otp: "", token: "" })
      const result = await resendEmailOtp({
        variables: {
          input: {
            token: values.emailOtp.token
          }
        }
      })

      if (result) {
        formik.setFieldValue("emailOtp", { ...values.emailOtp, token: result.data?.resendEmailOtp.token })
        toast({ title: "OTP Sent !", description: "Enter the new Otp sent on your email." })
      }
    } catch (error) {
      toast({ title: "Error resend Otp !" })
      console.log("Resend Otp Error:", error)
    }
  }

  const handleNext = () => {
    if (Object.keys(formik.errors).length < 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      toast({ title: "Fill the form correctly !", variant: "destructive" })
    }
  }
  console.log("Vlues:", values)
  return (
    <>
      <MobileLoginWrapper title='Enter OTP' subTitle={`Enter the OTP sent on ${values.email}`} iconSrc={MobileIcon}>
        <Input
          name='emailOtp'
          value={values.emailOtp.otp}
          type='number'
          onChange={(otp) => formik.setFieldValue("emailOtp", { ...values.emailOtp, otp: otp })}
          label='Enter OTP'
          placeholder='Ex. 4786'
          error={errors.emailOtp?.otp}
        />
        <Button
          className='my-3 w-full'
          disabled={!values.emailOtp.token && !values.emailOtp.otp}
          onClick={handleNext}
        >
          Next
        </Button>
      </MobileLoginWrapper>

      <LoginWrapper className='hidden sm:flex' title="Enter Verification OTP" subtitle={`We sent a six-digit code to ${values.email} `}>
        <OtpInput
          value={values.emailOtp.otp}
          containerStyle={{ display: "flex", gap: "10px" }}
          onChange={(otp) => formik.setFieldValue("emailOtp", { ...values.emailOtp, otp: otp })}
          numInputs={6}
          inputType="number"
          renderInput={(props) => <input {...props} name='emailOtp' className='!w-8 !h-8 !rounded-sm border border-[#]' />}
        />
        {!!errors.emailOtp?.otp && <div className='mt-1 text-xs text-red-500'>{errors.emailOtp.otp}</div>}
        <p className='mb-4 mt-6 text-xs text-[#808080]'>Don’t see it? Send a new OTP in  {countdown > 0 ? <span className='text-[#FF3F3F]'>{`00:${countdown}`} </span> : <span onClick={handleResendOtp} className='text-black font-semibold hover:underline cursor-pointer'>Resend OTP </span>}</p>
        <Button
          className='my-3 w-full'
          disabled={!values.emailOtp.token && !values.emailOtp.otp}
          onClick={handleNext}
        >
          Next
        </Button>
      </LoginWrapper>
    </>

  );
};


export default EmailOtpVerification