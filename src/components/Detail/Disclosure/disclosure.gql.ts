import { gql } from '@apollo/client';

const DisclosuresGQL = gql`
  query Disclosures($input: GetManyInput) {
    getDisclosures(input: $input) {
      data {
        content
        createdAt
        property {
          slug
        }
        id
        name
        slug
        status
        updatedAt
      }
      count
    }
  }
`;
