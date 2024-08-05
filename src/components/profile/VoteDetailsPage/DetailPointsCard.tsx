import React from 'react';

interface DetailPointsCardProps {
  data?: string[];
}

const details = [
  '* Trade will be suspended from the beginning of the vote until the clearance sale.',
  '1. Property to sell: Jalan Bani Bu hassan',
  '2. Voting period: 23 Jun, 2023 - 30 Jun, 2023 15:00',
  '3. Voters: Investors staking SOMI coins in the property until 23:59 on 1 June, 2023',
  '4. Reason for agenda: Whether to approve the sale of "Jalanbani Buhasan" to the buyer for an amount of $11.7 billion',
];

const DetailPointsCard: React.FC<DetailPointsCardProps> = ({
  data = details,
}) => {
  return (
    <div className='detail-points-card mb-4 rounded-lg border border-gray-300 bg-white p-4 text-left'>
      <h2 className='font-poppins mb-2 text-xl font-bold'>Detail</h2>
      {data.map((item, index) => (
        <p
          key={index}
          className={`font-inter mb-2 text-xs	 text-[#000000] md:text-sm md:text-[#333333] ${
            index === 0 ? 'mb-4' : ''
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default DetailPointsCard;
