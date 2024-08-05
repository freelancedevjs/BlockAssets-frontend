import * as React from 'react';

import ForgotPassword from '@/components/Auth/ForgotPassword';

import { PasswordResetProvider } from '@/contexts/passwordResetContext';

export default function ForgotPasswordPage() {
  return (
    <PasswordResetProvider>
      <ForgotPassword />
    </PasswordResetProvider>
  );
}
