import { gql } from '@apollo/client';

export const GET_NOTICE = gql`
  query GetNotice($input: GetOneInput!) {
    getNotice(input: $input) {
      content
      id
      image
      slug
      status
      title
    }
  }
`;

export const GET_MANY_NOTICES = gql`
  query GetManyNotices($input: GetManyInput) {
    getManyNotices(input: $input) {
      count
      data {
        content
        id
        image
        slug
        status
        title
      }
    }
  }
`;
