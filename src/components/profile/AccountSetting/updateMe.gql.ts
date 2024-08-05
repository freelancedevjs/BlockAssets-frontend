import { gql } from '@apollo/client';

export const UPDATE_ME_MUTATION = gql`
  mutation UpdateMe($input: UpdateUserInput!) {
    updateMe(input: $input)
  }
`;

export const SEND_MY_OTP_MUTATION = gql`
  mutation SendMyOtp($input: MyOtpSendInput!) {
    sendMyOtp(input: $input) {
      data {
        expiresAt
      }
    }
  }
`;

export const SIGN_OUT_MUTATION = gql`
  mutation SignOut {
    signOut {
      success
    }
  }
`;

export const DELETE_ACCOUNT_MUTATION = gql`
  mutation DeleteAccount {
    deleteAccount {
      success
    }
  }
`;
