import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/Dialog';
import { useCreatePropertyNotificationMutation } from '@/generated/generated';

const NotificationModal = ({ propertyID }: { propertyID: string }) => {
  const [isOPen, setIsOpen] = React.useState(false);
  const [mutatuionFunc, { error, loading, data }] =
    useCreatePropertyNotificationMutation();

  return (
    <Dialog
      open={isOPen}
      onOpenChange={(bool: boolean) => {
        if (bool) {
          try {
            mutatuionFunc({
              variables: {
                input: {
                  property: {
                    id: propertyID,
                  },
                },
              },
            });
          } catch (e) {
            console.log(e);
          }
        }
        setIsOpen(bool);
      }}
    >
      <DialogTrigger asChild>
        <button className=' rounded-xl bg-black px-14 py-3.5 text-base font-semibold tracking-wider text-white'>
          Get notification
        </button>
      </DialogTrigger>
      <DialogOverlay className=' bg-[#2E2E2E] px-6 py-5 opacity-70'>
        <DialogContent className='max-w-[90%] rounded-2xl bg-white p-12 md:max-w-[450px]'>
          <div className=' text-center text-xl font-medium'>
            You'll be notified when Subscription starts
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className=' center mt-8 rounded-xl bg-black py-3.5 text-base font-semibold tracking-wider text-white md:px-14'
          >
            OK
          </button>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default NotificationModal;
