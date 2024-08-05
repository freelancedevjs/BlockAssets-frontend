import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CardImage from '~/images/card-image.jpg';
import LocationIcon from '~/svg/location.svg';
import ProgressIcon from '~/svg/progress-icon.svg';
import UpcomingIcon from '~/svg/upcoming-icon.svg';
import EndedIcon from '~/svg/ended-icon.svg';
import { Property } from '@/generated/generated';
import moment from 'moment';
import { title } from 'case';

export type Status = 'upcoming' | 'ongoing' | 'ended' | 'deposit';
interface IProps {
  status?: Status | string;
  isParticipated?: boolean;
  size?: 'small' | 'big';
  propertyData: Property;
}

const ItemCard = (props: IProps) => {
  const { status, isParticipated, size, propertyData } = props;

  const ARRPercentage = React.useMemo(() => {
    const per = Number(propertyData?.subscription_info?.apr);
    return per;
  }, [propertyData]);

  const timeRemaining = React.useMemo(() => {
    const currentTime = moment();
    const endTime = moment(propertyData?.endsAt);
    const daysRemaining = endTime.diff(currentTime, 'days');
    return daysRemaining;
  }, [propertyData?.endsAt]);

  return (
    <Link href={`/hss/detail/${propertyData.slug}`}>
      <div className='itemCardShadow rounded-2xl bg-white p-4'>
        <div
          className={` relative ${
            size == 'big' ? 'h-[500px]' : 'h-[300px]'
          } rounded-lg`}
        >
          <Image
            src={CardImage}
            alt='card-image'
            objectFit='cover'
            layout='fill'
            className='rounded-lg'
          />
          {status == 'ongoing' &&
            (!isParticipated ? (
              <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-[#23B43A] px-2.5 py-1.5 text-sm font-bold text-white'>
                <div className='h-5 w-5'>
                  <ProgressIcon />
                </div>
                <div className='min-w-fit'>In progress</div>
              </div>
            ) : (
              <>
                <div className=' absolute left-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-br-lg rounded-tl-lg bg-black px-2.5 py-1.5 text-sm font-bold text-white'>
                  My Rank #2
                </div>
                <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-[#FF3F3F] px-2.5 py-1.5 text-sm font-bold text-white'>
                  D-{timeRemaining}
                </div>
              </>
            ))}
          {/* {status == 'deposit' && (
            <div className=' blurCard absolute right-1/2 top-1/2 z-20 min-w-[80%] max-w-[90%] -translate-y-1/2 translate-x-1/2 rounded-2xl p-4 md:min-w-0 md:p-4'>
              {isAbleToDeposit ? (
                isDeposited ? (
                  <div className=' text-center tracking-widest text-white md:min-w-max'>
                    <div className=' mx-auto inline-flex rounded-[50px] bg-[#e4ffe9ad] p-2.5 text-xs font-semibold tracking-wide text-[#23B43A]'>
                      Confirm Deposit
                    </div>
                    <div className=' my-2.5 text-sm font-semibold'>
                      You have already made the deposit
                    </div>
                    <div className=' text-xs font-medium md:text-sm'>
                      Allocation Date : 2023.12.23
                    </div>
                    <div className=' text-xs font-medium md:text-sm'>
                      Listing Date : 2023.12.23
                    </div>
                    <Link href={'/portfolio'}>
                      <button className=' center mt-2.5 w-full min-w-fit rounded-xl  bg-black py-3.5 text-base font-semibold tracking-wider text-white disabled:bg-[#E6E6E6] disabled:text-[#B3B3B3] md:mx-auto md:max-w-[90%]'>
                        Go to Portfolio
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className='min-w-max text-center tracking-widest text-white'>
                    <div className=' mx-auto inline-flex rounded-[50px] bg-[#e4ffe9ad] p-2.5 text-xs font-semibold tracking-wider text-[#23B43A]'>
                      Subscription Successfull
                    </div>
                    <div className=' my-2.5 text-base font-semibold md:text-lg'>
                      Deposit USDT Now!
                    </div>
                    <div className=' text-xs font-semibold md:text-sm'>
                      Deposit Period : ~ 2023.12.23
                    </div>
                  </div>
                )
              ) : (
                <div className=' text-center tracking-widest text-white'>
                  <div className=' mx-auto inline-flex rounded-[50px] bg-[#ff9797b3] p-2.5 text-xs font-semibold tracking-wider text-[#FF3F3F]'>
                    1st Deposit Batch
                  </div>
                  <div className=' mx-auto my-2.5 max-w-[230px] text-center text-sm font-semibold'>
                    Wait for losers who didn’t deposit so you can seize the
                    chance!
                  </div>
                </div>
              )}
            </div>
          )} */}
          {status == 'upcoming' && (
            <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-black px-2.5 py-1.5 text-sm font-bold text-white'>
              <div className='h-5 w-5'>
                <UpcomingIcon />
              </div>
              <div className='min-w-fit'>Upcoming</div>
            </div>
          )}
          {status == 'ended' && (
            <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-[#FF3F3F] px-2.5 py-1.5 text-sm font-bold text-white'>
              <div className='h-5 w-5'>
                <EndedIcon />
              </div>
              <div className='min-w-fit'>Closed</div>
            </div>
          )}
        </div>
        <div className=' mb-3 mt-4 text-base font-semibold md:text-2xl'>
          {propertyData?.name}
        </div>
        <div className=' mb-3 flex items-center gap-1.5'>
          <div className=' h-5 w-5 '>
            <LocationIcon />
          </div>
          <span className=' text-sm font-medium text-[#808080]'>
            {propertyData?.basic_info?.address}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <div className=' text-base font-semibold'>
            <span className='text-black'>Total Cap : </span>
            <span className=' text-[#808080]'>
              ${propertyData?.subscription_info?.total_cap}
            </span>
          </div>
          <div className=' text-base font-semibold'>
            <span className='text-black'>ARR : </span>
            <span className=' text-[#808080]'>{ARRPercentage}%</span>
          </div>
        </div>
        <div className='bg-primary-gray mb-3 mt-1.5 h-3 w-full rounded-full'>
          <div
            style={{ width: `${ARRPercentage}%` }}
            className={`h-full rounded-full bg-[#23B43A]`}
          ></div>
        </div>
        <div className='mb-3 flex flex-wrap items-center justify-between gap-2 text-base font-semibold'>
          <div>Dividend Frequency :</div>
          <div className='text-[#808080]'>
            {title(propertyData?.subscription_info?.frequency)}
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold'>
          <div>Period :</div>
          <div className='text-[#808080]'>
            {moment(propertyData?.startsAt).format('DD MMM, YYYY')} -{' '}
            {moment(propertyData?.endsAt).format('DD MMM, YYYY')}
          </div>
        </div>
        {props.size == 'big' && (
          <>
            <div className='bg-primary-gray my-4 h-px w-full'></div>
            <div className='mb-3 flex flex-wrap items-center justify-between gap-2 text-base font-semibold'>
              <div>Status :</div>
              <div className='text-[#808080]'>Canceled</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ItemCard;
