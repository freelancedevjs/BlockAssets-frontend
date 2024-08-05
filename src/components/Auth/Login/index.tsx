"use client"
import React, { useState } from 'react'

import LoginInput from '@/components/Auth/Login/LoginInput'
import MobileVerification from '@/components/Auth/Login/MobileVerification'
import OtpVerification from '@/components/Auth/Login/OtpVerification'
import { Formik, Form, Field, ErrorMessage, useFormik, FormikContextType } from 'formik';
import * as Yup from 'yup';



const initialValues = {
  "password": "",
  "email": "",
}


export type ISignInFormData = typeof initialValues;
export interface ISignupStepProps {
  formik: FormikContextType<ISignInFormData>;
}



const Login = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik<ISignInFormData>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit(values, formikHelpers) {
      console.log(`Values are: ${values}, and helpers ${formikHelpers}`)
    },
  })



  return (
    <>
      <LoginInput setCurrentStep={setCurrentStep} formik={formik} />
    </>
  )
}




export default Login