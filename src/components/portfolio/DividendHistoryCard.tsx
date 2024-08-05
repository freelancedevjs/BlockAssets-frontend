import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const DividendHistoryCard = ({ data }) => {
  return (
    <Link href='/portfolio/dividend-history'>
      <div className=' md:[400px] h-[480px] flex flex-col gap-3 w-full overflow-scroll overflow-x-hidden rounded-md sm:border border-[#E6E6E6] sm:bg-white sm:p-5'>
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className={`sm:mb-4 p-4 rounded-2xl sm:p-0 bg-white ${
              index !== data.length - 1 ? 'sm:border-b sm:border-[#E6E6E6]' : ''
            }`}
          >
            <div className='sm:mb-4 flex items-center'>
              <div className='mr-4  overflow-hidden rounded'>
                <Image
                  src={item.imageSource}
                  alt={`Profile ${index}`}
                  className=' object-cover'
                  width={90}
                  height={90}
                />
              </div>

              <div className='flex w-full flex-col'>
                <div className='mb-2 flex items-center justify-between'>
                  <h2 className='mb-1 text-xs sm:text-sm font-medium text-[#808080] md:text-base md:text-black'>
                    {item.heading}
                  </h2>

                  <div className='flex-shrink-0 rounded-full bg-gray-300 p-2'>
                    <Link href='/portfolio/dividend-history'>
                      <MdArrowOutward
                        color='black'
                        className='h-3 w-3 sm:h-4 sm:w-4 font-bold'
                      />
                    </Link>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                    <p className='mb-1 text-xs sm:text-sm font-medium text-black'>
                      {item.arr}
                    </p>
                  </div>

                  <p className='text-xs sm:text-sm text-right font-medium text-black md:text-base'>
                    {item.amount}
                  </p>
                </div>

                <div className='flex items-center justify-between'>
                  <p className='text-xs sm:text-sm font-semibold text-black	'>{`Frequency: ${item.frequency}`}</p>

                  <p className='text-[10px] text-right font-semibold md:text-sm'>
                    {item.totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default DividendHistoryCard;
