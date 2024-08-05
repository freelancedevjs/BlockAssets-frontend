import { WalletTransaction } from '@/app/(authenticated)/portfolio/portfolio';
import { walletNameTrimmer } from '@/lib/utils';
import { useUserFetch } from '@/proividers/UserFetchProvider';
import { Loader2 } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React, { useMemo } from 'react';
import logoDark from '~/images/logoDark.png';

interface TxHistoryCardProps {
  transactions: WalletTransaction[] | undefined;
  nextCursor: string | null | undefined;
  loading: boolean;
}

const TxHistoryCard: React.FC<TxHistoryCardProps> = ({
  transactions,
  loading,
}) => {
  const { user } = useUserFetch();

  const userAddress = useMemo(() => user?.wallet?.address, [user]);

  return (
    <div className='md:[400px]  w-full space-y-4 overflow-x-hidden rounded-md border-[#D9D9D9] bg-[#f6f6f6] sm:border sm:p-2'>
      {!loading ? (
        userAddress && transactions ? (
          transactions.map((transaction, index) => (
            <div
              key={index}
              className='relative space-y-4 rounded-xl bg-white p-4 shadow-sm'
            >
              <div className='flex items-center justify-between'>
                <div className='items-left flex flex-col '>
                  <div className='my-2 flex items-center gap-2'>
                    <div className='hidden md:block'>
                      <Image src={logoDark} alt='Logo' height={26} width={26} />
                    </div>
                    <div className='block md:hidden'>
                      <Image src={logoDark} alt='Logo' height={20} width={20} />
                    </div>

                    <div className='text-xs font-semibold text-black sm:text-sm md:text-lg'>
                      {'token name'}
                    </div>
                  </div>
                  <div className='mt-2 text-xs text-gray-500 sm:text-sm'>
                    {moment(transaction.time).format('DD MMM, YYYY')}
                  </div>
                </div>

                <div className='absolute right-4 top-4 flex items-center space-x-2'>
                  {transaction.to === userAddress && (
                    <div className='rounded-2xl  bg-[#F4F7FF] px-2 py-2 text-sm font-normal text-[#0C78DB] sm:px-4 sm:text-base'>
                      Recieve
                    </div>
                  )}
                  {transaction.from === userAddress && (
                    <div
                      className={`rounded-2xl bg-[#FFF3F3]  px-4 py-2 text-sm font-normal text-[#FF3F3F] sm:text-base `}
                    >
                      Send
                    </div>
                  )}
                </div>
              </div>
              <div className='flex flex-col justify-between gap-x-4 md:flex-row'>
                <div className='flex flex-col text-gray-500'>
                  <div className=''>From:</div>
                  <div className='mb-2 break-all text-xs font-medium md:hidden'>
                    {walletNameTrimmer(transaction.from)}
                  </div>

                  <div>To:</div>
                  <div className='break-all  text-xs md:hidden'>
                    {walletNameTrimmer(transaction.to)}
                  </div>

                  <div className='my-2'>Txid:</div>
                  <div className='break-all text-xs font-medium text-[#0C78DB]  md:hidden'>
                    {walletNameTrimmer(transaction.id)}
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='mb-2'>{transaction.from}</div>
                  <div>{transaction.to}</div>
                  <div className='my-2 font-medium text-[#0C78DB]'>
                    {transaction.id}
                  </div>
                </div>
              </div>

              <hr className='border-2 border-t border-dashed border-gray-300' />

              {transaction.from == userAddress && (
                <div className='flex justify-between'>
                  <div className='text-xs font-bold text-[#808080] sm:text-sm md:text-lg md:font-normal'>
                    Network Fee:
                  </div>
                  <div className='text-right text-xs font-semibold md:text-base md:font-normal'>
                    {transaction.gas}
                  </div>
                </div>
              )}

              <div className='flex justify-between gap-2'>
                <div className='text-xs font-bold text-[#808080] sm:text-sm md:text-lg md:font-normal'>
                  Total:
                </div>
                <div className='flex items-center gap-1 sm:gap-2'>
                  <Image
                    src={logoDark}
                    alt='Logo'
                    height={18}
                    width={18}
                    className=''
                  />
                  {transaction.to === userAddress && (
                    <div className='break-all text-right text-xs font-bold text-[#0C78DB] md:text-base md:font-medium'>
                      {transaction.value} {'token name'} + {transaction.gas}{' '}
                      {'chain name'}
                    </div>
                  )}
                  {transaction.from === userAddress && (
                    <div className='break-all text-right text-xs font-bold text-[#FF3F3F] md:text-base md:font-medium'>
                      {transaction.value} {'token name'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='center rounded-xl bg-white p-4 py-20 text-lg font-semibold shadow-sm'>
            No transactions to show
          </div>
        )
      ) : (
        <div className='center rounded-xl bg-white p-4 py-20 text-lg font-semibold shadow-sm'>
          <Loader2 className=' animate-spin' />
        </div>
      )}
    </div>
  );
};

export default TxHistoryCard;
