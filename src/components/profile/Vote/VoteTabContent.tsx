import React from 'react';
import { useQuery } from '@apollo/client';
import VotingCard from './VotingCard';
import { GET_MANY_VOTE_LIST } from '@/components/profile/Vote/vote.gql';
import Loader from '@/components/Loader';

const VoteTabContent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MANY_VOTE_LIST);

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>
          <Loader />
        </p>
      </div>
    );
  }

  if (error || !data || !data.getMyVotes || !data.getMyVotes.data) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>Error: {error ? error.message : 'Data not available'}</p>
      </div>
    );
  }

  const voteList = data?.getMyVotes?.data ?? [];

  return (
    <div className='mt-3'>
      {voteList.map((vote: any) => (
        <VotingCard key={vote.id} vote={vote} />
      ))}
    </div>
  );
};

export default VoteTabContent;
