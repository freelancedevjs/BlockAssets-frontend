'use client';

import Link from 'next/link';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import CardImage from '~/images/card-image.jpg';
import locationIcon from '~/images/Location.png';
import { ChevronLeft } from 'lucide-react';
import StakingModal from '@/components/portfolio/assets/StakingModal';
import 'swiper/css';

const Assets: React.FC = () => {
  const [isStakingModalOpen, setStakingModalOpen] = React.useState(false);

  const openStakingModal = () => {
    setStakingModalOpen(true);
  };

  const closeStakingModal = () => {
    setStakingModalOpen(false);
  };

  return (
    <div className='mx-2'>
      <h1 className='mb-2 hidden text-[22px] font-bold text-black md:block'>
        <Link href='/portfolio'>
          <span className='border-r-2 pr-2 font-normal text-[#808080]'>
            Portfolio
          </span>
        </Link>
        {isStakingModalOpen ? (
          <span className='Poppins pl-2 text-xl font-medium'>Staking</span>
        ) : (
          <span className='Poppins pl-2 text-xl font-medium'>Assets</span>
        )}
      </h1>

      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <Link href='/portfolio'>
            <ChevronLeft />
          </Link>

          <div className=' text-lg font-semibold'>Staking</div>
          <div></div>
        </div>
      </div>

      <div className='rounded-lg bg-inherit p-0 md:bg-white md:p-10 md:shadow-md'>
        <div className='bg-white md:bg-none p-2 rounded-xl md:rounded-none'>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            // className='insideSliderPagination rounded-lg'
            pagination={{ clickable: true }}
          >
            {Array(6)
              .fill(null)
              .map((nft: any, index: number) => {
                return (
                  <SwiperSlide key={index} className=''>
                    <div className=' relative h-[400px] overflow-hidden rounded-lg md:h-[520px]'>
                      <Image
                        src={CardImage}
                        alt=''
                        objectFit='cover'
                        layout='fill'
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className='flex md:hidden flex-col mt-2'>
            <p className='text-sm font-medium text-[#808080] md:text-xl md:font-semibold md:text-black'>
              Jalan Bani Bu hassan
            </p>
            <div className='justify=center mb-2 flex flex-row items-center gap-2'>
              <Image
                src={locationIcon}
                alt='Location Icon'
                width={18}
                height={18}
              />
              <p className='text-[13px] font-medium text-[#808080] md:text-sm'>
                Haeundae-gu, Busan Metropolitan City
              </p>
            </div>
          </div>
        </div>
        <div className='mt-3 rounded-xl border border-[#E6E6E6] bg-white p-4'>
          <div className='mb-2 hidden md:flex flex-col border-b border-[#E6E6E6] md:flex-row md:items-center md:justify-between'>
            <p className='mb-2 text-sm font-medium text-[#808080] md:text-xl md:font-semibold md:text-black'>
              Jalan Bani Bu hassan
            </p>
            <div className='justify=center mb-2 flex flex-row items-center gap-2'>
              <Image
                src={locationIcon}
                alt='Location Icon'
                width={18}
                height={18}
              />
              <p className='text-[13px] font-medium text-[#808080] md:text-sm'>
                Haeundae-gu, Busan Metropolitan City
              </p>
            </div>
          </div>
          <div>
            <div className='mb-2 flex items-center justify-between'>
              <p className='mr-2 text-[15px] font-semibold md:text-lg md:font-medium'>
                My Staking
              </p>
              <p className='text-[15px] font-semibold md:text-base'>
                2,324 SOMI
              </p>
            </div>
            <p className='mb-4 text-[15px] font-medium text-[#333333] md:text-base'>
              Staking More
            </p>

            <input
              type='text'
              className='mb-2 w-full rounded-xl border border-gray-300 bg-[#F2F6F6]
            p-3 text-black md:rounded'
              placeholder='Enter amount'
            />

            <p className='mb-4 text-[12px] font-normal text-black md:text-sm'>
              My balance : 300,000 SOMI
            </p>
          </div>
        </div>
        <div className='my-4 flex items-center justify-center'>
          <button
            className='stake-button w-full rounded-lg bg-black px-10 py-3 text-base font-semibold text-white md:w-auto md:rounded-md'
            onClick={openStakingModal}
          >
            Stake More
          </button>
        </div>
      </div>
      <StakingModal isOpen={isStakingModalOpen} onClose={closeStakingModal} />
    </div>
  );
};

export default Assets;
