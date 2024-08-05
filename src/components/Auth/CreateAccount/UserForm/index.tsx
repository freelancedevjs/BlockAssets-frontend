'use client';
import React, { FC } from 'react';

import Company from '@/components/Auth/CreateAccount/UserForm/Company';
import Individual from '@/components/Auth/CreateAccount/UserForm/Individual';
import Investor from '@/components/Auth/CreateAccount/UserForm/Investor';
import LoginWrapper from '@/components/Auth/LoginWrapper';

import { useUserType } from '@/contexts/userTypeContext';
import { ISignupStepProps } from '@/components/Auth/CreateAccount';

const UserForm: FC<ISignupStepProps> = ({ formik }) => {
  const { selectedUserType } = useUserType();
  console.log(selectedUserType, 'SelectedUtype');
  return (
    <LoginWrapper
      title='Welcome to Block Assets!'
      subtitle='Tell us Little about you'
    >
      <div className='mt-4'>
        {selectedUserType === 'Individual' && <Individual formik={formik} />}
        {selectedUserType === 'Corporate' && <Company formik={formik} />}
        {selectedUserType === 'Accredited Investor' && (
          <Investor formik={formik} />
        )}
      </div>
    </LoginWrapper>
  );
};

export default UserForm;
