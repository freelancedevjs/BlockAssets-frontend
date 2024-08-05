import { gql } from '@apollo/client';

export const GET_MANY_PAGE_LIST = gql`
  query GetManyPageList($input: GetManyInput) {
    getPages(input: $input) {
      count
      data {
        content
        id
        name
        slug
        status
      }
    }
  }
`;

export const GET_ONE_PAGE = gql`
  query GetOnePage($input: GetOneInput!) {
    getOnePage(input: $input) {
      id
      name
      content
      status
      slug
    }
  }
`;
