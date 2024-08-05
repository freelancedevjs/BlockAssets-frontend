"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import MobileIcon from '~/images/mobile.png';

const Step2 = ({ mobileNumber }) => {
  const [otp, setOtp] = useState('');
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
    return () => {
      clearTimeout(fillInputTimer);
    };
  }, [router]);

  const handleMobileClick = () => {
    console.log("Clicked")
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
          disabled={!mobileNumber}
          onClick={handleMobileClick}
        >
          Next
        </Button>
      </MobileLoginWrapper>

      <LoginWrapper className='hidden sm:flex' title="Enter Verification OTP" subtitle={`We sent a six-digit to ${mobileNumber} `}>
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


export default Step2