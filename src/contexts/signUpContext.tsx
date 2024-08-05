"use client"
import React, { createContext, useContext, useState } from 'react';

interface SignUpContextProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  mobileNumber?: number;
  setMobileNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  companyName?: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string | undefined>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  postalCode?: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  state?: string;
  setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  country?: string;
  setCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
  smsOtp?: string;
  setSmsOtp: React.Dispatch<React.SetStateAction<string | undefined>>;
  emailOtp?: string;
  setEmailOtp: React.Dispatch<React.SetStateAction<string | undefined>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  dob: string;
  setDob: React.Dispatch<React.SetStateAction<string>>;
  tncStatus: boolean | null;
  setTncStatus: React.Dispatch<React.SetStateAction<boolean | null>>;
}


const SignUpContext = createContext<SignUpContextProps>({
  currentStep: 0,
  setCurrentStep: (value) => value,
  mobileNumber: undefined,
  setMobileNumber: (value) => value,
  email: undefined,
  setEmail: (value) => value,
  address: "",
  setAddress: (value) => value,
  companyName: undefined,
  setCompanyName: (value) => value,
  city: "",
  setCity: (value) => value,
  postalCode: undefined,
  setPostalCode: (value) => value,
  state: undefined,
  setState: (value) => value,
  country: undefined,
  setCountry: (value) => value,
  smsOtp: undefined,
  setSmsOtp: (value) => value,
  emailOtp: undefined,
  setEmailOtp: (value) => value,
  password: "",
  setPassword: (value) => value,
  userType: "",
  setUserType: (value) => value,
  firstName: "",
  setFirstName: (value) => value,
  lastName: "",
  setLastName: (value) => value,
  dob: "",
  setDob: (value) => value,
  tncStatus: null,
  setTncStatus: (value) => value,
});


export const SignUpProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [email, setEmail] = useState<string | undefined>();
  const [mobileNumber, setMobileNumber] = useState<number | undefined>();

  const [address, setAddress] = useState<string>("")
  const [companyName, setCompanyName] = useState<string | undefined>()
  const [city, setCity] = useState<string>("")
  const [postalCode, setPostalCode] = useState<string | undefined>()
  const [state, setState] = useState<string | undefined>()
  const [country, setCountry] = useState<string | undefined>()
  const [smsOtp, setSmsOtp] = useState<string | undefined>()
  const [emailOtp, setEmailOtp] = useState<string | undefined>()
  const [password, setPassword] = useState<string>("")
  const [userType, setUserType] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [dob, setDob] = useState<string>("")
  const [tncStatus, setTncStatus] = useState<boolean | null>(null)

  return (
    <SignUpContext.Provider value={{
      currentStep,
      setCurrentStep,
      mobileNumber,
      setMobileNumber,
      email,
      setEmail,
      address,
      setAddress,
      companyName,
      setCompanyName,
      city,
      setCity,
      postalCode,
      setPostalCode,
      state,
      setState,
      country,
      setCountry,
      smsOtp,
      setSmsOtp,
      emailOtp,
      setEmailOtp,
      password,
      setPassword,
      userType,
      setUserType,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      dob,
      setDob,
      tncStatus,
      setTncStatus,
    }}>
      {children}
    </SignUpContext.Provider>

  )
};

export const useSignUp = () => {
  const { currentStep,
    setCurrentStep,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    address,
    setAddress,
    companyName,
    setCompanyName,
    city,
    setCity,
    postalCode,
    setPostalCode,
    state,
    setState,
    country,
    setCountry,
    smsOtp,
    setSmsOtp,
    emailOtp,
    setEmailOtp,
    password,
    setPassword,
    userType,
    setUserType,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dob,
    setDob,
    tncStatus,
    setTncStatus, } = useContext(SignUpContext);

  return {
    currentStep,
    setCurrentStep,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    address,
    setAddress,
    companyName,
    setCompanyName,
    city,
    setCity,
    postalCode,
    setPostalCode,
    state,
    setState,
    country,
    setCountry,
    smsOtp,
    setSmsOtp,
    emailOtp,
    setEmailOtp,
    password,
    setPassword,
    userType,
    setUserType,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dob,
    setDob,
    tncStatus,
    setTncStatus,
  };
};
