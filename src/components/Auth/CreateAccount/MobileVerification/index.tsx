'use client';
import React, { FC } from 'react';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import { useSignUp } from '@/contexts/signUpContext';

import MobileIcon from '~/images/mobile.png';
import { ISignupStepProps } from '@/components/Auth/CreateAccount';
import { useSendOtpMutationMutation } from '@/generated/generated';
import { useToast } from '@/components/ui/Toast/use-toast';

const MobileVerification: FC<ISignupStepProps> = ({ formik }) => {
  const { setCurrentStep } = useSignUp();
  const { toast } = useToast()
  const [sendMobileOtp, { data, loading, error }] = useSendOtpMutationMutation()
  const { values, handleBlur, handleChange, handleSubmit, errors } = formik

  const handleSendOtp = async () => {
    try {
      const result = await sendMobileOtp({
        variables: {
          input: {
            phone: values.phone.toString()
          }
        }
      })
      if (result) {
        formik.setFieldValue("smsOtp", { ...values.smsOtp, token: result.data?.sendOtp.token })
      }
      console.log(result, "smsOtp OTP")
    } catch (error) {
      console.log("Error while sending sms OTP", error)
    }
  }

  console.log(data, "mobileOtp data")

  const handleClick = async () => {
    if (Object.keys(formik.errors).length < 1) {
      await handleSendOtp()
      setCurrentStep((prev) => prev + 1);
    } else {
      toast({ title: "Fill the form correctly !", variant: "destructive" })
    }
  };

  return (
    <>
      {/* <MobileUI /> */}
      <MobileLoginWrapper title='Verify your number' subTitle='We will send you OTP on this phone number' iconSrc={MobileIcon}>
        <Input
          value={values.phone}
          name='phone'
          type='number'
          onChange={handleChange}
          label='Mobile Number'
          placeholder='0000 0000 00'
          error={errors.phone}
        />
        <Button
          className='my-3 w-full'
          onClick={handleClick}
        >
          Next
        </Button>
      </MobileLoginWrapper>
      {/* Desktop UI */}
      <LoginWrapper
        className='hidden sm:flex'
        title='Keep your account secure'
        subtitle='Enter your phone number and we’ll send OTP to secure your account. No spam. '
      >
        <Input
          placeholder='0000 000 000'
          label='Mobile Number'
          name='phone'
          type='number'
          onChange={handleChange}
          error={errors.phone}
          value={values.phone}
        />
        <Button
          className='mb-2 mt-6 w-full'
          // disabled={Object.keys(formik.errors).length > 0}
          onClick={handleClick}
        >
          Next
        </Button>
      </LoginWrapper>
    </>
  );
};

export default MobileVerification;
