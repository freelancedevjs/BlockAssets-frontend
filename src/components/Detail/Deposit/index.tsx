'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { walletNameTrimmer } from '@/lib/utils';

const Deposit = () => {
  const router = useRouter();
  return (
    <div className=''>
      <div className=' mb-3 hidden text-xl font-normal text-[#808080] md:block'>
        <Link href={'/hss'}>
          <span>HSS </span>
        </Link>{' '}
        |{' '}
        <Link href={'/hss/detail'}>
          {' '}
          <span className=' text-[#808080]'>Jalan Bani Bu hassan</span>
        </Link>{' '}
        | <span className=' font-semibold text-black'>Deposit</span>
      </div>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => router.back()}>
            <ChevronLeft />
          </div>
          <div className=' text-lg font-semibold'>Deposit</div>
          <div></div>
        </div>
      </div>
      <div className=' rounded-xl bg-white p-2.5 py-4 md:mt-0 md:p-4 lg:p-7'>
        <div className='  mb-3 text-xl font-semibold'>Subscription Info</div>
        <div className=' md:border-primary-gray rounded-lg md:mb-7 md:border md:p-5'>
          <div className='mb-2.5 flex flex-wrap items-center justify-between gap-2 text-sm font-semibold'>
            <div>Staked SOMI :</div>
            <div>50,000 USDT</div>
          </div>
          <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold'>
            <div>USDT Warranty :</div>
            <div>3,400 SOMI</div>
          </div>
        </div>
        <div className='my-7'>
          <div className='  mb-3 text-xl font-semibold'>
            Address for Deposit
          </div>
          <div className='border-primary-gray flex justify-between overflow-hidden rounded-lg border'>
            <div className=' flex-1 flex-wrap p-2.5 text-base font-medium md:p-5 lg:hidden'>
              {walletNameTrimmer(
                '0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g'
              )}
            </div>
            <div className='hidden flex-1 p-5 text-base font-medium lg:block'>
              0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g
            </div>
            <div className=' min-w-max  cursor-pointer bg-black px-4 py-2.5 text-sm text-white max-[320px]:hidden md:py-5 md:text-base lg:px-12 lg:py-6'>
              Copy Address
            </div>
          </div>
          <div className=' center mt-3 w-full rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white min-[320px]:hidden'>
            Copy Address
          </div>
        </div>
        <div className='  mb-3 text-xl font-semibold'>Your Wallet address</div>
        <div className=' mb-3 text-sm font-semibold text-[#FF3F3F]'>
          Accurately enter the wallet address you used for deposit.
        </div>
        <div className='border-primary-gray flex justify-between overflow-hidden rounded-lg border'>
          <div className=' flex-1 p-5 text-base font-medium lg:hidden'>
            {walletNameTrimmer(
              '0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g'
            )}
          </div>
          <div className='hidden flex-1 p-5 text-base font-medium lg:block'>
            0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g0x83x36g9g
          </div>
        </div>
        <div className=' mx-auto my-10 max-w-[600px] text-center text-sm font-semibold text-[#FF3F3F] md:my-20 md:text-lg '>
          Please ensure to use a wallet other than Block Assets Wallet. Thank
          you for your cooperation
        </div>
        <div className=' flex justify-center'>
          <button className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
