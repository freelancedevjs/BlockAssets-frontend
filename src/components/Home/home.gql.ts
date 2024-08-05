import { gql } from '@apollo/client';

const propertiesGQL = gql`
  query GetProperties($input: GetManyInput) {
    getProperties(input: $input) {
      count
      data {
        attachments {
          createdAt
          id
          status
          updatedAt
          url
        }
        createdAt
        basic_info
        subscription_info
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
        name
        secondDepositDate
        slug
        startsAt
        status
        subscriptions {
          amount
          createdAt
          deposit_amount
          id
          updatedAt
          warranty
        }
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
        content
      }
    }
  }
`;
