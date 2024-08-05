import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/Dialog';

const StakedNotificationModal = () => {
  const [isOPen, setIsOpen] = React.useState(false);
  const [stepNumber, setStepNumber] = React.useState(0);

  React.useEffect(() => {
    if (isOPen) setStepNumber(0);
  }, [isOPen]);

  return (
    <Dialog open={isOPen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white'>
          Subscription
        </button>
      </DialogTrigger>
      <DialogOverlay className=' bg-[#2E2E2E] px-6 py-5 opacity-70'>
        <DialogContent className='max-w-[90%] rounded-2xl bg-white p-12 md:max-w-[580px]'>
          {stepNumber == 0 && (
            <>
              <div className=' center'>
                <span className='rounded-[90px] bg-[#FFE2E2] px-6 py-2 text-xl font-medium text-[#FF3F3F]'>
                  Note
                </span>
              </div>
              <div className=' text-center text-xl font-medium'>
                Staked SOMI will be locked until subscription expiry. 5% SOMI
                Stake Penalty may be incurred for failure to deposit USDT within
                7-days Deposit Period
              </div>
              <div className=' mt-8 flex justify-stretch gap-2.5'>
                <button
                  onClick={() => setIsOpen(false)}
                  className=' center w-1/2 rounded-xl bg-[#E6E6E6] py-3.5 text-base font-semibold tracking-wider text-[#B3B3B3] md:px-14'
                >
                  Cancel
                </button>
                <button
                  onClick={() => setStepNumber(1)}
                  className=' center w-1/2 rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:px-14'
                >
                  OK
                </button>
              </div>
            </>
          )}
          {stepNumber == 1 && (
            <>
              <div className=' text-center text-xl font-medium'>
                Your SOMI will be locked until Subscription Expiry
              </div>
              <div className=' mt-8 flex justify-stretch gap-2.5'>
                <button
                  onClick={() => setIsOpen(false)}
                  className=' center w-1/2 rounded-xl bg-[#E6E6E6] py-3.5 text-base font-semibold tracking-wider text-[#B3B3B3] md:px-14'
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className=' center w-1/2 rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:px-14'
                >
                  OK
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default StakedNotificationModal;
