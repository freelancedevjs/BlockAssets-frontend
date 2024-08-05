import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/Dialog';

const StakeMoreModal = () => {
  const [isOPen, setIsOpen] = React.useState(false);
  return (
    <Dialog open={isOPen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className=' w-full rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:max-w-[210px]'>
          Done
        </button>
      </DialogTrigger>
      <DialogOverlay className=' bg-[#2E2E2E] px-6 py-5 opacity-70'>
        <DialogContent className='max-w-[90%] rounded-2xl bg-white p-12 md:max-w-[450px]'>
          <div className=' text-center text-xl font-medium'>
            Your SOMI Stake / USDT Warranty has been updated
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className=' center mt-8 rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:px-14'
          >
            Ok
          </button>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default StakeMoreModal;
