'use client';
import { useNotificationsContext } from '@/contexts/NotificationContext';
import { Notification } from '@/contexts/NotificationContext/notification';
import { ChevronLeft, Loader2 } from 'lucide-react';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';

const NotificationTab = (props: { notification: Notification }) => {
  const { notification } = props;
  return (
    <div className='mb-2.5 rounded-2xl bg-white px-4 py-2.5 last-of-type:mb-0 '>
      <div className=' text-text-gray text-xs font-medium'>
        <span className=' text-[#0C78DB]'>{notification.mode}</span> |{' '}
        {moment(notification.createdAt).format('YYYY-MM-DD HH:mm')}
      </div>
      <div className=' line-clamp-2 truncate text-sm font-medium'>
        {notification.content}
      </div>
    </div>
  );
};

interface Iprops {
  drawerOpen: boolean;
  setDrawerIsOpen: (value: boolean) => void;
}

const NotificationDrawer = (props: Iprops) => {
  const {
    loading,
    error,
    notifications,
    totalNotifications,
    loadMore,
    hasMore,
  } = useNotificationsContext();

  const containerRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
      ) {
        if (hasMore && !loading) {
          loadMore();
        }
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, hasMore, loading, loadMore]);

  return (
    <div
      className={`dynamicViewHeight fixed left-0 top-0 z-50 flex w-screen flex-col overflow-hidden bg-[#F5F5F5] transition-transform duration-500 ${
        props.drawerOpen ? ' translate-x-0 ' : '-translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between bg-white px-5 py-2.5'>
        <span
          onClick={() => props.setDrawerIsOpen(false)}
          className=' aspect-square w-6'
        >
          <ChevronLeft />
        </span>
        <span className=' text-lg font-semibold'>Notifications</span>
        <span className='text-error-red text-sm font-normal'>Clear all</span>
      </div>
      <div ref={containerRef} className='h-full overflow-y-auto p-5'>
        {notifications.map((notification: Notification, index) => {
          return <NotificationTab notification={notification} key={index} />;
        })}
        {loading && (
          <div className='center py-2'>
            <Loader2 className=' animate-spin' />{' '}
          </div>
        )}
        {notifications.length == 0 && !loading && (
          <div className=' center py-2 text-base font-semibold'>
            No Notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDrawer;
