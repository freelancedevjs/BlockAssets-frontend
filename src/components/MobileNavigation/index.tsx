import { SidebarOptions } from '@/components/Sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const MobileNavigation = ({ className }: { className?: string }) => {
  const path = usePathname();
  return (
    <div
      className={twMerge(
        'fixed bottom-0 z-50 flex w-full items-center justify-between bg-white px-2.5 sm:px-4 py-2.5',
        className
      )}
    >
      {SidebarOptions.map((option, index) => {
        const Icon = option.icon;
        const DarkIcon = option.darkIcon;
        const isSelected =
          path === option.link ||
          (path.startsWith('/hss/') && option.link === '/hss') ||
          (path.startsWith('/profile/') && option.link === '/profile') ||
          (path.startsWith('/portfolio/') && option.link === '/portfolio');
        return (
          <Link href={option.link} key={index} className='w-[20%]'>
            <div
              className={`flex flex-col items-center ${
                isSelected
                  ? ' font-medium text-black'
                  : ' font-normal text-[#808080]'
              }`}
            >
              <div className='mb-0.5 aspect-square w-5'>
                {isSelected ? <DarkIcon /> : <Icon />}
              </div>
              <div className="text-[12px] sm:text-sm">{option.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavigation;
