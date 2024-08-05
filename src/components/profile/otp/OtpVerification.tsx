import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import Input from '@/components/ui/Input';
import MobileIcon from '~/images/mobile.png';
import LoginWrapper from '@/components/Auth/LoginWrapper';
import OTPInput from 'react-otp-input';

interface OtpVerificationProps {
  otp: string;
  setOtp: (otp: string) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  otp,
  setOtp,
  setCurrentStep,
}) => {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleMobileClick = () => {
    if (otp.length === 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleOnChange = (otpValue: string) => {
    setOtp(otpValue);
    if (otpValue.length === 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <MobileLoginWrapper
        title='Enter OTP'
        subTitle='Enter the OTP sent on your phone number'
        iconSrc={MobileIcon}
      >
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
      <LoginWrapper
        className='hidden sm:flex'
        title='Enter Verification OTP'
        subtitle='We have send you a verification OTP to verify your email address'
      >
        <OTPInput
          value={otp}
          containerStyle={{ display: 'flex', gap: '10px' }}
          onChange={handleOnChange}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              className='!h-8 !w-8 !rounded-sm border border-[#]'
            />
          )}
        />
        <p className='mb-4 mt-6 text-xs text-[#808080]'>
          Don’t see it? Send a new OTP in{' '}
          <span className='text-[#FF3F3F]'>{`00:${countdown}`} </span>
        </p>
      </LoginWrapper>
    </>
  );
};

export default OtpVerification;
