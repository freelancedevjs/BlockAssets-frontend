"use client"
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import CardImage from '~/images/card-image.jpg';

const RelatedTab = () => {
  return (
    <Link href={'/news'}>
      <div className=' mb-2.5 flex gap-2.5 rounded-lg bg-[#F2F6F6] p-2.5'>
        <div className=' relative aspect-square h-[60px]  min-w-fit overflow-hidden rounded-lg'>
          <Image src={CardImage} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className='flex flex-col justify-between'>
          <div className=' line-clamp-2 text-sm font-medium'>
            Announcement of completion of dividend{' '}
          </div>
          <div className=' text-sm font-normal text-[#808080]'>
            By Jara Montez
          </div>
        </div>
      </div>
    </Link>
  );
};

const News = () => {
  const router = useRouter();
  return (
    <div className=''>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => router.back()}>
            <ChevronLeft />
          </div>
          <div className=' text-lg font-semibold'>News</div>
          <div></div>
        </div>
      </div>
      <div className=' hidden md:block mb-3 text-xl font-normal text-[#808080]'>
        <Link href={'/'}>
          <span>Home </span>
        </Link>{' '}
        | <span className=' font-semibold text-black'>News</span>
      </div>
      <div className=' flex flex-col rounded-xl bg-white p-4 lg:flex-row lg:p-7'>
        <div className=' border-primary-gray flex-[0.75] lg:border-r lg:pr-5'>
          <div className=' relative h-[300px] w-full overflow-hidden rounded-lg'>
            <Image src={CardImage} alt='' layout='fill' objectFit='cover' />
          </div>
          <div className=' my-5 text-2xl font-semibold'>
            Announcement of completion of dividend payment for Haeundae L City’s
            8th tern.
          </div>
          <div className=' mb-5 text-base font-normal text-[#808080]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,{' '}
          </div>
          <div className=' relative h-[200px] w-full overflow-hidden rounded-lg'>
            <Image src={CardImage} alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
        <div className=' mt-10 flex-[0.25] lg:mt-0 lg:pl-5'>
          <div className=' mb-3 text-xl font-semibold text-black'>
            Related News
          </div>
          {Array(6)
            .fill(undefined)
            .map((news, index) => {
              return <RelatedTab key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default News;
