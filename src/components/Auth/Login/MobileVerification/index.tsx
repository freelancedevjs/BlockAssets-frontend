'use client';
import React, { useState } from 'react';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import MobileIcon from '~/images/mobile.png';

const MobileVerification = ({setCurrentStep,mobileNumber, setMobileNumber}) => {

  const handleClick = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      {/* <MobileUI /> */}
      <MobileLoginWrapper title='Verify your number' subTitle='We will send you OTP on this phone number' iconSrc={MobileIcon}>
        <Input
          value={mobileNumber}
          type='number'
          onChange={(e) => {
            e.preventDefault();
            setMobileNumber(Number(e.target.value));
          }}
          label='Mobile Number'
          placeholder='0000 0000 00'
        />
        <Button
          className='my-3 w-full'
          disabled={!mobileNumber}
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
          type='number'
          label='Mobile Number'
          value={mobileNumber}
          onChange={(e) => {
            e.preventDefault();
            setMobileNumber(Number(e.target.value));
          }}
        />
        <Button
          className='mb-2 mt-6 w-full'
          disabled={!mobileNumber}
          onClick={handleClick}
        >
          Next
        </Button>
      </LoginWrapper>
    </>
  );
};

export default MobileVerification;
