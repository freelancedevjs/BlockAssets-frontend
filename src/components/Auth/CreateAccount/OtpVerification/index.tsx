"use client"
import { useRouter, redirect } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';


import MobileIcon from '~/images/mobile.png';
import { useUserType } from '@/contexts/userTypeContext';
import { ISignupStepProps } from '@/components/Auth/CreateAccount';
import { SignUpInput, UserType, useResendEmailOtpMutation, useResendPhoneOtpMutation, useSignUpMutationMutation } from '@/generated/generated';
import { useToast } from '@/components/ui/Toast/use-toast';

const OtpVerification: FC<ISignupStepProps> = ({ formik }) => {
  const router = useRouter()
  const { values, handleBlur, handleChange, errors } = formik
  const { toast } = useToast()
  const [countdown, setCountdown] = useState(15);
  const [resendMobileOtp, { data: resendOtpData, loading: resendOtpLoading, error: resendOtpError }] = useResendPhoneOtpMutation()

  const [signUp, { data, loading, error }] = useSignUpMutationMutation()
  const { selectedUserType } = useUserType()

  const handleSubmit = async () => {
    if (Object.keys(formik.errors).length > 0) {
      toast({ title: "Something Went wrong, Retry", variant: "destructive" })
      return
    }
    try {
      const variables: { input: SignUpInput } = {
        "input": {
          "address": values.address,
          "city": values.city,
          "country": values.country,
          "dob": values.dob,
          "email": values.email,
          "emailOtp": {
            "otp": values.emailOtp.otp,
            "token": values.emailOtp.token
          },
          "firstName": values.firstName,
          "lastName": values.lastName,
          "password": values.password,
          "phone": values.phone.toString(),
          "postalCode": values.postalCode,
          "smsOtp": {
            "otp": values.smsOtp.otp,
            "token": values.smsOtp.token
          },
          "state": values.state,
          "userType": selectedUserType.toUpperCase() as UserType,
          "tnc_status": true,
        }
      }
      if (selectedUserType === "Corporate") {
        variables.input.companyName = values.companyName;
      }
      const result = await signUp({
        variables: variables
      })
      console.log(result, "Signup Response")
      if (result) {
        toast({ title: "Success", description: "Signup successful ! Please login" })
        router.push("/login")
      }
    } catch (error) {
      toast({ title: "Failed", description: "Signup Failed !", variant: "destructive" })
      console.log("SignUp Error", error)
    }
  }


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
      formik.setFieldValue("smsOtp", { otp: "", token: "" })
      const result = await resendMobileOtp({
        variables: {
          input: {
            token: values.smsOtp.token
          }
        }
      })

      if (result) {
        formik.setFieldValue("smsOtp", { ...values.smsOtp, token: result.data?.resendPhoneOtp.token })
        toast({ title: "OTP Sent !", description: "Enter the new otp sent on your mobile." })
      }
      console.log("Resend sms Otp:", result)
    } catch (error) {
      toast({ title: "Error resend Otp !" })
      console.log("Resend sms Otp Error:", error)
    }
  }

  console.log("SIGNUP Data", data)
  return (

    <>
      <MobileLoginWrapper title='Enter OTP' subTitle='Enter the OTP sent on your phone number' iconSrc={MobileIcon}>
        <Input
          name='smsOtp'
          value={values.smsOtp.otp}
          type='number'
          onChange={(otp) => formik.setFieldValue("smsOtp", { ...values.smsOtp, otp: otp })}
          label='Enter OTP'
          placeholder='Ex. 4786'
          error={errors.smsOtp?.otp}
        />
        <Button
          className='my-3 w-full'
          disabled={!values.smsOtp.token && !values.smsOtp.otp}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </MobileLoginWrapper>

      <LoginWrapper className='hidden sm:flex' title="Enter Verification OTP" subtitle={`We sent a six-digit to ${values.phone} `}>
        <OtpInput
          value={values.smsOtp.otp}
          containerStyle={{ display: "flex", gap: "10px" }}
          onChange={(otp) => formik.setFieldValue("smsOtp", { ...values.smsOtp, otp: otp })}
          numInputs={6}
          inputType='number'
          renderInput={(props) => <input {...props} name="smsOtp" className='!w-8 !h-8 !rounded-sm border border-[#]' />}
        />
        {!!errors.smsOtp?.otp && <div className='mt-1 text-xs text-red-500'>{errors.smsOtp.otp}</div>}
        <p className='mb-4 mt-6 text-xs text-[#808080]'>Don’t see it? Send a new OTP in  {countdown > 0 ? <span className='text-[#FF3F3F]'>{`00:${countdown}`} </span> : <span onClick={handleResendOtp} className='text-black font-semibold hover:underline cursor-pointer'>Resend OTP </span>}</p>
        <Button
          className='my-3 w-full'
          disabled={!values.smsOtp.token && !values.smsOtp.otp}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </LoginWrapper>
    </>

  );
};


export default OtpVerification