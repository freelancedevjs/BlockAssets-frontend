import React from 'react';

interface PaymentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const PaymentConfirmationModal: React.FC<PaymentConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed left-0 top-0 z-[99] flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-70'>
      <div className='m-4 rounded-lg bg-white p-8'>
        <div className='rounded-lg  bg-gray-100 p-5 text-left'>
          <div className='mb-4 flex items-center justify-between '>
            <span className='font-medium text-black	'>SOMI balance:</span>
            <span className='font-semibold text-black'>3,000 SOMI</span>
          </div>
          <div className='mb-4 flex items-center justify-between '>
            <span className='text-[#808080]'>To:</span>
            <span className='text-xs font-semibold text-black'>
              0xe429b9EC8442828EefC860Cf8cD9F62FdFd59676
            </span>
          </div>
          <div className='mb-4 flex items-center justify-between '>
            <span className='text-[#808080]'>Network Fee:</span>
            <span className='font-semibold text-black'>0.00023147 BNB</span>
          </div>
          <div className='mb-4 flex items-center justify-between '>
            <span className='text-[#808080]'>Total:</span>
            <span className='font-semibold text-black'>
              3,000 SOMI + 0.00023147 BNB
            </span>
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <span className='mr-3 text-[#808080]'>Txid:</span>
            <span className='text-xs font-semibold text-[#0C78DB]'>
              0xe429b9EC8442828EefC860Cf8cD9F62FdFd59676
            </span>
          </div>
        </div>
        <div className='mt-8 flex w-full justify-between gap-2'>
          <button
            onClick={() => {
              onCancel();
              onClose();
            }}
            className='w-1/2 rounded-lg bg-gray-300 px-4 py-2 text-gray-800'
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className=' w-1/2  rounded-lg bg-black px-4 py-2 text-white'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
