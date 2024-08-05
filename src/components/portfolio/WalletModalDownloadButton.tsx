import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface WalletModalDownloadButtonProps {
  regularHeading: string;
  boldHeading: string;
  icon: StaticImageData;
}

const WalletModalDownloadButton: React.FC<WalletModalDownloadButtonProps> = ({
  regularHeading,
  boldHeading,
  icon,
}) => {
  return (
    <div className='flex min-h-[80px] w-full items-center rounded-xl border border-black p-1.5'>
      <Image src={icon} alt='App Store Icon' width={18} height={22} />
      <div className='ml-2'>
        <p className='text-[14px] whitespace-nowrap  font-normal text-gray-600'>{regularHeading}</p>
        <p className='text-xs sm:text-sm font-bold text-gray-800'>{boldHeading}</p>
      </div>
    </div>
  );
};

export default WalletModalDownloadButton;
