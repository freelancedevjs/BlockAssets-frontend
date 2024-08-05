import * as React from 'react';

import SignUp from '@/components/Auth/CreateAccount';

import { SignUpProvider } from '@/contexts/signUpContext';

export default function SignUpPage() {
  return (
      <SignUpProvider>
        <SignUp />
      </SignUpProvider>
    //  <Individual/> 
    // < Company />
    // <MobileVerification />
    // <OtpVerification />
    // <Wallet />
  );
}
