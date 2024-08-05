import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardImage from '~/images/card-image.jpg';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { AttachmentItem } from '@/components/Detail/BasicInfo';

const data = [
  { title: 'Address', value: 'Haeundae-gu, Busan Metropolitan City' },
  { title: 'Zoning', value: 'Residential area' },
  {
    title: 'Gross Floor area',
    subvalues: [
      { title: 'This case', value: 23 },
      { title: 'Total', value: 43 },
    ],
  },
  {
    title: ' Land area',
    subvalues: [
      { title: 'This case', value: 83 },
      { title: 'Total', value: 89 },
    ],
  },
  { title: ' Floor', value: 77 },
  {
    title: ' Completion date',
    value: '23 Jun, 2023',
  },
  {
    title: ' Government assessed land value  ',
    value: '$13,770/m2 (As of August 2023)',
  },
];

const BasicInfo = () => {
  return (
    <div className='my-7'>
      <div className=' mb-3 text-xl font-semibold'>Property information</div>
      <div className='relative mb-8'>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='insideSliderPagination rounded-lg'
          pagination={{ clickable: true }}
        >
          {Array(6)
            .fill(null)
            .map((nft: any, index: number) => {
              return (
                <SwiperSlide key={index} className=''>
                  <div className=' relative h-[400px] overflow-hidden rounded-lg md:h-[500px]'>
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
      </div>

      <div>
        <div className=' border-primary-gray mb-7 rounded-lg border p-5'>
          {data.map((info, index) => {
            return (
              <div
                className='border-primary-gray border-b py-2.5 last-of-type:border-0'
                key={index}
              >
                <div className='flex flex-wrap items-center justify-between gap-1'>
                  <span className=' text-sm font-medium md:text-base'>
                    {info.title} :{' '}
                  </span>
                  {info.value && (
                    <span className=' text-xs font-normal text-[#808080] md:text-sm'>
                      {info.value}
                    </span>
                  )}
                </div>
                {info.subvalues && (
                  <div>
                    {info.subvalues.map((subvalues, index2) => {
                      return (
                        <div
                          key={index2}
                          className='my-1 flex items-center justify-between'
                        >
                          <span className=' text-sm font-medium'>
                            {subvalues.title} :{' '}
                          </span>
                          <span className=' text-sm font-normal text-[#808080]'>
                            {subvalues.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className='center border-primary-gray mb-8 h-[250px] w-full rounded-lg border bg-white p-3 text-center text-sm font-bold md:h-[400px] md:text-base'>
          Web document designed blog content
        </div>
        <div className=' w-full bg-white text-base'>
          <div className=' mb-3 text-xl font-semibold'>Attachement</div>
          <div>
            <AttachmentItem
              url={''}
              title='Real Estate Management Disposal Trust Agreement'
            />
            <AttachmentItem url={''} title='Securities report' />
            <AttachmentItem url={''} title='Appraisal report (for)' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
