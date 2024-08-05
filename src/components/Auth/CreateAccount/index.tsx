"use client"

import React, { useMemo } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik, FormikContextType } from 'formik';
import * as Yup from 'yup';
import Createaccount from '@/components/Auth/CreateAccount/CreateAccount';
import EmailOtpVerification from '@/components/Auth/CreateAccount/EmailOtpVerification';
import MobileVerification from '@/components/Auth/CreateAccount/MobileVerification';
import OtpVerification from '@/components/Auth/CreateAccount/OtpVerification';
import UserForm from '@/components/Auth/CreateAccount/UserForm';

import { useSignUp } from '@/contexts/signUpContext';

const initialValues = {
  "address": "",
  "city": "",
  "companyName": "",
  "country": "",
  "dob": "",
  "email": "",
  "emailOtp": {
    "otp": "",
    "token": ""
  },
  "firstName": "",
  "lastName": "",
  "password": "",
  "phone": "",
  "postalCode": "",
  "smsOtp": {
    "otp": "",
    "token": ""
  },
  "state": "",
  "tnc_status": "",
  "userType": ""
}


export type ISignupFormData = typeof initialValues;
export interface ISignupStepProps {
  formik: FormikContextType<ISignupFormData>;
}

const SignUp = () => {
  const { currentStep } = useSignUp()

  const validationSchemaStep1 = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
  });

  const validationSchemaStep2 = Yup.object().shape({
    emailOtp: Yup.object().shape({
      token: Yup.string(),
      otp: Yup.number()
        .required('OTP is required')
        .test(
          'len',
          'OTP must be exactly 6 digits',
          val => String(val).length === 6
        )
    }),
  });

  const validationSchemaStep3 = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    companyName: Yup.string(),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    postalCode: Yup.number()
      .required('Postal code is required')
      .test(
        'len',
        'It must be exactly 6 digits',
        val => String(val).length === 6
      ),
    dob: Yup.date().required('Date of Birth is required')
  });

  const validationSchemaStep4 = Yup.object().shape({
    phone: Yup.number()
      .required('Phone is required')
      .test(
        'len',
        'Phone number must be at most 15 digits',
        val => String(val).length <= 15
      )
  });

  const validationSchemaStep5 = Yup.object().shape({
    smsOtp: Yup.object().shape({
      token: Yup.string(),
      otp: Yup.number()
        .required('OTP is required')
        .test(
          'len',
          'OTP must be exactly 6 digits',
          val => String(val).length === 6
        )
    }),
  });



  const validationSchemaForStep = useMemo(() => {
    switch (currentStep) {
      case 0:
        return validationSchemaStep1;
      case 1:
        return validationSchemaStep2;
      case 2:
        return validationSchemaStep3;
      case 3:
        return validationSchemaStep4;
      case 4:
        return validationSchemaStep5;
      default:
        return Yup.object().shape({});
    }
  }, [currentStep])

  const formik = useFormik<ISignupFormData>({
    initialValues: initialValues,
    validationSchema: validationSchemaForStep,
    onSubmit(values, formikHelpers) {
      console.log(`Values are: ${values}, and helpers ${formikHelpers}`)
    },
  })

  const Steps = [
    <Createaccount formik={formik} key={1} />,
    <EmailOtpVerification formik={formik} key={2} />,
    <UserForm formik={formik} key={3} />,
    <MobileVerification formik={formik} key={4} />,
    <OtpVerification formik={formik} key={5} />,
  ]

  return (
    <>
      {Steps[currentStep]}
    </>
  )
}

export default SignUp