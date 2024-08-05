'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/Dialog';
import { useRouter } from 'next/navigation';

const UnsubscribeModal = () => {
  const [isOPen, setIsOpen] = React.useState(false);
  const [stepNumber, setStepNumber] = React.useState(0);

  const router = useRouter();

  React.useEffect(() => {
    if (isOPen) setStepNumber(0);
  }, [isOPen]);

  return (
    <Dialog open={isOPen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className=' w-full rounded-xl border border-[#FF3F3F] bg-white py-3.5 text-center text-base font-semibold tracking-wider text-[#FF3F3F] md:max-w-[210px]'>
          Unsubscribe
        </button>
      </DialogTrigger>
      <DialogOverlay className=' bg-[#2E2E2E] px-6 py-5 opacity-70'>
        <DialogContent
          className={`max-w-[90%] rounded-2xl bg-white p-4 py-8 ${
            stepNumber == 0 ? 'md:max-w-[526px]' : 'md:max-w-[450px]'
          } md:p-12`}
        >
          {stepNumber == 0 && (
            <>
              <div className=' text-center text-base font-medium md:text-lg'>
                Cancelling subscription within Deposit Period incurs 5% SOMI
                Stake Penalty. Are you sure you want to unsubscribe?
              </div>
              <div className=' rounded-lg bg-[#F2F6F6] p-5 md:m-4'>
                <div className='mb-2 flex flex-wrap items-center justify-between gap-2 text-base'>
                  <div className=' font-medium text-[#808080] '>
                    Current SOMI Stake :
                  </div>
                  <div className=' font-bold'>XXX SOMI</div>
                </div>
                <div className='mb-2 flex flex-wrap items-center justify-between gap-2 text-base'>
                  <div className=' font-medium text-[#808080] '>
                    5% Penalty :
                  </div>
                  <div className=' font-bold'>XXX SOMI</div>
                </div>
                <div className='mb-2 flex flex-wrap items-center justify-between gap-2 text-base'>
                  <div className=' font-medium text-[#808080] '>
                    Returned SOMI :
                  </div>
                  <div className=' font-bold'>XXX SOMI</div>
                </div>
              </div>
              <div className='flex flex-col-reverse gap-3 md:mt-8 md:flex-row'>
                <button
                  onClick={() => setIsOpen(false)}
                  className=' center bg-primary-gray w-full rounded-xl py-3.5 text-base font-semibold tracking-wider text-[#B3B3B3]'
                >
                  No
                </button>
                <button
                  onClick={() => {
                    setStepNumber(1);
                  }}
                  className=' center w-full rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white'
                >
                  Yes, Cancel
                </button>
              </div>
            </>
          )}
          {stepNumber == 1 && (
            <>
              <div className=' text-center text-lg font-medium'>
                Your subscription has been canceled
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className=' center mt-8 rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:px-14'
              >
                OK
              </button>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default UnsubscribeModal;
