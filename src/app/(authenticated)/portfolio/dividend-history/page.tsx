'use client';

import DividendHistoryDetailCard from '@/components/portfolio/dividendHistory/DividendHistoryDetailCard';
import Link from 'next/link';
import * as React from 'react';

const DividendHistory: React.FC = () => {
  return (
    <div className='mx-2'>
      <h1 className='mb-2 hidden text-[22px] font-bold text-black md:block'>
        <Link href='/portfolio'>
          <span className='border-r-2 pr-2 font-normal text-[#808080]'>
            Portfolio
          </span>
        </Link>
        <span className='Poppins pl-2 text-xl font-medium'>
          Dividend history
        </span>
      </h1>

      <div className='rounded-lg bg-white p-0 shadow-md md:p-10'>
        <DividendHistoryDetailCard />
        <DividendHistoryDetailCard />
        <DividendHistoryDetailCard />
        <DividendHistoryDetailCard />
        <DividendHistoryDetailCard />
      </div>
    </div>
  );
};

export default DividendHistory;
