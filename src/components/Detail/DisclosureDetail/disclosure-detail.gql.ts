import { gql } from '@apollo/client';

const DisclosureDetailGQL = gql`
  query DisclosureDetail($input: GetOneInput!) {
    getDisclosure(input: $input) {
      content
      createdAt
      property {
        slug
        name
      }
      id
      name
      slug
      status
      updatedAt
    }
  }
`;
