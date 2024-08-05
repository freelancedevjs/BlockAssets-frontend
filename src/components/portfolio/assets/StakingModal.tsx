import React from 'react';

interface StakingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StakingModal: React.FC<StakingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed left-0 top-0 z-[99] flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='m-2  max-w-md rounded-md bg-white p-4 text-center md:mx-auto  md:p-8'>
        <p className='mb-8 text-lg font-medium'>
          Staked SOMI will be locked and returned upon liquidating all property
          tokens.
        </p>

        <div className='flex w-full justify-center'>
          <button
            className='mr-4 flex-1 rounded-md bg-[#E6E6E6] px-8 py-3 text-[#B3B3B3]'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className='flex-1 rounded-md bg-black px-8 py-3 text-white'
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default StakingModal;
