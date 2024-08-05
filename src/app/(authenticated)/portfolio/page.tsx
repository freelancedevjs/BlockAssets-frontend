'use client';

import * as React from 'react';
import NoAsset from '~/svg/noasset.svg';
import WalletCard from '@/components/portfolio/WalletCard';
import PieChart from '@/components/PieChart';
import PortfolioStakedListing from '@/components/portfolio/PortfolioStakedListing';
import DividendHistoryCard from '@/components/portfolio/DividendHistoryCard';
import TxHistoryCard from '@/components/portfolio/TxHistoryCard';
import dividendHistoryImg from '~/images/dividend-history-img.png';
import { gql, useQuery } from '@apollo/client';
import {
  GetWalletBalancesResponse,
  GetWalletTransactionsResponse,
} from '@/app/(authenticated)/portfolio/portfolio';
import { Loader2 } from 'lucide-react';
import { useUserFetch } from '@/proividers/UserFetchProvider';
import { useEffect } from 'react';

const GET_WALLET_BALANCES = gql`
  query GetWalletBalances {
    getWalletBalances {
      tokens
    }
  }
`;

const GET_TRANSACTIONS = gql`
  query GetTransactions {
    getWalletTransactions {
      transactions
      nextCursor
    }
  }
`;

const Portfolio: React.FC = () => {
  const tabs = [
    { label: 'Assets', id: 'assets' },
    { label: 'Dividend History', id: 'dividend-history' },
    { label: 'Tx History', id: 'tx-history' },
  ];
  const { user } = useUserFetch();

  const [activeTab, setActiveTab] = React.useState('assets');
  const [isQrModalOpen, setIsQrModalOpen] = React.useState(false);
  const [isWalletImported, setIsWalletImported] = React.useState(false);

  // Mock data for staked items
  const stakedItems = [
    { amount: '50.9580', value: '$498', name: 'SOMI' },
    { amount: '50.9580', value: '$498', name: 'BNB' },
    { amount: '50.9580', value: '$498', name: 'AKD' },
    { amount: '50.9580', value: '$498', name: 'BNB' },
  ];

  const dividendData = [
    {
      imageSource: dividendHistoryImg,
      heading: 'Jalan Bani Bu Hassan',
      arr: '14.8% ARR',
      frequency: 'Monthly',
      amount: '$4,000 AKD',
      totalAmount: '$36,000',
    },
    {
      imageSource: dividendHistoryImg,
      heading: 'Oak Island Resort',
      arr: 'Another ARR',
      frequency: 'Monthly',
      amount: '$4,000 AKD',
      totalAmount: '$36,000',
    },
    {
      imageSource: dividendHistoryImg,
      heading: 'Bu hassan',
      arr: '14.8% ARR',
      frequency: 'Monthly',
      amount: '$4,000 AKD',
      totalAmount: '$36,000',
    },
    {
      imageSource: dividendHistoryImg,
      heading: 'Bani Bu hassan',
      arr: '14.8% ARR',
      frequency: 'Monthly',
      amount: '$4,000 AKD',
      totalAmount: '$36,000',
    },
  ];

  // const transactionsData: Transaction[] = [
  //   {
  //     token: 'SOMI',
  //     dateRange: '23 Jun, 2023 - 30 Jun, 2023',
  //     action: 'Receive',
  //     from: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     to: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     txid: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     networkFee: '0.0002372 BNB',
  //     total: '377 SOMI + 0.0002372 BNB',
  //   },
  //   {
  //     token: 'SOMI',
  //     dateRange: '23 Jun, 2023 - 30 Jun, 2023',
  //     action: 'Send',
  //     from: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     to: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     txid: '0x83d324349e74dd923eg642bd1f312f837236g9g',
  //     networkFee: '0.0002372 BNB',
  //     total: '377 SOMI + 0.0002372 BNB',
  //   },
  // ];

  const {
    loading,
    error,
    data: TokensData,
  } = useQuery<GetWalletBalancesResponse>(GET_WALLET_BALANCES);

  const tokens = React.useMemo(() => {
    const unsortedTokens = TokensData?.getWalletBalances.tokens;
    const sortedTokens = unsortedTokens
      ? [...unsortedTokens].sort(
          (a, b) => parseFloat(b.balance) - parseFloat(a.balance)
        )
      : [];
    return sortedTokens;
  }, [TokensData]);

  const totalTokensBalance = React.useMemo(() => {
    let balance = 0;
    tokens?.forEach((token) => {
      balance += parseFloat(token.balance);
    });
    return balance;
  }, [tokens]);

  const {
    loading: transactionsLoading,
    error: transactionsError,
    data: transactionsData,
  } = useQuery<GetWalletTransactionsResponse>(GET_TRANSACTIONS);

  const transactions = React.useMemo(() => {
    return transactionsData?.getWalletTransactions.transactions;
  }, [transactionsData]);

  const nextCursor = React.useMemo(() => {
    return transactionsData?.getWalletTransactions.nextCursor;
  }, [transactionsData]);

  console.log('trx', transactionsData);

  useEffect(() => {
    if (user && user.wallet?.address) {
      setIsWalletImported(true);
    } else {
      setIsWalletImported(false);
    }
  }, [user]);

  const renderTabContent = () => {
    if (!isWalletImported) {
      return (
        <div className='flex items-center justify-center rounded-md bg-white p-6 text-black'>
          <div className='w-full max-w-md'>
            <div className='text-center'>
              <NoAsset className='mx-auto mt-4 sm:h-80 ' />
            </div>
            <p className='w-full text-center text-xs font-medium sm:text-sm md:text-base'>
              Import your wallet and subscribe to property and purchase property
              tokens!
            </p>
          </div>
        </div>
      );
    }
    switch (activeTab) {
      case 'assets':
        return isWalletImported ? (
          <div className='flex flex-col gap-3 md:pb-0 lg:flex-row'>
            {!loading ? (
              tokens.length > 0 ? (
                <div className='relative  flex items-center justify-between rounded-lg border border-[#E6E6E6] bg-white p-4 px-2 md:p-8 lg:w-1/2'>
                  <div className='flex flex-col'>
                    <span className='font-semi absolute top-2 mx-2 my-2 text-lg font-semibold text-[#333333] md:top-5 md:my-0'>
                      My portfolio
                    </span>

                    <div className='legend ml-2 mt-4 md:ml-0 md:mt-0'>
                      {totalTokensBalance &&
                        tokens.map((token, index) => {
                          const tokenPercentage =
                            (parseFloat(token.balance) / totalTokensBalance) *
                            100;
                          return (
                            <div
                              key={index}
                              className='m-1 mt-3 flex items-center justify-between md:m-2 md:justify-start '
                            >
                              <span className='mr-2 inline-block rounded-full text-xs font-medium text-black md:text-base'>
                                {token.name}:
                              </span>
                              <span className='text-xs font-semibold text-black md:text-lg'>
                                {tokenPercentage.toFixed(1)}%
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className='m-2 hidden md:block'>
                    <PieChart tokens={tokens} />
                  </div>
                  <div className='m-2 block md:hidden'>
                    <PieChart
                      tokens={tokens}
                      chartHeight={131}
                      chartWidth={131}
                    />
                  </div>
                </div>
              ) : (
                <div className='center p-4 px-2 text-lg font-semibold md:p-8 lg:w-1/2'>
                  No tokens to show
                </div>
              )
            ) : (
              <div className=' center p-4 px-2 lg:w-1/2'>
                <Loader2 className=' animate-spin' />{' '}
              </div>
            )}
            <div className='lg:w-1/2'>
              <PortfolioStakedListing stakedItems={stakedItems} />
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center rounded-md bg-white p-6 text-black'>
            <div className='w-full max-w-md'>
              <div className='text-center'>
                <NoAsset className='mx-auto mt-4 sm:h-80 ' />
              </div>
              <p className='w-full text-center text-xs font-medium sm:text-sm md:text-base'>
                Import your wallet and subscribe to property and purchase
                property tokens!
              </p>
            </div>
          </div>
        );

      case 'dividend-history':
        return <DividendHistoryCard data={dividendData} />;

      case 'tx-history':
        return (
          <TxHistoryCard
            transactions={transactions}
            nextCursor={nextCursor}
            loading={transactionsLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto mt-1'>
      <div className='mx-2 mb-2 hidden md:block'>
        <h1 className='text-[22px] font-bold text-black'>Portfolio</h1>
      </div>

      {/* wallet balance card */}
      <div className='rounded-lg p-0 md:bg-white md:p-10 md:shadow-md'>
        <WalletCard
          walletImported={isWalletImported}
          totalBalance='$1000.00'
          totalSOMIBalance='0'
          stakedBalance='0'
          setIsQrModalOpen={setIsQrModalOpen}
          isQrModalOpen={isQrModalOpen}
          setIsWalletImported={setIsWalletImported}
          user={user}
        />
        {/* Tabs */}
        <div className='mt-2'>
          <div className='mb-2 mt-6 flex w-full items-center gap-3 overflow-x-auto rounded-2xl bg-white px-1 py-3 sm:justify-around '>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={` cursor-pointer whitespace-nowrap px-2 py-2 text-center text-xs md:px-4 md:text-base ${
                  activeTab === tab.id
                    ? 'text-gray-333 rounded-3xl bg-[#E6E6E6]   font-semibold md:rounded-none md:border-b-2 md:border-[#333333] md:bg-white md:font-bold'
                    : 'text-gray-808080 font-normal text-[#808080]  md:border-b md:border-gray-200 md:text-base'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
