'use client';
import React, { useMemo } from 'react';
import ItemCard from '@/components/ItemCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import NoSubIcon from '~/svg/no-sub-icon.svg';
import { Property, useGetPropertiesQuery } from '@/generated/generated';
import moment from 'moment';

const tabOptions = [
  {
    type: 'subscription',
    title: 'Subscription',
  },
  {
    type: 'history',
    title: 'History',
  },
];

const Listing = () => {
  const [swiperLoaded, setSwiperLoaded] = React.useState(false);
  const [selectedTab, setSelecetedTab] = React.useState('subscription');
  const [currentIsoDateTime, setCurrentIsoDateTime] = React.useState(
    moment().format('YYYY-MM-DD HH:mm:ssZ')
  );
  const [hideClosedSubscription, setHideClosedSubscription] =
    React.useState(false);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIsoDateTime(moment().format('YYYY-MM-DD HH:mm:ssZ'));
  //   }, 10000); // Update every 10 second

  //   return () => clearInterval(interval); // Clean up interval
  // }, []);

  console.log('currentTime', currentIsoDateTime);

  React.useEffect(() => {
    // Simulate a delay for loading Swiper CSS
    const delay = setTimeout(() => {
      setSwiperLoaded(true);
    }, 100); // Adjust the delay as needed

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);

  const statuses: string[] = ['ongoing', 'deposit'];

  const {
    data: mySubscriptionData,
    error: mySubscriptionDataError,
    loading: mySubscriptionDataLoading,
  } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 1,
        },
      },
    },
  });

  const {
    data: ongoingData,
    error: ongoingDataError,
    loading: ongoingDataLoading,
  } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 1,
        },
        where: {
          startsAt: { lte: currentIsoDateTime },
          endsAt: { gte: currentIsoDateTime },
        },
      },
    },
  });

  console.log('ongoingDataError', ongoingDataError);

  const {
    data: upcomingData,
    error: upcomingDataError,
    loading: upcomingDataLoading,
  } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 1,
        },
        where: {
          startsAt: { gt: currentIsoDateTime }, // Check if startsAt is greater than current date
        },
      },
    },
  });

  const {
    data: closedData,
    error: closedDataError,
    loading: closedDataLoading,
  } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 1,
        },
        where: {
          endsAt: { lt: currentIsoDateTime }, // Check if endsAt is less than current date
        },
      },
    },
  });

  const {
    data: historyData,
    error: historyDataError,
    loading: historyDataLoading,
  } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 1,
        },
        where: null,
      },
    },
  });

  const mySubscribeProperties = useMemo(() => {
    return mySubscriptionData?.getProperties.data;
  }, [mySubscriptionData]);

  const ongoingProperties = useMemo(() => {
    return ongoingData?.getProperties.data;
  }, [ongoingData]);

  const upcomingProperties = useMemo(() => {
    return upcomingData?.getProperties.data;
  }, [upcomingData]);

  const closedProperties = useMemo(() => {
    return closedData?.getProperties.data;
  }, [closedData]);

  const myHistoryData = useMemo(() => {
    return historyData?.getProperties.data;
  }, [historyData]);

  const status = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }, []);

  const haveHistory = React.useMemo(() => Math.random() < 0.5, []);

  const allAPILoading =
    ongoingDataLoading ||
    upcomingDataLoading ||
    closedDataLoading ||
    mySubscriptionDataLoading ||
    historyDataLoading;

  console.log('ongoingData', ongoingData);

  if (!swiperLoaded && allAPILoading)
    return <div className=' center h-full w-full'>Loading....</div>;

  return (
    <div>
      <div className='my-5 flex items-center justify-between md:my-6'>
        <div></div>
        <div className='flex w-full items-center overflow-x-auto md:w-auto'>
          {tabOptions.map((tab, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelecetedTab(tab.type)}
                className={`center w-1/2 cursor-pointer border-b-2 py-2 text-base md:w-40 ${
                  selectedTab == tab.type
                    ? '  border-[#333333] font-semibold text-black'
                    : ' border-primary-gray text-[808080] '
                }`}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        <div
          onClick={() => setHideClosedSubscription((prev) => !prev)}
          className='hidden cursor-pointer text-base font-medium text-[#0C78DB] md:block'
        >
          {!hideClosedSubscription ? 'Hide Closed Deals' : 'Show Closed Deals'}
        </div>
      </div>
      {selectedTab == 'subscription' && (
        <>
          <div className=' mb-14'>
            <div className='mb-4 flex items-center justify-between'>
              <div className=' text-base font-semibold md:text-lg lg:text-2xl'>
                My Subscription
              </div>
              <div className='cursor-pointer text-sm font-medium text-[#0C78DB] md:hidden'>
                Hide Closed Deals
              </div>
            </div>
            <Swiper
              modules={[Pagination]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              pagination={{ clickable: true }}
              className='outsideSliderPagination'
            >
              {mySubscribeProperties &&
                mySubscribeProperties.map((property: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className='sm:min-w-[250px]'>
                      <ItemCard propertyData={property} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className=' mb-14'>
            <div className=' mb-4 text-base font-semibold md:text-lg lg:text-2xl'>
              Available subscription
            </div>
            <Swiper
              modules={[Pagination]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              pagination={{ clickable: true }}
              className='outsideSliderPagination'
            >
              {ongoingProperties &&
                ongoingProperties.map((property: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className='sm:min-w-[250px]'>
                      <ItemCard propertyData={property} status='ongoing' />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className=' mb-14'>
            <div className='mb-4 text-base font-semibold md:text-lg lg:text-2xl'>
              Upcoming Subscription
            </div>
            <Swiper
              modules={[Pagination]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              pagination={{ clickable: true }}
              className='outsideSliderPagination'
            >
              {upcomingProperties &&
                upcomingProperties.map((property: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className='sm:min-w-[250px]'>
                      <ItemCard propertyData={property} status='upcoming' />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          {!hideClosedSubscription && (
            <div className=' mb-14'>
              <div className='mb-4 text-base font-semibold md:text-lg lg:text-2xl'>
                Closed Subscription
              </div>
              <Swiper
                modules={[Pagination]}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                  1600: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={20}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                pagination={{ clickable: true }}
                className='outsideSliderPagination'
              >
                {closedProperties &&
                  closedProperties.map((property: any, index: number) => {
                    return (
                      <SwiperSlide key={index} className='sm:min-w-[250px]'>
                        <ItemCard propertyData={property} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          )}
        </>
      )}
      {selectedTab == 'history' &&
        (!myHistoryData ? (
          <div className='itemCardShadow flex flex-col items-center gap-2.5 rounded-2xl bg-white p-5 text-center'>
            <div className='center aspect-square h-[60px] w-[60px] rounded-full bg-[#F5F5F5] p-3.5'>
              <NoSubIcon />
            </div>
            <div className=' text-lg font-semibold'>Subscription</div>
            <div className=' text-base font-medium text-[#808080]'>
              There is no subscription history Subscribe Now!
            </div>
          </div>
        ) : (
          <div className=' mb-14'>
            <div className='mb-4 text-base font-semibold md:text-lg lg:text-2xl'>
              Previous Subscriptions
            </div>
            <div className='flex flex-col gap-8'>
              {myHistoryData &&
                myHistoryData.map((property: any, index) => {
                  return <ItemCard key={index} propertyData={property} />;
                })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Listing;
