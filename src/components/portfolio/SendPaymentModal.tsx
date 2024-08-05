import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import darkLogo from '~/images/logoDark.png';
import BNB from '~/images/BNBicon.png';
import USDT from '~/images/USDTicon.png';
import { useRouter } from 'next/navigation';

const SendPaymentModal = ({ open, close }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedToken, setSelectedToken] = useState<string>('SOMI');
  const tokenOptions = ['SOMI', 'USDT', 'BNB'];
  const [address, setAddress] = useState<string>('');
  const [networkFee, setNetworkFee] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [addressError, setAddressError] = useState<string>('');
  const [quantityError, setQuantityError] = useState<string>('');
  const [networkFeeError, setNetworkFeeError] = useState<string>('');
  const [redirect, setRedirect] = useState(false);

  const handleTokenChange = (token) => {
    setSelectedToken(token);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (open) {
      setAddressError('');
      setQuantityError('');
      setNetworkFeeError('');
      setRedirect(false);
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, close]);

  const isAddressValid = (address) => {
    const addressRegex = /^0x[0-9a-fA-F]{40}$/;
    return addressRegex.test(address);
  };

  const router = useRouter();

  const handleSend = () => {
    setAddressError('');
    setQuantityError('');
    setNetworkFeeError('');
    setRedirect(true);

    if (address.trim() === '') {
      setAddressError('Address is required');
    } else if (!isAddressValid(address)) {
      setAddressError('Invalid address format');
    } else {
      setAddressError('');
    }

    if (quantity === '' || quantity === null) {
      setQuantityError('Quantity is required');
    } else {
      if (quantity > 50.39247) {
        setQuantityError('Quantity should not be greater than 50.39247');
      } else {
        setQuantityError('');
      }
    }

    if (networkFee === '' || networkFee === null) {
      setNetworkFeeError('Network fee is required');
    } else {
      if (networkFee < 1) {
        setNetworkFeeError('You don’t have enough BNB to cover network fee.');
      } else {
        setNetworkFeeError('');
      }
    }
  };

  useEffect(() => {
    if (open && redirect) {
      // Check if there are no errors and redirect
      if (
        addressError === '' &&
        quantityError === '' &&
        networkFeeError === ''
      ) {
        router.push('/portfolio/verifyPhoneNumber');
      }
    }
  }, [open, addressError, quantityError, networkFeeError, redirect]);

  if (!open) {
    return null;
  }

  return (
    <div className='fixed left-0 top-0 z-[99] flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 '>
      <div
        ref={modalRef}
        className='m-[5%] w-full max-w-md rounded-lg bg-white p-6 md:p-10'
      >
        <h2 className='mb-4 text-center text-xl font-bold text-black'>
          Send to
        </h2>
        <label className='mb-1 block font-normal text-black'>Token</label>

        <div className='relative mb-2 flex'>
          <div
            className='flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#E6E6E6] p-2 text-center'
            onClick={toggleDropdown}
          >
            <div className='flex flex-row items-center justify-center gap-2'>
              <Image
                alt='Logo'
                src={
                  selectedToken === 'SOMI'
                    ? darkLogo
                    : selectedToken === 'USDT'
                      ? USDT
                      : BNB
                }
                width={26}
                height={26}
              />
              <span className='font-[500] text-black'>{selectedToken}</span>
            </div>
            <div className='absolute right-2'>
              <IoMdArrowDropdown color='black' />
            </div>
          </div>
          {isDropdownOpen && (
            <ul className='absolute left-0 z-10 mt-1 w-full rounded-lg border bg-black'>
              {tokenOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleTokenChange(option)}
                  className='cursor-pointer p-2 hover:bg-gray-200 hover:text-black'
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='mb-4'>
          <div className='flex  rounded-lg border border-[#E6E6E6]'>
            <div className='flex w-1/3 items-center justify-center gap-2 border-r border-[#E6E6E6] p-2 text-center'>
              <Image alt='Logo' src={darkLogo} width={22} height={22} />
              <span className='font-[500] text-black text-xs sm:text-sm'>SOMI</span>
            </div>
            <div className='flex w-1/3 items-center justify-center gap-2 border-r border-[#E6E6E6] p-2 text-center'>
              <svg
                width='20'
                height='17'
                viewBox='0 0 20 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.89 5.55664V3.40648H16.7816V0.0136719H3.20344V3.40648H8.10875V5.55664C3.99922 5.7543 0.914062 6.5793 0.914062 7.56758C0.914062 8.55586 3.99578 9.3757 8.10875 9.57852V16.6752H11.89V9.57852C15.9995 9.38258 19.0847 8.55758 19.0847 7.56758C19.0847 6.57758 16.003 5.7543 11.89 5.55664ZM9.99938 8.9357C5.54953 8.9357 1.94188 8.2482 1.94188 7.41977C1.94188 6.70648 4.56984 6.10836 8.10531 5.94852V8.37711C8.71375 8.40461 9.34625 8.42008 9.99594 8.42008C10.6456 8.42008 11.2816 8.40461 11.8866 8.37711V5.94852C15.422 6.10836 18.05 6.70648 18.05 7.41977C18.0569 8.2568 14.4492 8.9357 9.99938 8.9357Z'
                  fill='black'
                />
              </svg>
              <span className='font-[500] text-black text-xs sm:text-sm'>USDT</span>
            </div>
            <div className='flex w-1/3 items-center justify-center gap-2 p-2 text-center'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='22' height='22' rx='11' fill='#FFF0C2' />
                <g clip-path='url(#clip0_1857_22897)'>
                  <path
                    d='M11.0026 5.95703C8.20677 5.95703 5.96094 8.20286 5.96094 10.9987C5.96094 13.7945 8.20677 16.0404 11.0026 16.0404C13.7984 16.0404 16.0443 13.7945 16.0443 10.9987C16.0443 8.20286 13.7984 5.95703 11.0026 5.95703ZM9.71927 8.98203L10.2234 8.47786L11.0026 7.6987L11.7818 8.47786L12.2859 8.98203L13.0193 9.71536L12.2401 10.4945L11.5068 9.7612L11.0026 9.25703L10.4984 9.7612L9.7651 10.4945L8.98594 9.71536L9.71927 8.98203ZM11.7359 10.9987L11.0026 11.732L10.2693 10.9987L11.0026 10.2654L11.7359 10.9987ZM7.7026 10.9987L8.48177 10.2195L9.26094 10.9987L8.48177 11.7779L7.7026 10.9987ZM11.0026 14.2987L10.2234 13.5195L9.71927 13.0154L8.98594 12.282L9.7651 11.5029L10.4984 12.2362L11.0026 12.7404L11.5068 12.2362L12.2401 11.5029L13.0193 12.282L11.0026 14.2987ZM13.5234 11.7779L12.7443 10.9987L13.5234 10.2195L14.3026 10.9987L13.5234 11.7779Z'
                    fill='#F0B90B'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1857_22897'>
                    <rect
                      width='11'
                      height='11'
                      fill='white'
                      transform='translate(5.5 5.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className='font-[500] text-black text-xs sm:text-sm'>BNB</span>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <label className='mb-2 block font-bold sm:font-normal text-black'> Address</label>
          <input
            type='text'
            className={`w-full rounded-lg border ${addressError ? 'border-[#FF3F3F]' : 'border-[#E6E6E6]'
              } p-3 text-black`}
            placeholder='Enter address'
            onChange={(e) => setAddress(e.target.value)}
          />
          {addressError && (
            <p className='mt-1 text-xs text-[#FF3F3F]'>{addressError}</p>
          )}
        </div>

        <div className='mb-2'>
          <label className='mb-2 block font-bold sm:font-normal text-black'> Quantity</label>
          <input
            type='number'
            className={`w-full rounded-lg border ${quantityError ? 'border-[#FF3F3F]' : 'border-[#E6E6E6]'
              } p-3 text-black`}
            placeholder='0'
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
          />
        </div>

        <p
          className={`mb-4 text-xs font-normal  ${quantityError ? 'text-[#FF3F3F]' : 'text-black'
            } `}
        >
          My Balance: 50.39247 SOMI
        </p>

        <div className='mb-4'>
          <label className='mb-2 block font-bold sm:font-normal text-black'>
            Network fee
          </label>
          <div className={`relative rounded-lg border ${networkFeeError ? 'border-[#FF3F3F]' : 'border-[#E6E6E6]'
            } border border-[#E6E6E6]`}>
            <input
              type='number'
              className={`w-[95%] rounded-lg  p-3 pl-3 pr-10 text-black`}
              placeholder='Enter network fee'
              onChange={(e) => setNetworkFee(parseFloat(e.target.value))}
            />

            <span className='absolute inset-y-0 right-0 flex items-center pr-3 font-medium text-[#808080]'>
              0 BNB
            </span>
          </div>
          {networkFeeError && (
            <p className='mt-1 text-xs text-[#FF3F3F]'>{networkFeeError}</p>
          )}
        </div>

        <div className='flex justify-center rounded-lg'>
          <button
            className='w-[250px] rounded-lg bg-black px-4 py-2.5 text-base font-semibold text-white'
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendPaymentModal;
