import { gql } from '@apollo/client';

const detailGQL = gql`
  query GetProperty($input: String!) {
    getProperty(input: $input) {
      basic_info
      subscription_info
      content
      createdAt
      disclosures {
        content
        createdAt
        id
        name
        slug
        status
        updatedAt
      }
      endsAt
      firstDepositDate
      id
      images {
        createdAt
        id
        updatedAt
        url
      }
      attachments {
        createdAt
        id
        url
        name
        status
        updatedAt
      }
      name
      secondDepositDate
      slug
      startsAt
      status
      updatedAt
      votes {
        content
        createdAt
        endsAt
        id
        name
        slug
        startsAt
        updatedAt
      }
    }
  }
`;
