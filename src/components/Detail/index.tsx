'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardImage from '~/images/card-image.jpg';
import { ChevronLeft, Divide } from 'lucide-react';
import BasicInfo from '@/components/Detail/BasicInfo';
import { useRouter } from 'next/navigation';
import SubscriptionInfo from '@/components/Detail/SubscriptionInfo';
import Disclosure from '@/components/Detail/Disclosure';
import ProgressIcon from '~/svg/progress-icon.svg';
import UpcomingIcon from '~/svg/upcoming-icon.svg';
import EndedIcon from '~/svg/ended-icon.svg';
import NotificationModal from '@/components/Detail/Modals/NotificationModal';
import StakedNotificationModal from '@/components/Detail/Modals/StakedNotificationModal';
import { useSearchParams } from 'next/navigation';
import { Maybe, Property, useGetPropertyQuery } from '@/generated/generated';
import moment from 'moment';

const tabs = [
  {
    type: 'basic-info',
    title: 'Basic Info',
  },
  {
    type: 'subscription-info',
    title: 'Subscription Info',
  },
  {
    type: 'disclosure',
    title: 'Disclosure',
  },
];

export type Status = 'upcoming' | 'ongoing' | 'deposit' | 'ended';

const Detail = ({ propertyID }: { propertyID: string }) => {
  const [seletedTab, setSelectedTab] = useState(tabs[0].type);
  const router = useRouter();

  const { data, loading, error } = useGetPropertyQuery({
    variables: { input: propertyID },
  });

  const propertyData: Property | undefined = useMemo(() => {
    if (!data?.getProperty) {
      return undefined;
    }
    const property: Property = {
      ...(data?.getProperty || {}),
      attachments: [],
      disclosures: [],
      images: [],
      subscriptions: [],
      notices: [],
      notifications: [],
      user_notifications: [],
      votes: [],
    };
    return {
      ...(property || {}),
      ...(data?.getProperty || {}),
      attachments:
        data?.getProperty?.attachments?.map((a) => ({
          ...a,
          property: property,
        })) || [],
      disclosures:
        data?.getProperty?.disclosures?.map((a) => ({
          ...a,
          property: property,
        })) || [],
      images:
        data?.getProperty?.images?.map((a) => ({ ...a, property: property })) ||
        [],
      votes:
        data?.getProperty?.votes?.map((a) => ({ ...a, property: property })) ||
        [],
    };
  }, [data]);

  // real status func.
  // const status: Status = useMemo(() => {
  //   if (moment(propertyData?.startsAt).isAfter(moment())) {
  //     return 'upcoming';
  //   } else if (
  //     moment(propertyData?.startsAt).isBefore(moment()) &&
  //     moment(propertyData?.endsAt).isAfter(moment())
  //   ) {
  //     return 'ongoing';
  //   } else {
  //     return 'ended';
  //   }
  // }, [propertyData]);

  const status = React.useMemo(() => {
    const startDate = moment(propertyData?.startsAt);
    const endDate = moment(propertyData?.endsAt);
    const firstDepositDate = moment(propertyData?.firstDepositDate);
    const secondDepositDate = moment(propertyData?.secondDepositDate);
    if (startDate.isAfter(moment())) {
      return 'upcoming';
    }
    if (endDate.isAfter(moment())) {
      return 'ongoing';
    }
    if (
      firstDepositDate.isAfter(moment()) ||
      secondDepositDate.isAfter(moment())
    ) {
      return 'deposit';
    }
    return 'ended';
  }, [propertyData]);

  const isParticipated = useMemo(() => {
    const subscription = propertyData?.subscriptions;
    return Math.random() > 0.5;
  }, [propertyData]);

  const isDeposited = useMemo(() => {
    return Math.random() > 0.5;
  }, []);
  const isAbleToDeposit = useMemo(() => {
    return Math.random() > 0.5;
  }, []);

  if (!propertyData && loading) {
    return <div className='center h-full w-full'>Loading...</div>;
  }

  if (!propertyData) return <div>No data to show</div>;

  return (
    <div className=''>
      <div className=' mb-3 hidden text-xl font-normal text-[#808080] md:block'>
        <Link href={'/'}>
          <span>HSS </span>
        </Link>{' '}
        |{' '}
        <span className=' font-semibold text-black'>{propertyData?.name}</span>
      </div>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => router.back()}>
            <ChevronLeft />
          </div>
          <div className=' text-lg font-semibold'>{propertyData.name}</div>
          <div></div>
        </div>
        <div className=' mt-2 flex items-center overflow-x-scroll px-4 md:hidden'>
          {tabs.map((tab, index) => {
            return (
              <div
                className={` w-[33%] min-w-fit cursor-pointer px-3 pb-2 text-center text-sm ${
                  seletedTab == tab.type
                    ? 'border-b-2 border-[#333333] font-semibold text-black'
                    : 'border-primary-gray border-b-2 font-normal text-[#808080]'
                }`}
                key={index}
                onClick={() => setSelectedTab(tab.type)}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className=' mt-[40px] rounded-xl bg-white p-2.5 py-4 md:mt-0 md:p-4 lg:p-7'>
        <div className=' mb-3 text-xl font-semibold'>Property information</div>
        <div className='relative mb-8'>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            className='insideSliderPagination rounded-lg'
            pagination={{ clickable: true }}
          >
            {propertyData?.images?.map((image, index: number) => {
              return (
                <SwiperSlide key={index} className=''>
                  <div className=' relative h-[400px] overflow-hidden rounded-lg md:h-[500px]'>
                    <Image
                      src={`${image.url}`}
                      alt=''
                      objectFit='cover'
                      layout='fill'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {status == 'upcoming' && (
            <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-black px-2.5 py-1.5 text-sm font-bold text-white'>
              <div className='h-5 w-5'>
                <UpcomingIcon />
              </div>
              <div className='min-w-fit'>Upcoming</div>
            </div>
          )}
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
                  D-5
                </div>
              </>
            ))}
          {status == 'ended' && (
            <div className=' absolute right-0 top-0 z-20 flex min-w-max items-center gap-2 rounded-bl-lg rounded-tr-lg bg-[#FF3F3F] px-2.5 py-1.5 text-sm font-bold text-white'>
              <div className='h-5 w-5'>
                <EndedIcon />
              </div>
              <div className='min-w-fit'>Closed</div>
            </div>
          )}
          {status == 'deposit' && (
            <div className=' blurCard absolute right-1/2 top-1/2 z-20 min-w-[80%] max-w-[90%] -translate-y-1/2 translate-x-1/2 rounded-2xl p-4 md:min-w-0 md:p-7'>
              {isAbleToDeposit ? (
                isDeposited ? (
                  <div className=' text-center tracking-widest text-white'>
                    <div className=' mx-auto inline-flex rounded-[50px] bg-[#e4ffe9ad] p-2.5 text-xs font-semibold tracking-wide text-[#23B43A]'>
                      Confirm Deposit
                    </div>
                    <div className=' my-2.5 text-sm font-semibold md:text-lg'>
                      You have already made the deposit
                    </div>
                    <div className=' text-xs font-medium md:text-sm'>
                      Allocation Date : 2023.12.23
                    </div>
                    <div className=' text-xs font-medium md:text-sm'>
                      Listing Date : 2023.12.23
                    </div>
                    <Link href={'/portfolio'}>
                      <button className=' center mx-auto mt-2.5 w-full rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white disabled:bg-[#E6E6E6] disabled:text-[#B3B3B3] md:max-w-[90%]'>
                        Go to Portfolio
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className=' text-center tracking-widest text-white'>
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
          )}
        </div>
        <div className=' my-8 hidden items-center justify-stretch md:flex'>
          {tabs.map((tab, index) => {
            return (
              <div
                className={` w-[33%] min-w-fit cursor-pointer px-3 pb-2 text-center text-base ${
                  seletedTab == tab.type
                    ? 'border-b-2 border-[#333333] font-semibold text-black'
                    : 'border-primary-gray border-b-2 font-normal text-[#808080]'
                }`}
                key={index}
                onClick={() => setSelectedTab(tab.type)}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        {seletedTab == tabs[0].type && (
          <BasicInfo propertydata={propertyData} status={status} />
        )}
        {seletedTab == tabs[1].type && (
          <SubscriptionInfo propertyData={propertyData} status={status} />
        )}
        {seletedTab == tabs[2].type && (
          <Disclosure propertyData={propertyData} status={status} />
        )}
        <div className='mt-12 flex items-center justify-center'>
          {status == 'ongoing' && !isParticipated && (
            <StakedNotificationModal />
          )}
          {status == 'ongoing' && isParticipated && (
            <Link href={`/hss/detail/${propertyData.slug}/invest-more`}>
              <button className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white'>
                Invest More
              </button>
            </Link>
          )}
          {status == 'upcoming' && (
            <NotificationModal propertyID={propertyData?.slug} />
          )}
          {status == 'ended' && (
            <button className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white'>
              Go trade
            </button>
          )}
          {status == 'deposit' && !isDeposited && (
            <Link href={`/hss/detail/${propertyData.slug}/deposit`}>
              <button
                disabled={!isAbleToDeposit}
                className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white disabled:bg-[#E6E6E6] disabled:text-[#B3B3B3]'
              >
                Deposit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
