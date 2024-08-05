'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import MobileIcon from '~/images/mobile.png';
import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import success from '~/images/successTick.png';
import ErrorDialog from '@/components/Auth/ForgotPassword/ErrorPopup';
import OTPInput from 'react-otp-input';
import { useMutation } from '@apollo/client';
import {
  SEND_MY_OTP_MUTATION,
  UPDATE_ME_MUTATION,
} from '@/components/profile/AccountSetting/updateMe.gql';
import { useToast } from '@/components/ui/Toast/use-toast';
import OtpVerification from '@/components/profile/otp/OtpVerification';

const ChangeNumber: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<number | string>('');
  const [otp, setOtp] = useState('');

  const [successScreen, setSuccessScreen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { toast } = useToast();

  const router = useRouter();

  const handleClickOk = () => {
    router.push('/profile');
  };
  const [sendMyOtp, { loading, error }] = useMutation(SEND_MY_OTP_MUTATION);
  const [updateMe, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_ME_MUTATION);

  const handleContinue = async () => {
    try {
      const { data } = await sendMyOtp({
        variables: {
          input: {
            email: true,
          },
        },
      });

      if (data) {
        toast({
          title: 'Otp sent successfully',
          description: 'success !',
        });
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast({
        title: 'Error sending OTP:',
        variant: 'destructive',
      });
    }
  };

  const handleClick = async () => {
    try {
      const { data } = await updateMe({
        variables: {
          input: {
            phone: mobileNumber,
            phoneOtp: {
              otp: otp,
            },
          },
        },
      });

      if (data) {
        setSuccessScreen(true);
        toast({
          title: 'Phone changed successfully',
          description: 'success !',
        });
      }
    } catch (error) {
      console.error('Error updating phone number:', error);
      toast({
        title: 'Error updating phone number:',
        variant: 'destructive',
      });
    }
  };

  const renderSuccessScreen = () => (
    <>
      <LoginWrapper
        className='hidden sm:flex'
        title='Phone number reset'
        subtitle='Your new mobile number has been successfully changed.'
      >
        <Image src={success} alt='success' width={80} height={80} />

        <Button className='mb-2 mt-6 w-full' onClick={handleClickOk}>
          Ok
        </Button>
      </LoginWrapper>
      <MobileLoginWrapper title='' iconSrc={MobileIcon}>
        <p className='text-center  text-lg  font-semibold'>
          Phone Number has been changed
        </p>
        <Button className='mb-2 mt-6 w-full' onClick={handleClickOk}>
          Ok
        </Button>
      </MobileLoginWrapper>
    </>
  );

  interface EnterEmailProps {
    handleContinue: () => void;
  }

  const EnterEmail: React.FC<EnterEmailProps> = ({ handleContinue }) => {
    const [openErrorPopup, setOpenErrorPopup] = useState(false);
    const [email, setEmail] = useState('');

    return (
      <LoginWrapper
        className='text-center'
        title='Verify Your Email'
        subtitle='No worries, Please enter your email so we can send you a verification OTP'
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your Email'
          label='Email'
        />
        <Button className='mb-2 mt-6 w-full' onClick={handleContinue}>
          Continue
        </Button>

        <ErrorDialog open={openErrorPopup} onOpenChange={setOpenErrorPopup} />
      </LoginWrapper>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <EnterEmail handleContinue={handleContinue} />;
      case 2:
        return (
          <OtpVerification
            otp={otp}
            setOtp={setOtp}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return successScreen ? renderSuccessScreen() : renderChangeNumberForm();
      default:
        return null;
    }
  };

  const renderChangeNumberForm = () => (
    <>
      <MobileLoginWrapper title='Set new phone number' iconSrc={MobileIcon}>
        <Input
          value={mobileNumber}
          type='number'
          onChange={(e) => setMobileNumber(e.target.value)}
          label='New Mobile Number*'
          placeholder='0000 0000 00'
        />
        <Button
          className='my-3 w-full'
          disabled={!mobileNumber}
          onClick={handleClick}
        >
          Change Phone number
        </Button>
      </MobileLoginWrapper>
      <LoginWrapper
        className='hidden sm:flex'
        title='Set new phone number'
        subtitle='Your new phone number must be different from the previously used phone number.'
      >
        <Input
          placeholder='0000 000 000'
          type='number'
          label='New Mobile Number*'
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Button
          className='mb-2 mt-6 w-full'
          disabled={!mobileNumber || loading}
          onClick={handleClick}
        >
          {updateLoading ? 'changing' : 'Change Phone number'}
        </Button>
      </LoginWrapper>
    </>
  );

  return <>{renderCurrentStep()}</>;
};

export default ChangeNumber;
