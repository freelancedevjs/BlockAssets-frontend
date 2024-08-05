import { gql } from '@apollo/client';

gql(`
  mutation SendOtpMutation($input: OtpSendInput!) {
    sendOtp(input: $input) {
      data {
        account
        attemptsRemaining
        expiresAt
        id
        resendAt
      }
      token
    }
  }
`);

gql(`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      jwt
      user {
        address
        city
        country
        createdAt
        dob
        email
        firstName
        id
        id
        lastName
        phone
        postalCode
        state
        updatedAt
        userType
        companyName
      }
    }
  }
`);

gql(`
mutation ResendEmailOtp($input: OtpReSendInput!) {
  resendEmailOtp(input: $input) {
    data {
      account
      expiresAt
      id
      resendAt
      attemptsRemaining
    }
    token
  }
}`);

gql(`mutation ResendPhoneOtp($input: OtpReSendInput!) {
  resendPhoneOtp(input: $input) {
    data {
      account
      attemptsRemaining
      expiresAt
      id
      resendAt
    }
    token
  }
}`);
