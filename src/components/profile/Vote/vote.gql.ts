import { gql } from '@apollo/client';

export const GET_MANY_VOTE_LIST = gql`
  query GetManyVoteList($input: GetManyInput) {
    getMyVotes(input: $input) {
      count
      data {
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

export const GET_ONE_VOTE = gql`
  query GetOneVote($input: GetOneInput!) {
    getMyVote(input: $input) {
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
`;
