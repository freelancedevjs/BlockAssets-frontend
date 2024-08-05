import React from 'react';

interface MyVotingPowerCardProps {
  hasVoted: boolean;
}
const MyVotingPowerCard: React.FC<MyVotingPowerCardProps> = ({ hasVoted }) => {
  return (
    <div className='my-voting-power-card mb-4 rounded-lg border border-gray-300 bg-white p-4 text-left'>
      <div className='flex justify-between'>
        <h2 className='font-poppins mb-1 text-lg font-semibold md:text-xl md:font-bold'>
          My Voting Power
        </h2>
        <p className='voting-percentage font-poppins mb-1 text-lg font-bold md:text-2xl'>
          0.29%
        </p>
      </div>
      <hr className='my-4 hidden border-gray-300 md:block' />
      <div className='vote-info mb-2 mt-2 flex justify-between md:mt-0'>
        <p className='font-poppins font-medium text-[#333333]'>My SOMI Vote</p>
        <p className='font-poppins text-base font-semibold text-black'>
          6,000 SOMI
        </p>
      </div>
      <div className='vote-info flex justify-between'>
        <p className='font-poppins font-medium text-[#333333]'>
          Total SOMI Vote
        </p>
        <p className='font-poppins text-base font-semibold text-black'>
          2,036,000 SOMI
        </p>
      </div>
      <div className='my-4 flex items-center justify-center'>
        <button
          className={`stake-button w-full rounded-lg ${
            hasVoted
              ? 'bg-[#E6E6E6] px-8 py-2.5 text-base font-semibold text-[#B3B3B3]'
              : 'bg-black px-9 py-4 text-base font-semibold text-white'
          } md:w-auto md:rounded-md`}
          disabled={hasVoted}
        >
          Stake More SOMI
        </button>
      </div>
    </div>
  );
};

export default MyVotingPowerCard;
