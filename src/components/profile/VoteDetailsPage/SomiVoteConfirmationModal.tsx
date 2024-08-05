import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  setResultText: React.Dispatch<React.SetStateAction<string>>;
}

const SomiVoteConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  setResultText,
}) => {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-gray-800 opacity-50'
            onClick={onClose}
          ></div>
          <div className='relative max-w-md rounded-xl bg-white p-3 text-center  md:p-[3rem]'>
            <span className='my-4 mb-4  rounded-3xl px-4 py-1.5 text-xl font-medium text-[#FF3F3F] md:bg-[#FFE2E2]'>
              Note
            </span>
            <p className='font-poppins my-5 text-base font-medium text-black'>
              SOMI Vote cannot be reverted
            </p>
            <div className='my-4 flex justify-end space-x-3'>
              <button
                className='stake-button rounded-xl bg-[#808080] px-10 py-2.5 text-base font-semibold text-white'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className='stake-button rounded-xl bg-[#000000] px-10 py-2.5 text-base font-semibold text-white'
                onClick={() => {
                  onConfirm();
                  setResultText('Approved');
                  onClose();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SomiVoteConfirmationModal;
