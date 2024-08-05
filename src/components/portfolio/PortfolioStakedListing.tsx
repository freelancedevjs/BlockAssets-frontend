import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoDark from '~/images/logoDark.png';
import USDTICON from '~/images/usdt-icon.png';

interface StakedItem {
  amount: string;
  value: string;
  name: string;
}

interface PortfolioStakedListingProps {
  stakedItems: StakedItem[];
}

const PortfolioStakedListing: React.FC<PortfolioStakedListingProps> = ({
  stakedItems,
}) => {
  return (
    <Link href='/portfolio/assets'>
      <div className='rounded-lg border border-gray-200 bg-white p-4'>
        {stakedItems.map((item, index) => (
          <div
            key={index}
            className={`mb-2 flex items-center justify-between ${
              index === stakedItems.length - 1
                ? 'border-b-2 border-dashed border-gray-200 pb-2'
                : 'border-b'
            } border-gray-200 pb-2`}
          >
            <div className='flex items-center'>
              <div className='text-gray-808080 text-2xl'>
                <Image
                  src={item.name === 'SOMI' ? logoDark : USDTICON}
                  alt='Logo'
                />
              </div>
              <p className='font-poppins ml-2 text-xs min-[400px]:text-sm sm:text-base font-medium text-[#808080]'>
                {item.name}
              </p>
            </div>

            <div className='flex flex-col items-end'>
              <p className='text-xs min-[400px]:text-sm lg:text-base text-right font-bold text-black'>
                {item.amount} SOMI
              </p>

              <div className='flex items-center'>
                <p className='font-poppins ml-1 text-xs min-[400px]:text-sm sm:text-base font-medium text-[#808080]'>
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className='my-3 flex items-center justify-between'>
          <p className='font-poppins whitespace-nowrap ml-2 text-sm  sm:text-base font-medium text-[#808080]'>
            Staked SOMI :
          </p>
          <p className='font-poppins ml-1 text-xs min-[400px]:text-sm  lg:text-base font-bold text-black text-right '>
            50.9580 SOMI
          </p>
        </div>

        <button className='block w-full rounded-md bg-black px-4 py-2  text-sm sm:text-base font-bold text-white md:hidden md:text-lg lg:text-xl xl:text-2xl'>
          Stack more
        </button>
      </div>
    </Link>
  );
};

export default PortfolioStakedListing;
