import React from 'react';

interface VotingResultCardProps {
  buttonText: string;
}

const VotingResultCard: React.FC<VotingResultCardProps> = ({ buttonText }) => {
  const buttonStyles =
    buttonText === 'Approved'
      ? {
          backgroundColor: '#D6FBD8',
          color: '#23B43A',
        }
      : {
          backgroundColor: '#FBD6D6',
          color: '#FF3F3F',
        };
  return (
    <div className='mb-4 flex h-[140px] flex-col items-center gap-[20px] rounded-xl bg-black md:flex-row md:justify-between md:gap-0'>
      <div className='mt-5 text-base font-semibold text-white md:my-0 md:pl-6 md:text-[18px] md:font-[500]'>
        Voting Result
      </div>

      <button
        className='rounded-3xl px-9 py-2 font-semibold md:mr-6 md:px-8'
        style={buttonStyles}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default VotingResultCard;
