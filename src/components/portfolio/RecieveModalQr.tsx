import React, { useEffect, useRef } from 'react';
import { walletNameTrimmer } from '@/lib/utils';
import QRCode from 'react-qr-code';

interface RecieveModalQrProps {
  isOpen: boolean;
  address: string;
  onClose: () => void;
}

const RecieveModalQr: React.FC<RecieveModalQrProps> = ({
  isOpen,
  address,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-10 flex w-full items-center justify-center p-2'>
          <div className='absolute inset-0 bg-[#2E2E2E]   bg-opacity-75'></div>
          <div
            ref={modalRef}
            className='relative flex w-full max-w-sm flex-col items-center rounded-md bg-white p-8'
          >
            <div className='text-center text-xl font-medium text-black'>
              Receive
            </div>

            <div className='m-4 rounded bg-[#F5F5F5] p-6'>
              <QRCode value={address} />
            </div>
            <div className='flex justify-center'>
              <p className='text-center text-sm font-[500] text-black'>
                {walletNameTrimmer(address)}
              </p>
            </div>
            <div
              onClick={() => window.navigator.clipboard.writeText(address)}
              className='mx-2 my-2 flex w-full items-center justify-center gap-2'
            >
              <input
                className='w-full rounded bg-[#F5F5F5] p-1.5 text-black sm:w-44'
                type='text'
                disabled={true}
                value={address}
              />
              <div className='flex h-8 w-8 items-center justify-center rounded bg-black'>
                <div className='flex h-8 w-8 cursor-pointer items-center justify-center'>
                  <svg
                    className=' h-4 w-4 '
                    viewBox='0 0 17 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.9541 0.667969H6.37406C5.61139 0.668851 4.88022 0.972211 4.34093 1.5115C3.80164 2.05079 3.49828 2.78197 3.4974 3.54464V4.0013H3.04073C2.27806 4.00218 1.54688 4.30554 1.00759 4.84483C0.468304 5.38412 0.164945 6.1153 0.164062 6.87797V14.458C0.164945 15.2206 0.468304 15.9518 1.00759 16.4911C1.54688 17.0304 2.27806 17.3338 3.04073 17.3346H10.6207C12.0774 17.3346 13.2724 16.2413 13.4591 14.8346H13.9541C14.7167 14.8338 15.4479 14.5304 15.9872 13.9911C16.5265 13.4518 16.8298 12.7206 16.8307 11.958V3.54464C16.8298 2.78197 16.5265 2.05079 15.9872 1.5115C15.4479 0.972211 14.7167 0.668851 13.9541 0.667969ZM15.1641 11.958C15.1641 12.6246 14.6216 13.168 13.9541 13.168H13.4974V6.87797C13.4965 6.1153 13.1932 5.38412 12.6539 4.84483C12.1146 4.30554 11.3834 4.00218 10.6207 4.0013H5.16406V3.54464C5.16406 2.87797 5.70656 2.33464 6.37406 2.33464H13.9541C14.6207 2.33464 15.1641 2.87714 15.1641 3.54464V11.958Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecieveModalQr;
