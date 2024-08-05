import { gql } from "@apollo/client";


gql(`mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    jwt
    user {
      firstName
      lastName
      email
      userType
      createdAt
    }
  }
}`)

gql(`query getUserQuery {
  getMe {
    firstName
    lastName
    dob
    email
    userType
    companyName
    phone
    country
    tnc_status
  }
}`)