import React from 'react';

const DividendHistoryDetailCard: React.FC = () => {
  return (
    <div className='mx-auto mb-4 w-full  rounded-lg border border-gray-300 p-4'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <span>
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12.5' r='12' fill='black' />
              <path
                fillRule='evenodd'
                clip-rule='evenodd'
                d='M16.6394 8.23212L13.4935 7.08203V12.7621L16.6394 11.5416V8.23212ZM7.26042 8.43359L10.3917 9.6969V11.5804L7.26042 12.8666V8.43359ZM13.5219 12.7764L10.3906 11.582V17.9215L13.5219 16.6352V12.7764ZM16.6393 11.5898L19.7852 12.6618V15.6214L16.6393 17.0896V11.5898ZM4.12891 11.7643L7.26016 12.8668V15.761L4.12891 17.185V11.7643Z'
                fill='#E6E6E6'
              />
            </svg>
          </span>
          <span className='mr-2 font-bold text-black'>AKD</span>
          <button className='rounded-2xl bg-[#F4F7FF] px-4 py-2 text-sm font-medium text-[#0C78DB]'>
            Receive
          </button>
        </div>
      </div>

      <div className='mb-4 flex flex-col justify-between'>
        <div className='flex flex-row items-center justify-between'>
          <p className='font-semibold'>Dividend:</p>
          <p className='font-semibold'>$162.11</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='font-semibold'>Quantity:</p>
          <p className='font-semibold'> 377</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='font-semibold'>Payout amount:</p>
          <p className='font-semibold'>$0.43</p>
        </div>
      </div>
      <div className='mb-4 flex-col justify-between'>
        <div className='flex flex-row items-center justify-between'>
          <p className='font-semibold '>Record date:</p>
          <p className='text-sm font-semibold text-[#808080]'>20 Jun, 2023</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='font-semibold'>Pay date:</p>
          <p className='text-sm font-semibold text-[#808080]'>27 Jun, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default DividendHistoryDetailCard;
