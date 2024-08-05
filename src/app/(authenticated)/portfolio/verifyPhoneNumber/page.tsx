'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import MobileIcon from '~/images/mobile.png';
import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import Input from '@/components/ui/Input';
import OTPInput from 'react-otp-input';
import PaymentConfirmationModal from '@/components/portfolio/PaymentConfirmationModal';
import SuccessModal from '@/components/portfolio/SuccessModal';
import FailureModal from '@/components/portfolio/FailureModal';

const VerifyPhoneNumber: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<number | string>('');
  const [otp, setOtp] = useState<string>('');
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState<boolean>(false);

  const [countdown, setCountdown] = useState(15);

  const handleClick = () => {
    setShowOtpInput(true);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
    if (otpValue.length === 6) {
      setIsPaymentModalOpen(true);
    }
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };
  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };
  const handleConfirmPayment = () => {
    setIsSuccessModalOpen(true);
  };
  const handleCloseFailureModal = () => {
    setIsFailureModalOpen(false);
  };
  const handleCancelClick = () => {
    setIsFailureModalOpen(true);
  };

  return (
    <>
      {showOtpInput ? (
        <LoginWrapper
          title='Enter Verification OTP'
          subtitle={`We sent a six-digit to ${mobileNumber} `}
        >
          <OTPInput
            value={otp}
            containerStyle={{ display: 'flex', gap: '10px' }}
            onChange={handleOtpChange}
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
      ) : (
        <>
          <MobileLoginWrapper title='Enter Number' iconSrc={MobileIcon}>
            <Input
              value={mobileNumber}
              type='number'
              onChange={(e) => setMobileNumber(e.target.value)}
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
              onChange={(e) => setMobileNumber(e.target.value)}
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
      )}
      <PaymentConfirmationModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        onConfirm={handleConfirmPayment}
        onCancel={handleCancelClick}
      />
      <SuccessModal open={isSuccessModalOpen} close={handleCloseSuccessModal} />
      <FailureModal open={isFailureModalOpen} close={handleCloseFailureModal} />
    </>
  );
};

export default VerifyPhoneNumber;
