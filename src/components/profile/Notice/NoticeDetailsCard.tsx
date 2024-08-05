import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface NoticeDetailsProps {
  imageUrl: StaticImageData;
  copy: string;
}

const NoticeDetails: React.FC<NoticeDetailsProps> = ({ imageUrl, copy }) => {
  return (
    <div className='flex w-full flex-col md:flex-row'>
      <div className='ml-4 flex-shrink-0'>
        <div>
          <Image
            src={imageUrl}
            alt='Left side image'
            width={440}
            height={270}
            objectFit='cover'
            className='rounded-md'
          />
        </div>
      </div>

      <div className='ml-4 flex flex-grow flex-col'>
        {/* Date in the top right corner */}
        <div className='ml-auto mt-2 text-sm font-normal text-[#808080]'>
          2023/03/23 04:23
        </div>
        <div>
          <h3 className='mb-2 text-base font-semibold text-[#333333]'>
            Announcement of completion of dividend payment for Haeundae L City’s
            8th tern.
          </h3>
          <p className='text-sm font-normal text-[#808080]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <ul className='ml-4 list-disc'>
          <li className='text-sm font-normal text-[#808080]'>abc</li>
          <li className='text-sm font-normal text-[#808080]'>abv</li>
          <li className='text-sm font-normal text-[#808080]'>cac</li>
        </ul>
      </div>
    </div>
  );
};

export default NoticeDetails;
