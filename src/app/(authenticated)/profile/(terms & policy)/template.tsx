import Link from 'next/link';
import React from 'react';

const TermsAndPolicyTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='w-full'>
      <h1 className='mb-2 hidden text-[22px] font-bold text-black md:block'>
        <Link href='/profile'>
          <span className='border-r-2 pr-2 font-normal text-[#808080]'>
            Profile
          </span>
        </Link>
        <span className='font-semibold capitalize text-black'>
          Terms & Policy
        </span>{' '}
      </h1>
      <div className='my-4 rounded-xl bg-white px-5 py-6'>{children}</div>
    </div>
  );
};

export default TermsAndPolicyTemplate;
