import WalletModalDownloadButton from '@/components/portfolio/WalletModalDownloadButton';
import { useUpdateWalletMutation } from '@/generated/generated';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import appleIcon from '~/images/apple-icon.png';
import playStore from '~/images/playStore.png';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim() === '') {
      setError('Private key cannot be empty');
    } else {
      try {
        const wallet = new ethers.Wallet(value.trim());
        if (wallet.address) {
          setError(null);
        } else {
          setError('Invalid private key');
        }
      } catch (error) {
        setError('Invalid private key');
      }
    }
  };

  const [updateWalletMutation, { loading, error: importWalletError }] =
    useUpdateWalletMutation();

  const importWalletHandler = async () => {
    if (inputValue !== '') {
      try {
        const result = await updateWalletMutation({
          variables: {
            privateKey: {
              private_key: inputValue,
            },
          },
        });
        console.log('Updated wallet:', result.data?.updateWallet);
        setInputValue('');
      } catch (error) {
        console.error('Error updating wallet:', error);
      }
    } else {
      console.error('Private key cannot be empty');
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setInputValue('');
      setError('');
    }
  }, [isOpen]);

  return isOpen ? (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center  bg-[#2E2E2E] bg-opacity-75 p-0 md:p-8'>
      <div className='relative m-[5%] rounded-2xl rounded-[20px] bg-white p-4 text-center md:p-10'>
        <span
          className='absolute right-2 top-2 cursor-pointer text-black sm:right-4 sm:top-4'
          onClick={onClose}
        >
          <IoIosCloseCircleOutline size={24} />
        </span>
        <div className='mb-4 text-sm  font-semibold text-black md:text-[28px]'>
          Import SOMI wallet
        </div>
        <input
          type='text'
          placeholder='Enter Private Key'
          className='h-[50px] w-full rounded-xl border bg-[#F2F6F6] p-3 text-black sm:mb-6'
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <div className='mt-2 text-red-500'>{error}</div>

        <div className='p-3 text-left sm:mb-6 sm:p-4 md:p-6 xl:p-8'>
          <h3 className='m-2 text-center text-sm  font-semibold text-black sm:text-[18px] md:text-lg'>
            How to Import:
          </h3>

          <ol className='pl-5' style={{ listStyleType: 'decimal' }}>
            {['Install SOMI Wallet App'].map((step, index) => (
              <li
                key={index}
                className='p-1.5 text-[14px] font-normal leading-[19.6px] tracking-[1%] text-[#969AA6]'
              >
                {step}
              </li>
            ))}
          </ol>
          {/* flex-col min-[450px]:flex-row */}
          <div className=' flex w-full flex-col items-center justify-center gap-2 min-[450px]:flex-row'>
            <WalletModalDownloadButton
              icon={appleIcon}
              regularHeading='Download on the'
              boldHeading='App Store'
            />
            <WalletModalDownloadButton
              icon={playStore}
              regularHeading='Get In On'
              boldHeading='Google Play'
            />
          </div>
          <ol className='pl-2 sm:pl-5' style={{ listStyleType: 'decimal' }}>
            {[
              'Click ‘Security & Privacy’ in ‘Settings’',
              'Click ‘Export Private Key’',
              'Enter password and authenticate with OTP',
              'Paste your private key and Import',
            ].map((step, index) => (
              <li
                key={index}
                className='py-1 text-[14px] font-normal leading-[19.6px] tracking-[1%] text-[#969AA6] sm:p-1.5'
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
        <p className='font-sm mb-3 text-[14px] font-semibold leading-[19.6px] text-black	  sm:mb-6'>
          Or you could just import your wallet!
        </p>

        <button
          className='h-[50px] w-full rounded-[10px] bg-black px-4 py-3
            text-white disabled:bg-gray-300 md:w-[480px]'
          onClick={importWalletHandler}
          disabled={!!error || inputValue === ''}
        >
          Import
        </button>
      </div>
    </div>
  ) : null;
};

export default WalletModal;
