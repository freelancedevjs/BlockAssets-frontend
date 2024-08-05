import React, { useState } from 'react';

import NoticeDetailsCard from '@/components/profile/Notice/NoticeDetailsCard';

import NoticeCards from './NoticeCards';

import noticeDetailCard from '~/images/notice-details-card.png';
import { ChevronLeft } from 'lucide-react';
import { useQuery } from '@apollo/client';
import { GET_MANY_NOTICES } from '@/components/profile/Notice/notice.gql';
import Loader from '@/components/Loader';

interface NoticeTabContentProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const NoticeTabContent: React.FC<NoticeTabContentProps> = ({
  setActiveTab,
}) => {
  const { loading, error, data } = useQuery(GET_MANY_NOTICES);

  const [showDetailCard, setShowDetailCard] = useState(false);

  const noticeDataArray = [
    { id: 0, date: '2023/03/23 04:23', title: ' Notice Title' },
    {
      id: 1,
      date: '2023/03/23 04:23',
      title: ' Notice Title',
      status: 'Dividend',
    },
    {
      id: 2,
      date: '2023/03/24 05:30',
      title: ' Notice Title',
      status: 'Subscription',
    },
    { id: 3, date: '2023/03/24 05:30', title: ' Notice Title', status: 'Etc' },
  ];

  const noticeDetailCardData = [
    {
      id: 1,
      imageUrl: noticeDetailCard,
      copy: 'Copy for item 1...',
      additionalText: 'Additional text for item 1...',
    },
    {
      id: 2,
      imageUrl: noticeDetailCard,
      copy: 'Copy for item 2...',
      additionalText: 'Additional text for item 2...',
    },
  ];

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>
          <Loader />
        </p>
      </div>
    );
  }

  if (error || !data || !data.getManyNotices || !data.getManyNotices.data) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>Error: {error ? error.message : 'Data not available'}</p>
      </div>
    );
  }
  const notices = data.getManyNotices.data;

  return (
    <div className='mt-2'>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => setActiveTab('Vote')}>
            <ChevronLeft />
          </div>

          <div className=' text-lg font-semibold'>Notice</div>
          <div></div>
        </div>
      </div>
      {showDetailCard ? (
        <div className='m-2 mx-auto mb-4 w-full rounded-lg border  border-[#b76e6e] border-gray-300 p-2 '>
          <NoticeDetailsCard
            imageUrl={noticeDetailCardData[0].imageUrl}
            copy={noticeDetailCardData[0].copy}
          />
        </div>
      ) : (
        <>
          {notices.map((notice: any) => (
            <NoticeCards
              setShowDetail={setShowDetailCard}
              key={notice.id}
              date={notice.date}
              title={notice.title}
              status={notice.status}
            />
          ))}
          {/* {noticeDataArray.map((notice) => (
            <NoticeCards
              setShowDetail={setShowDetailCard}
              key={notice.id}
              date={notice.date}
              title={notice.title}
              status={notice.status}
            />
          ))} */}
        </>
      )}
    </div>
  );
};

export default NoticeTabContent;
