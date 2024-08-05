'use client';
import StakeMoreModal from '@/components/Detail/Modals/StakeMoreModal';
import UnsubscribeModal from '@/components/Detail/Modals/UnsubscribeModal';
import Input from '@/components/ui/Input';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import ImportantRed from '~/svg/important-red.svg';
import MiniIcon from '~/svg/mini-icon.svg';

const InvestMore = () => {
  const router = useRouter();
  const [stakeValue, setStakeValue] = React.useState('');
  const [USDTWarrentyValue, setUSDTWarrenty] = React.useState('');
  return (
    <div className='min-h-full'>
      <div className=' mb-3 hidden text-xl font-normal text-[#808080] md:block'>
        <Link href={'/hss'}>
          <span>HSS </span>
        </Link>{' '}
        |{' '}
        <Link href={'/hss/detail'}>
          {' '}
          <span className=' text-[#808080]'>Jalan Bani Bu hassan</span>
        </Link>{' '}
        | <span className=' font-semibold text-black'>Invest More</span>
      </div>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => router.back()}>
            <ChevronLeft />
          </div>
          <div className=' text-lg font-semibold'>Invest More</div>
          <div></div>
        </div>
      </div>
      <div className=' flex flex-col justify-between rounded-xl bg-white p-2.5 py-4 md:mt-0 md:p-4 lg:p-7'>
        <div className=' border-primary-gray mb-7 rounded-lg border p-5'>
          <div className='mb-6'>
            <div className=' mb-2.5 text-base'>Current SOMI Stake</div>
            <Input
              inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none text-base px-4 bg-primary-gray'
              placeholder='Enter Amount'
              value={'3,400 SOMI'}
              disabled
              LastIcon={
                <span className='absolute right-4 top-[50%] h-4 w-4 -translate-y-[50%] md:h-5 md:w-5 '>
                  <MiniIcon />
                </span>
              }
            />
          </div>
          <div className='mb-6'>
            <div className=' mb-2.5 text-base'>Stake More</div>
            <Input
              inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none text-base px-4 bg-white'
              placeholder='Enter Amount'
              value={stakeValue}
              onChange={(e) => setStakeValue(e.target.value)}
              type='number'
              LastIcon={
                <span className='absolute right-4 top-[50%] h-4 w-4 -translate-y-[50%] md:h-5 md:w-5 '>
                  <MiniIcon />
                </span>
              }
            />
            <div className='mt-2 flex flex-wrap items-center justify-between gap-3'>
              <div className=' text-xs md:text-sm'>
                My balance: 100,132 SOMI
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-4 w-4 overflow-hidden'>
                  <ImportantRed />
                </div>
                <div className=' text-[10px] text-[#FF3F3F] md:text-sm'>
                  can’t change it to less than the SOMI you have already staked.
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <div className=' mb-2.5 text-base'>Current USDT Warranty</div>
            <Input
              inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none text-base px-4 bg-primary-gray rounded-md '
              placeholder='Enter Amount'
              className='rounded-md'
              value={'3,400 SOMI'}
              disabled
              LastIcon={
                <span className='absolute right-4 top-[50%] h-4 w-4 -translate-y-[50%] md:h-5 md:w-5 '>
                  <MiniIcon />
                </span>
              }
            />
          </div>
          <div className='mb-10'>
            <div className=' mb-2.5 text-base'>New USDT Warranty</div>
            <Input
              value={USDTWarrentyValue}
              onChange={(e) => setUSDTWarrenty(e.target.value)}
              inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none text-base px-4 bg-white rounded-md'
              placeholder='Enter Amount'
              type='number'
              LastIcon={
                <span className='absolute right-4 top-[50%] h-4 w-4 -translate-y-[50%] md:h-5 md:w-5 '>
                  <MiniIcon />
                </span>
              }
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
          <UnsubscribeModal />
          <StakeMoreModal />
        </div>
      </div>
    </div>
  );
};

export default InvestMore;
