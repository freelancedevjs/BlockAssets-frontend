'use client';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import FileIcon from '~/svg/file.svg';
import DownloadIcon from '~/svg/download.svg';
import {
  useDisclosureDetailQuery,
  useDisclosuresQuery,
} from '@/generated/generated';
import moment from 'moment';
import renderHTML from 'react-render-html';

const AttachmentItem = ({ title }: { title: string }) => {
  return (
    <div className=' mb-2.5 flex items-center justify-between gap-2 rounded-lg bg-[#F2F6F6] px-4 py-2.5 last-of-type:mb-0'>
      <div className='flex items-center gap-3'>
        <div className=' bg-primary-gray center aspect-square h-10 w-10 min-w-fit rounded-full'>
          <FileIcon className={'w-4'} />
        </div>
        <span className=' text-xs font-medium md:text-sm'>{title}</span>
      </div>
      <div>
        <DownloadIcon className='aspect-square w-6' />
      </div>
    </div>
  );
};

const DisclosureDetail = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { data } = useDisclosureDetailQuery({
    variables: {
      input: { where: { slug: slug } },
    },
  });
  console.log('data', data);
  if (!data) {
    return <></>;
  }
  return (
    <div className=''>
      <div className=' mb-3 hidden text-xl font-normal text-[#808080] md:block'>
        <Link href={'/hss'}>
          <span>HSS </span>
        </Link>{' '}
        |{' '}
        <Link href={`/hss/detail/${data?.getDisclosure?.property?.slug}`}>
          {' '}
          <span className=' text-[#808080]'>
            {data?.getDisclosure?.property?.name}
          </span>
        </Link>{' '}
        |{' '}
        <span className=' font-semibold text-black'>
          {data?.getDisclosure?.name}
        </span>
      </div>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => router.back()}>
            <ChevronLeft />
          </div>
          <div className=' text-lg font-semibold'>
            {data?.getDisclosure?.name}
          </div>
          <div></div>
        </div>
      </div>
      <div className=' rounded-xl bg-white p-2.5 py-4 md:mt-0 md:p-4 lg:p-7'>
        <div className='mb-3 flex flex-col-reverse justify-between gap-2.5 border-b border-[#EBEBEB] pb-3 md:flex-row md:items-center md:border-none md:pb-0'>
          <div className='  text-xl font-semibold'>
            {data?.getDisclosure?.name}
          </div>
          <div className=' text-sm text-[#808080]'>
            {moment(data?.getDisclosure?.createdAt).format('Y/MM/DD hh:mm')}
          </div>
        </div>
        <div className=' md:border-primary-gray rounded-lg md:mb-7 md:border md:p-5'>
          {renderHTML(data?.getDisclosure?.content)}
        </div>
        {/*<div className=' w-full bg-white text-base'>*/}
        {/*  <div className=' mb-3 text-xl font-semibold'>Attachment</div>*/}
        {/*  <div>*/}
        {/*    <AttachmentItem title='Real Estate Management Disposal Trust Agreement' />*/}
        {/*    <AttachmentItem title='Securities report' />*/}
        {/*    <AttachmentItem title='Appraisal report (for)' />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default DisclosureDetail;
