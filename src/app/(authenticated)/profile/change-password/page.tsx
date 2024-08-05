'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import MobileIcon from '~/images/mobile.png';
import LoginWrapper from '@/components/Auth/LoginWrapper';
import MobileLoginWrapper from '@/components/Auth/MobileWrapper';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import success from '~/images/successTick.png';
import { useUpdateMeMutation } from '@/generated/generated';
import { useToast } from '@/components/ui/Toast/use-toast';

const ChangePassword: React.FC = () => {
  const [currPassword, setCurrPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { toast } = useToast();

  const [newPasswordScreen, setNewPasswordScreen] = useState<boolean>(false);
  const [successScreen, setSuccessScreen] = useState<boolean>(false);
  const router = useRouter();

  const [updateMeMutation, { loading, error }] = useUpdateMeMutation();

  const handleClick = async () => {
    try {
      if (!currPassword || !newPassword || newPassword !== confirmPassword) {
        // Handle validation error
        return;
      }

      const { data } = await updateMeMutation({
        variables: {
          input: {
            password: currPassword,
            new_password: newPassword,
            confirm_new_password: confirmPassword,
          },
        },
      });

      if (data) {
        // Show success screen
        setSuccessScreen(true);
      }
    } catch (error) {
      toast({
        title: 'Failed',
        description: 'Invalid Password !',
        variant: 'destructive',
      });
      console.error('Error updating password:', error);
    }
  };
  const handleClickOk = () => {
    router.push('/profile');
  };

  const handleClickNext = () => {
    setNewPasswordScreen(true);
  };
  return (
    <>
      {successScreen ? (
        <>
          <LoginWrapper
            className='hidden sm:flex'
            title='Password reset'
            subtitle='Your new password has been successfully changed.'
          >
            <Image src={success} alt='success' width={80} height={80} />

            <Button className='mb-2 mt-6 w-full' onClick={handleClickOk}>
              Continue
            </Button>
          </LoginWrapper>
          <MobileLoginWrapper title='Password reset' iconSrc={MobileIcon}>
            <p className='text-center  text-lg  font-semibold'>
              Your new password has been successfully changed.
            </p>
            <Button className='mb-2 mt-6 w-full' onClick={handleClickOk}>
              Continue
            </Button>
          </MobileLoginWrapper>
        </>
      ) : (
        <>
          {newPasswordScreen ? (
            <>
              <MobileLoginWrapper
                title='Enter New Password'
                iconSrc={MobileIcon}
              >
                <Input
                  placeholder='password'
                  type='password'
                  label='New Password*'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Input
                  placeholder='password'
                  type='password'
                  label='Confirm Password*'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  className='mb-2 mt-6 w-full'
                  disabled={!newPassword || newPassword !== confirmPassword}
                  onClick={handleClick}
                >
                  Change Password
                </Button>
              </MobileLoginWrapper>
              <LoginWrapper
                className='hidden sm:flex'
                title='Set new password'
                subtitle='Your new password must be different to previously used passwords.'
              >
                <Input
                  placeholder='password'
                  type='password'
                  label='New Password*'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Input
                  placeholder='password'
                  type='password'
                  label='Confirm Password*'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  className='mb-2 mt-6 w-full'
                  disabled={!newPassword || newPassword !== confirmPassword}
                  onClick={handleClick}
                >
                  Change Password
                </Button>
              </LoginWrapper>
            </>
          ) : (
            <div>
              <MobileLoginWrapper
                title='Do you want to change password?'
                iconSrc={MobileIcon}
              >
                <Input
                  placeholder='password'
                  type='password'
                  label='Enter Current Password*'
                  value={currPassword}
                  onChange={(e) => setCurrPassword(e.target.value)}
                />

                <Button
                  className='my-3 w-full'
                  disabled={!currPassword}
                  onClick={handleClickNext}
                >
                  Continue
                </Button>
              </MobileLoginWrapper>
              <LoginWrapper
                className='hidden sm:flex'
                title='Do you want to change password?'
                subtitle='To change password, please provide your current password'
              >
                <Input
                  placeholder='password'
                  type='password'
                  label='Current Password*'
                  value={currPassword}
                  onChange={(e) => setCurrPassword(e.target.value)}
                />
                <Button
                  className='mb-2 mt-6 w-full'
                  disabled={!currPassword}
                  onClick={handleClickNext}
                >
                  Continue
                </Button>
              </LoginWrapper>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ChangePassword;
