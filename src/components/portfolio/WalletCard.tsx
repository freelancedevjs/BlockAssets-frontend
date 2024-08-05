import FailureModal from '@/components/portfolio/FailureModal';
import PaymentConfirmationModal from '@/components/portfolio/PaymentConfirmationModal';
import RecieveModalQr from '@/components/portfolio/RecieveModalQr';
import SendPaymentModal from '@/components/portfolio/SendPaymentModal';
import SuccessModal from '@/components/portfolio/SuccessModal';
import WalletModal from '@/components/portfolio/WalletModal';
import { useUserFetch } from '@/proividers/UserFetchProvider';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import { MdCallReceived } from 'react-icons/md';
import { MdOutlineArrowOutward } from 'react-icons/md';
import logoDark from '~/images/logoDark.png';
import { User } from '@/generated/generated';

interface WalletCardProps {
  totalBalance: string;
  totalSOMIBalance: string;
  stakedBalance: string;
  setIsQrModalOpen: (value: boolean) => void;
  isQrModalOpen: boolean;
  walletImported: boolean;
  user?: User;
  setIsWalletImported: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletCard: React.FC<WalletCardProps> = ({
  totalBalance,
  totalSOMIBalance,
  stakedBalance,
  setIsQrModalOpen,
  isQrModalOpen,
  setIsWalletImported: setWalletImported,
  walletImported,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendPaymentModalopen, setIsSendPaymentModalOpen] = useState(false);

  console.log('user', user);
  const openWalletModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setWalletImported(false);
  }, []);

  const handleClosePaymentModal = () => {
    setIsSendPaymentModalOpen(false);
  };
  const handleOpenPaymentModal = () => {
    setIsSendPaymentModalOpen(true);
  };
  const renderImportButton = () => (
    <button
      onClick={openWalletModal}
      className='min-[1130px]-translate-y-1/2 min-[1130px]transform right-10 top-1/2 ml-2 mt-2 hidden rounded bg-white px-4 py-2 text-xs font-semibold text-black sm:text-sm md:top-[30%] md:flex md:text-base lg:top-1/2 min-[1130px]:absolute'
    >
      <span className='m-auto mr-2'>
        <FaArrowDown />
      </span>
      Import Wallet
    </button>
  );

  const renderReceiveSendButtons = () => (
    <div className='hidden space-x-4 pl-2 pt-2 md:flex min-[1130px]:absolute min-[1130px]:right-10 min-[1130px]:top-1/2 min-[1130px]:-translate-y-1/2 min-[1130px]:transform'>
      <button
        className='flex items-center rounded bg-green-500 px-4 py-2 text-base font-semibold text-white'
        onClick={() => {
          setIsQrModalOpen(true);
        }}
      >
        <span className='m-auto mr-2'>
          <MdCallReceived />
        </span>
        Receive
      </button>
      <button
        className='flex items-center rounded bg-red-500 px-4 py-2 text-base font-semibold text-white'
        onClick={handleOpenPaymentModal}
      >
        <span className='m-auto mr-2'>
          <MdOutlineArrowOutward />
        </span>
        Send
      </button>
    </div>
  );

  const handleCloseQrModal = () => {
    setIsQrModalOpen(false);
  };

  return (
    <div className='md:w-1015 md:h-216 top-178 left-365 relative flex-col justify-between rounded-2xl bg-white p-3 text-white shadow-lg md:flex md:flex-row md:rounded-md md:bg-gray-800 md:p-6 md:shadow-none'>
      <div className=''>
        <div className=' md:p:0 w-full p-2 md:m-0 md:w-fit'>
          <div className='mb-2 flex items-center justify-between md:block'>
            <h2 className='text-sm font-semibold text-[#808080] md:text-base   md:text-[#B3B3B3]'>
              Total balance:
            </h2>

            <p className='mt-1 text-xs font-bold text-black sm:text-sm md:text-lg md:text-white lg:text-2xl'>
              {totalBalance}
            </p>
          </div>
          <div className='md:w-305  md:h-74 mt-3 flex gap-3 rounded-md bg-white p-1 text-white md:bg-gray-900 md:p-4'>
            <div className='flex-1 sm:pr-4 md:border-r md:border-gray-700'>
              <p className='whitespace-nowrap text-xs font-medium text-[#808080] sm:text-sm md:text-gray-400'>
                Total SOMI balance
              </p>
              <div className='flex items-center'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='9' cy='9' r='9' fill='white' />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12.4809 5.79811L10.1215 4.93555V9.19557L12.4809 8.28019V5.79811ZM5.44636 5.94967L7.7948 6.89715V8.30975L5.44636 9.27445V5.94967ZM10.1428 9.20634L7.7944 8.31055V13.0652L10.1428 12.1005V9.20634ZM12.481 8.31596L14.8404 9.11994V11.3396L12.481 12.4407V8.31596ZM3.09766 8.44847L5.44609 9.27536V11.4459L3.09766 12.514V8.44847Z'
                    fill='black'
                  />
                </svg>

                <p className='sm:text-md mx-1 whitespace-nowrap text-xs font-bold text-black sm:mx-2  md:text-base md:text-white'>
                  {totalSOMIBalance} SOMI
                </p>
              </div>
            </div>

            <div className='flex-1 text-right text-gray-400 sm:px-4  md:text-left'>
              <p className='text-xs font-medium text-[#808080] sm:text-sm md:text-gray-400'>
                Staked
              </p>
              <p className='sm:text-md text-xs font-bold text-black md:text-base md:text-white'>
                {stakedBalance} SOMI
              </p>
            </div>
          </div>
        </div>
        {walletImported ? renderReceiveSendButtons() : renderImportButton()}
      </div>

      {walletImported ? (
        <div className='flex w-full gap-2 rounded px-2 md:hidden'>
          <button
            className='flex w-1/2 items-center  justify-center rounded bg-green-500 px-4 py-2 text-center text-base font-semibold text-white'
            onClick={() => {
              setIsQrModalOpen(true);
            }}
          >
            <span className=' mr-2'>
              <MdCallReceived />
            </span>
            Receive
          </button>
          <button
            className='flex w-1/2 items-center justify-center rounded bg-red-500 px-4 py-2 text-base font-semibold text-white'
            onClick={() => setWalletImported(false)}
          >
            <span className=''>
              <MdOutlineArrowOutward />
            </span>
            <span className='ml-2' onClick={handleOpenPaymentModal}>
              Send
            </span>
          </button>
        </div>
      ) : (
        <button
          onClick={openWalletModal}
          className='m-auto flex rounded  bg-[#E6E6E6] bg-white px-4 py-2 text-center text-sm font-semibold text-black md:hidden md:text-base'
        >
          <span className='m-auto mr-2'>
            <FaArrowDown />
          </span>
          Import Wallet
        </button>
      )}

      <WalletModal isOpen={isModalOpen} onClose={closeModal} />

      <RecieveModalQr
        isOpen={isQrModalOpen}
        onClose={handleCloseQrModal}
        address={user?.wallet?.address || ''}
      />
      <SendPaymentModal
        open={isSendPaymentModalopen}
        close={handleClosePaymentModal}
      />
      {/* <SuccessModal
        open={isSendPaymentModalopen}
        close={handleClosePaymentModal}
      /> */}
      {/* <FailureModal
        open={isSendPaymentModalopen}
        close={handleClosePaymentModal}
      /> */}
      {/* <PaymentConfirmationModal
        isOpen={isSendPaymentModalopen}
        onClose={handleClosePaymentModal}
      /> */}
    </div>
  );
};

export default WalletCard;
