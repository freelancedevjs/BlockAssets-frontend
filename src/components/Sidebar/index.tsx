'use client';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import logo from '~/images/logo.png';
import Home from '~/svg/home.svg';
import HomeDark from '~/svg/homeDark.svg';
import Listing from '~/svg/listing.svg';
import ListingDark from '~/svg/listingDark.svg';
import Portfolio from '~/svg/portfolio.svg';
import PortfolioDark from '~/svg/portfolioDark.svg';
import Trade from '~/svg/trade.svg';
import TradeDark from '~/svg/tradeDark.svg';
import Profile from '~/svg/profile.svg';
import ProfileDark from '~/svg/profileDark.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const SidebarOptions = [
  { link: '/', title: 'Home', icon: Home, darkIcon: HomeDark },
  { link: '/hss', title: 'HSS', icon: Listing, darkIcon: ListingDark },
  {
    link: '/portfolio',
    title: 'Portfolio',
    icon: Portfolio,
    darkIcon: PortfolioDark,
  },
  { link: '/trade', title: 'Trade', icon: Trade, darkIcon: TradeDark },
  { link: '/profile', title: 'Profile', icon: Profile, darkIcon: ProfileDark },
];

const SideBar = ({ className }) => {
  const path = usePathname();

  return (
    <div
      className={twMerge(
        'border-primary-gray bg-tertiary-gray border-r px-5 py-7 xl:px-8 xl:py-10',
        className
      )}
    >
      <Link href='/'>
        <div className='relative ml-3 w-[90%]'>
          <Image
            className='w-full'
            objectFit='contain'
            src={logo}
            alt='logo-image'
          />
        </div>
      </Link>
      <div className='mt-16'>
        {SidebarOptions.map((option, index) => {
          const Icon = option.icon;
          const DarkIcon = option.darkIcon;
          const isSelected =
            path === option.link ||
            (path.startsWith('/trade/') && option.link === '/trade') ||
            (path.startsWith('/hss/') && option.link === '/hss') ||
            (path.startsWith('/profile/') && option.link === '/profile') ||
            (path.startsWith('/portfolio/') && option.link === '/portfolio');
          return (
            <Link key={index} href={option.link}>
              <div
                className={`mb-3 flex items-center gap-2.5 rounded-xl px-4 py-3 ${isSelected
                    ? ' bg-primary-gray font-medium text-black'
                    : ' font-normal text-[#808080]'
                  } `}
              >
                <div className='aspect-square w-6'>
                  {isSelected ? <DarkIcon /> : <Icon />}
                </div>
                <div className={'text-base'}>{option.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
