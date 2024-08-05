import { Icon } from '@radix-ui/react-select';
import React from 'react';
import LocationIcon from '~/svg/location.svg';
import ImportantRed from '~/svg/important-red.svg';
import Important from '~/svg/important.svg';
import Image from 'next/image';
import { Status } from '@/components/Detail';
import Input from '@/components/ui/Input';
import { Tooltip } from 'react-tooltip';
import { Property } from '@/generated/generated';
import moment from 'moment';
import { title } from 'case';
const RankTab = ({ index }) => {
  return (
    <div className=' border-primary-gray flex items-center justify-between border-b py-2.5 last-of-type:border-none'>
      <div className='flex gap-2.5'>
        <div className='center h-11 w-11 rounded-full bg-[#EBECFF] font-semibold tracking-wider text-[#0C78DB]'>
          #{index}
        </div>
        <div className=' text-sm font-medium text-[#808080]'>
          <div className=' '>Staked SOMI :</div>
          <div>Investment :</div>
        </div>
      </div>
      <div className=' text-right'>
        <div className=' text-sm font-semibold'>6,000 SOMI</div>
        <div className=' text-sm font-semibold'>20,000 USDT</div>
        <div className=' text-xs text-[#808080]'>$120,000</div>
      </div>
    </div>
  );
};

interface IProps {
  status: Status;
  propertyData: Property;
}

const SubscriptionInfo = ({ propertyData, status }: IProps) => {
  return (
    <>
      <div className=' md:border-primary-gray rounded-lg md:mb-7 md:border md:p-5'>
        <div className=' mb-3 text-xl font-semibold'>{propertyData.name}</div>
        <div className=' mb-3 flex items-center gap-1.5'>
          <div className=' h-5 w-5 min-w-max'>
            <LocationIcon />
          </div>
          <span className=' text-sm font-medium text-[#808080]'>
            {propertyData.basic_info.address}
          </span>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2'>
          <div className=' text-base font-semibold'>
            <span className='text-black'>Total Cap : </span>
            <span className=' text-[#808080]'>
              ${propertyData.subscription_info.total_cap}
            </span>
          </div>
          <div className=' text-base font-semibold'>
            <span className='text-black'>ARR : </span>
            <span className=' text-[#808080]'>
              {propertyData.subscription_info.apr}%
            </span>
          </div>
        </div>
        <div className='bg-primary-gray mb-3 mt-1.5 h-3 w-full rounded-full'>
          <div
            style={{ width: `${0}%` }}
            className={`h-full rounded-full bg-[#23B43A]`}
          ></div>
        </div>
        <div className='mb-3 flex flex-wrap items-center justify-between gap-2 text-base font-medium'>
          <div>Dividend Frequency :</div>
          <div className='text-[#808080]'>
            {title(propertyData.subscription_info.frequency)}
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-medium'>
          <div>Period :</div>
          {/*<div className='text-[#808080]'>23 Jun, 2023 - 30 Jun, 2023</div>*/}
          <div className='text-[#808080]'>
            {moment(propertyData.startsAt || '').format('D MMM, Y')}
            {' - '}
            {moment(propertyData.endsAt || '').format('D MMM, Y')}
          </div>
        </div>
        <div className=' border-primary-gray my-4 w-full border-b'></div>
        <div className='mb-2.5 flex flex-wrap items-center justify-between gap-2 text-sm font-medium'>
          <div>Allocation Date :</div>
          <div className='text-[#808080]'>
            {moment(propertyData.subscription_info.allocation_date).format(
              'D MMM, Y'
            )}
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-medium'>
          <div>Listing Date :</div>
          <div className='text-[#808080]'>
            {moment(propertyData.subscription_info.listing_date).format(
              'D MMM, Y'
            )}
          </div>
        </div>
      </div>
      {status == 'ongoing' && (
        <div className='mt-8'>
          <div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
            <span className=' text-xl font-semibold text-[#0C78DB]'>
              Subscribe Now!
            </span>
            <div className='flex items-center gap-1.5 text-xs text-[#FF3F3F]'>
              5% SOMI Stake Penalty{' '}
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content='SOMI will be staked for subscription. USDT for actual investment must be deposited within 7-days Deposit Period. 5% SOMI Stake Penalty may be incurred for failure to deposit USDT within 7-days Deposit Period'
              >
                <div className='h-2.5 w-2.5 overflow-hidden'>
                  <ImportantRed />
                </div>
              </a>
            </div>
          </div>
          <div className=' md:border-primary-gray rounded-lg md:mb-7 md:border md:p-5'>
            <div>
              <div className='mb-3 flex flex-wrap items-center justify-between'>
                <div className=' flex items-center gap-1.5'>
                  <span className=' textbase'>SOMI Stake</span>
                  <a
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content='Subscription Rank is determined by staked SOMI balance'
                  >
                    <div className=' h-3 w-3'>
                      <Important />
                    </div>
                  </a>
                </div>
                <div className='flex items-center gap-1.5 text-xs text-[#FF3F3F]'>
                  Minimum SOMI Stake 365
                </div>
              </div>
              <Input
                inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none'
                placeholder='Enter Amount'
              />
              <div className=' mt-2 text-sm'>My balance : 100.132 SOMI</div>
            </div>
            <div className=' mt-6'>
              <div className='mb-3 flex items-center justify-between'>
                <div className=' flex items-center gap-1.5'>
                  <span className=' textbase'>USDT Warranty</span>
                  <a
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content='USDT Warranty indicated USDT TO BE deposited. Actual USDT Deposit must be completed within 7-days Deposit Period. Property Tokens will be distributed based on deposited USDT amount'
                  >
                    <div className=' h-3 w-3'>
                      <Important />
                    </div>
                  </a>
                </div>
              </div>
              <Input
                inputClassName=' h-12 md:h-14 bg-[#F2F6F6] md:bg-none'
                placeholder='Enter Amount'
              />
            </div>
          </div>
        </div>
      )}
      {status == 'ongoing' && (
        <div className=' mt-8'>
          <div className='mb-3 flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <span className=' text-xl font-semibold'>Subscriber ranking</span>
              <span className='text-sm font-semibold text-[#0C78DB]'>
                Safe Area: #10
              </span>
            </div>
            <div className=' hidden cursor-pointer text-sm font-semibold underline md:block'>
              Load more
            </div>
          </div>
          <div className='md:border-primary-gray rounded-lg md:border md:p-5'>
            {Array(5)
              .fill(undefined)
              .map((rank, index) => {
                return <RankTab key={index} index={index} />;
              })}
          </div>
          <div className=' mt-4 cursor-pointer text-center text-sm font-semibold underline md:hidden'>
            Load more
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionInfo;
