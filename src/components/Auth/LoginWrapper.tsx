import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import logo from '~/images/logo.png';

export default function LoginWrapper({
  children,
  title,
  subtitle,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const path = usePathname();
  const isVerifyPhoneNumberRoute = path === '/portfolio/verifyPhoneNumber';

  return (
    <div
      className={twMerge(
        `flex min-h-screen w-full flex-col sm:items-center gap-6 bg-[#F5F5F5] px-4 sm:py-10  md:px-6`,
        className
      )}
    >
      {!isVerifyPhoneNumberRoute && (
          <div className='hidden sm:flex'>
            <Image src={logo} alt='logo' />
          </div>
      )}
      <div className='sm:my-16 flex w-full max-w-[500px] flex-col sm:items-center rounded-lg sm:bg-white p-6'>
        <p className='text-xl font-semibold'>{title}</p>
        {subtitle && (
          <p className='mb-4 mt-2 text-xs text-[#808080]'>{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
