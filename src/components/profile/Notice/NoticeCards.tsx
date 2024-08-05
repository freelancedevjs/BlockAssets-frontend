import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface NoticeCardsProps {
  date: string;
  title: string;
  status?: string;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeCards: React.FC<NoticeCardsProps> = ({
  date,
  title,
  status,
  setShowDetail,
}) => {
  let statusColor = '';

  if (status === 'Dividend') {
    statusColor = '#0C78DB';
  } else if (status === 'Subscription') {
    statusColor = '#FF3F3F';
  } else {
    statusColor = 'black';
  }
  return (
    <div
      onClick={() => setShowDetail(true)}
      className='h-85 my-2 flex w-full cursor-pointer items-center rounded-lg bg-white p-4 md:bg-[#F2F6F6]'
    >
      <div className='flex-grow'>
        <div className='flex items-center'>
          {status && (
            <>
              <span
                className={`mr-2 text-base font-medium leading-6 text-[${statusColor}]`}
              >
                {status}
              </span>
              <span className='mx-2 h-4 border-r border-[#808080]' />
            </>
          )}
          <p className=' items-center text-xs font-medium leading-5 text-[#808080] md:text-base'>
            {date}
          </p>
        </div>
        <p className=' mt-2 text-[16px] font-medium leading-6 text-gray-800 md:text-xl'>
          {title}
        </p>
      </div>
      <div className='hidden items-center md:block'>
        <div className='text-808080'>
          <MdArrowForwardIos size={24} color='black' />
        </div>
      </div>
    </div>
  );
};

export default NoticeCards;
