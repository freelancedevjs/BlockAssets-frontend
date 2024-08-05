'use client';
import { Bell, Divide, Loader2, Search, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import MobileLogo from '~/svg/mobile-logo.svg';
import BellIcon from '~/svg/bell-icon.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '../ui/Dropdown';
import { useUserFetch } from '@/proividers/UserFetchProvider';
import { gql, useQuery } from '@apollo/client';
import {
  GetMyNotificationsResponse,
  Notification,
} from '@/contexts/NotificationContext/notification';
import Link from 'next/link';
import moment from 'moment';
import { useNotificationsContext } from '@/contexts/NotificationContext';

interface Iprops {
  setDrawerIsOpen: (value: boolean) => void;
}

const NotificationTab = (props: { notificationData: Notification }) => {
  const { notificationData } = props;
  return (
    <Link href={`/hss/detail/${notificationData.property.slug}`}>
      <div className=' border-b bg-white py-3 last-of-type:border-0 '>
        <div className=' text-text-gray text-xs font-medium'>
          <span className=' text-[#0C78DB]'>{notificationData.mode}</span> |{' '}
          {moment(notificationData.createdAt).format('YYYY-MM-DD HH:mm')}
        </div>
        <div className=' text-sm font-medium'>{notificationData.content}</div>
      </div>
    </Link>
  );
};

const Header = (props: Iprops) => {
  const { width, height } = useWindowSize();
  const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useUserFetch();

  const {
    loading,
    error,
    notifications,
    totalNotifications,
    loadMore,
    hasMore,
  } = useNotificationsContext();

  return (
    <>
      {width > 767 ? (
        <div className='border-primary-gray bg-tertiary-gray hidden items-center justify-end border-b px-4 py-3 md:flex md:px-8 md:py-4 lg:justify-between '>
          <div className=' bg-secondary-gray border-primary-gray hidden w-1/2 rounded-xl border px-4 py-3 lg:flex'>
            <Search className='mr-2.5 text-gray-400 ' />
            <input
              className='flex-1 border-none bg-transparent outline-none'
              placeholder='Search'
              type='text'
            />
          </div>
          <div className='flex items-center gap-4'>
            <div className=' text-sm font-medium'>
              {user ? (
                <>
                  <span className='capitalize text-[#808080]'>
                    {user.userType.toLowerCase()}{' '}
                  </span>{' '}
                  <span className=' w-full max-w-[180px] truncate capitalize text-black'>
                    {' '}
                    {`| ${user.firstName} ${user.lastName}`}
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
            <DropdownMenu
              open={showNotifications}
              onOpenChange={setShowNotifications}
            >
              <DropdownMenuTrigger asChild>
                <div className='center border-primary-gray cursor-pointer rounded-full border p-3'>
                  <span className=' relative'>
                    <Bell />
                    {notifications.length > 0 && (
                      <div className=' absolute right-1 top-0 aspect-square h-1.5 rounded-full bg-red-700'></div>
                    )}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuPortal>
                <DropdownMenuContent className='bottom-3 right-0 max-h-[70vh] w-12 max-w-[300px] overflow-y-auto rounded-xl bg-white'>
                  <div className=' flex items-center justify-between px-5 py-3'>
                    <span className=' text-lg font-semibold'>
                      Notifications
                    </span>
                    <span
                      className='cursor-pointer'
                      onClick={() => setShowNotifications(false)}
                    >
                      <X />
                    </span>
                  </div>
                  {!loading ? (
                    notifications.length > 0 ? (
                      <div className=' px-7'>
                        {notifications.map((notification, index) => {
                          return (
                            <NotificationTab
                              notificationData={notification}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className='px-5 py-3 text-base font-medium'>
                        No Notifications
                      </div>
                    )
                  ) : (
                    <div className=' center p-4'>
                      <Loader2 className='animate-spin' />
                    </div>
                  )}
                  {hasMore && (
                    <div
                      onClick={loadMore}
                      className=' center mt-2 cursor-pointer border-t py-4 text-sm font-medium text-[#0C78DB]'
                    >
                      Show More
                    </div>
                  )}
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-between px-5 py-3 md:hidden'>
          <div className='flex items-center gap-2.5'>
            <span className='w-5'>
              <MobileLogo />
            </span>
            <span className=' text-xl font-semibold'>Block Assets</span>
          </div>
          <span className='relative w-6'>
            <span onClick={() => props.setDrawerIsOpen(true)} className='w-6'>
              <BellIcon />
            </span>
            {notifications.length > 0 && (
              <div className=' absolute right-1 top-0 aspect-square h-1.5 rounded-full bg-red-700'></div>
            )}
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
