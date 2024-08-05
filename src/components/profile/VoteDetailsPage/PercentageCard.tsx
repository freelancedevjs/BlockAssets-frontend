import React from 'react';
import PieChart from '@/components/PieChart';

const PercentageCard: React.FC = () => {
  return (
    <div className='percentage-card font-poppins mb-4 rounded-lg border border-gray-300 bg-white p-4'>
      <h2 className='mb-2 text-lg font-semibold text-black md:text-xl md:font-bold'>
        Percentage
      </h2>
      <div className='flex w-full'>
        <div className='percentage-info items-left flex w-1/2 flex-col text-left md:flex-row md:items-center'>
          <div className='mr-2'>
            <span className='p-2 text-xs font-medium text-[#333333] md:text-base'>
              Approve
            </span>
            <span className='p-2 text-sm font-bold text-[#0C78DB] md:hidden md:text-base md:font-semibold'>
              96%
            </span>
            <div className='flex gap-2 p-1'>
              <span className='hidden p-2 text-sm font-bold md:block md:text-base md:font-semibold'>
                96%
              </span>
              <span className='p-2 text-xs font-semibold text-[#808080] md:text-base'>
                1,683,330 SOMI
              </span>
            </div>
          </div>
          <div className='hidden h-[50px] border-r border-gray-300 md:block'></div>
          <div className='mx-2'>
            <span className='p-2 text-xs font-medium text-[#333333] md:text-base'>
              Reject
            </span>
            <span className='p-2 text-sm font-bold text-[#FF3F3F] md:hidden md:text-base md:font-semibold'>
              04%
            </span>
            <div className='flex gap-2 p-1'>
              <span className='hidden p-2 text-sm font-bold md:block md:text-base md:font-semibold'>
                04%
              </span>
              <span className='p-2 text-xs font-semibold text-[#808080] md:text-base'>
                76,378 SOMI
              </span>
            </div>
          </div>
        </div>
        <div className='hidden w-1/2 justify-end md:flex'>
          <PieChart tokens={[]} chartHeight={226} chartWidth={226} />
        </div>
        <div className='flex w-1/2 justify-end md:hidden'>
          <PieChart tokens={[]} chartHeight={131} chartWidth={131} />
        </div>
      </div>
    </div>
  );
};

export default PercentageCard;
