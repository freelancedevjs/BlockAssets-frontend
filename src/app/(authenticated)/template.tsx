'use client';
import Header from '@/components/Header';
import MobileNavigation from '@/components/MobileNavigation';
import NotificationDrawer from '@/components/NotificationDrawer';
import SideBar from '@/components/Sidebar';
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useWindowSize } from 'usehooks-ts';

const AuthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
  const [notificationIsOpen, setNotificationIsOpen] = React.useState(false);
  const { width } = useWindowSize();

  const containerHeight = React.useMemo(() => {
    if (width > 767) {
      return '100vh - 83px';
    } else return '100vh - 114px';
  }, [width]);

  return (
    <>
      <div className=' flex max-h-screen min-h-screen overflow-hidden'>
        <SideBar className='hidden flex-[0.20] md:block lg:flex-[0.15] ' />
        <div className='flex-1 overflow-hidden md:flex-[0.85]'>
          <Header setDrawerIsOpen={setNotificationIsOpen} />
          <div
            style={{ height: `calc(${containerHeight})` }}
            className='bg-secondary-gray hideScroll overflow-y-auto px-4 py-5 md:px-8'
          >
            {children}
          </div>
          <MobileNavigation className='md:hidden' />
        </div>
      </div>
      {width < 768 && (
        <NotificationDrawer
          drawerOpen={notificationIsOpen}
          setDrawerIsOpen={setNotificationIsOpen}
        />
      )}
      <Tooltip id='my-tooltip' />
    </>
  );
};

export default AuthenticatedTemplate;
