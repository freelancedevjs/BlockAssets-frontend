import React from 'react';

const TurnoutCard: React.FC = () => {
  return (
    <div className='turnout-card font-poppins mb-4 rounded-lg border border-gray-300 bg-white p-4'>
      <div className='flex justify-between'>
        <h2 className='text-lg font-semibold  md:text-xl md:font-bold'>
          Turnout
        </h2>
        <p className='turnout-percentage text-right text-base font-bold md:text-2xl'>
          86%
        </p>
      </div>
      <div className='bg-primary-gray my-3 h-2 rounded-full md:my-2 md:h-3 md:w-full'>
        <div
          style={{ width: `${86}%` }}
          className='h-full rounded-full bg-[#23B43A]'
        ></div>
      </div>
      <div className='turnout-info flex justify-between'>
        <p className='text-xs text-gray-500 md:text-base'>Participated SOMI</p>
        <p className='text-right text-sm font-semibold md:text-base'>
          1,759,708 SOMI
        </p>
      </div>
      <div className='turnout-info flex justify-between'>
        <p className='text-xs text-gray-500 md:text-base'>Total SOMI</p>
        <p className='text-right text-sm font-semibold md:text-base'>
          2,036,000 SOMI
        </p>
      </div>
    </div>
  );
};

export default TurnoutCard;
