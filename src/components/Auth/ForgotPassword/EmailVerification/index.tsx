"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useWindowSize } from 'usehooks-ts';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import { usePasswordReset } from '@/contexts/passwordResetContext';

import MobileIcon from '~/images/mobile.png';


const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const { setCurrentStep } = usePasswordReset()
  const { width } = useWindowSize();


  const router = useRouter()
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const fillInputTimer = setTimeout(() => {
      setOtp("123456");
    }, 3000);

    const navigateTimer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, 5000);

    return () => {
      clearTimeout(fillInputTimer);
      clearTimeout(navigateTimer);
    };
  }, [router]);


  const handleMobileClick = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <>
      <MobileLoginWrapper title='Enter OTP' subTitle='Enter the OTP sent on your phone number' iconSrc={MobileIcon}>
        <Input
          value={otp}
          type='number'
          onChange={(e) => {
            e.preventDefault();
            setOtp(e.target.value);
          }}
          label='Enter OTP'
          placeholder='Ex. 4786'
        />
        <Button
          className='my-3 w-full'
          disabled={!otp}
          onClick={handleMobileClick}
        >
          Next
        </Button>
      </MobileLoginWrapper>
      <LoginWrapper className='hidden sm:flex' title="Enter Verification OTP" subtitle="We have send you a verification OTP to verify your email address">
        <OtpInput
          value={otp}
          containerStyle={{ display: "flex", gap: "10px" }}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} className='!w-8 !h-8 !rounded-sm border border-[#]' />}
        />
        <p className='mb-4 mt-6 text-xs text-[#808080]'>Don’t see it? Send a new OTP in  <span className='text-[#FF3F3F]'>{`00:${countdown}`} </span></p>
      </LoginWrapper>
    </>

  );
};


export default OtpVerification