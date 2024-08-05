import { gql } from '@apollo/client';

export const GET_ALL_FAQS = gql`
  query GetFaqs($input: GetManyInput) {
    getFaqs(input: $input) {
      count
      data {
        content
        id
        status
        title
      }
    }
  }
`;
