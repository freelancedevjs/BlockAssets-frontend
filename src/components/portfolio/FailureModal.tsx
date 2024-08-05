import React, { FC } from 'react';

interface FailureModalProps {
  open: boolean;
  close: () => void;
}

const FailureModal: FC<FailureModalProps> = ({ open, close }) => {
  if (!open) {
    return null;
  }

  return (
    <div className='fixed left-0 top-0 z-[99] flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='max-w-md rounded-md bg-white p-6 text-center'>
        <div className='flex items-center justify-center'>
          <svg
            width='70'
            height='70'
            viewBox='0 0 70 70'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle opacity='0.1' cx='35' cy='35' r='35' fill='#FF3F3F' />
            <path
              d='M35.0067 18.0625C32.6885 18.0625 30.8125 19.9537 30.8125 22.2695V36.7922C30.8125 39.108 32.6885 40.9992 35.0067 40.9992C37.3248 40.9992 39.2008 39.108 39.2008 36.7922V22.2695C39.2008 19.9537 37.3254 18.0625 35.0067 18.0625ZM35.0067 43.7671C32.741 43.7671 30.8895 45.5906 30.8895 47.8271C30.8895 50.0648 32.741 51.8923 35.0067 51.8923C37.2729 51.8923 39.1238 50.0648 39.1238 47.8277C39.1238 45.5906 37.2729 43.7671 35.0067 43.7671Z'
              fill='#FF3F3F'
            />
          </svg>
        </div>

        <h2 className='font-poppins mt-4 text-lg font-semibold text-black'>
          Failed
        </h2>

        <p className='font-poppins mt-2 text-base font-medium text-[#808080]'>
          Please check your internet connection, and then try again.
        </p>

        <button
          className='mt-4 w-[358px] rounded-lg bg-black px-4 py-2 text-white'
          onClick={close}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default FailureModal;
