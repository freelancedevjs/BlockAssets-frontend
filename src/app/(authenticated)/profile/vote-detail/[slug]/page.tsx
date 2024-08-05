'use client';

import { GET_ONE_VOTE } from '@/components/profile/Vote/vote.gql';
import DetailPointsCard from '@/components/profile/VoteDetailsPage/DetailPointsCard';
import MyVotingPowerCard from '@/components/profile/VoteDetailsPage/MyVotingPowerCard';
import PercentageCard from '@/components/profile/VoteDetailsPage/PercentageCard';
import SomiVoteConfirmationModal from '@/components/profile/VoteDetailsPage/SomiVoteConfirmationModal';
import TurnoutCard from '@/components/profile/VoteDetailsPage/TurnoutCard';
import VotingResultCard from '@/components/profile/VoteDetailsPage/VotingResultCard';
import { useQuery } from '@apollo/client';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import * as React from 'react';

const VoteDetails: React.FC = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [hasVoted, setHasVoted] = React.useState<boolean>(false);
  const [resultText, setResultText] = React.useState<string>('');

  const { loading, error, data } = useQuery(GET_ONE_VOTE, {
    variables: { input: { where: { slug } } },
  });

  React.useEffect(() => {
    if (data && data.getMyVote) {
      // Do something with the fetched data, like setting state
    }
  }, [data]);

  const handleApprove = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmVote = () => {
    setHasVoted(true);
    handleCloseModal();
  };
  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const result = urlSearchParams.get('result');

    if (result) {
      const resultValue = result.toString().toLowerCase();
      if (resultValue === 'approved' || resultValue === 'rejected') {
        setResultText(
          resultValue.charAt(0).toUpperCase() + resultValue.slice(1)
        );
      }
    }
  }, []);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('result', resultText.toLowerCase());

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${searchParams.toString()}`
    );
  }, [resultText]);

  return (
    <div className='mx-2 '>
      <h1 className='mb-2 hidden text-[22px] font-bold text-black md:block'>
        <Link href='/profile'>
          <span className='border-r-2 pr-2 font-normal text-[#808080]'>
            Profile
          </span>
        </Link>
        <span className='Poppins pl-2 text-xl font-semibold'>Vote detail</span>
      </h1>

      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <Link href='/profile'>
            <ChevronLeft />
          </Link>

          <div className=' text-lg font-semibold'>Vote detail</div>
          <div></div>
        </div>
      </div>
      <div className='rounded-lg  p-0 md:bg-white md:p-8'>
        {resultText && <VotingResultCard buttonText={resultText} />}
        <DetailPointsCard />
        <MyVotingPowerCard hasVoted={hasVoted} />
        <TurnoutCard />
        <PercentageCard />

        {hasVoted ? (
          <div className='items center flex justify-center '>
            <button
              className='stake-button w-full rounded-md bg-[#E6E6E6] px-8 py-2.5 text-base font-semibold text-[#B3B3B3]  md:w-auto md:px-10 md:py-3.5'
              disabled
            >
              Already Voted
            </button>
          </div>
        ) : (
          <>
            <div className='items center m-8  flex justify-center space-x-4'>
              <button className='stake-button rounded-md bg-[#F10707] px-8 py-2.5 text-base font-semibold text-white md:bg-[#808080] md:px-10 md:py-3.5'>
                Reject
              </button>
              <button
                onClick={handleApprove}
                className='stake-button rounded-md bg-[#0C78DB] px-8 py-2.5 text-base font-semibold text-white md:bg-black md:px-10 md:py-3.5'
              >
                Approve
              </button>
            </div>
          </>
        )}
      </div>
      <SomiVoteConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmVote}
        setResultText={setResultText}
      />
    </div>
  );
};

export default VoteDetails;
