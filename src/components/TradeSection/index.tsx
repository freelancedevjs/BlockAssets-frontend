"use client"
import { Tab } from '@/components/profile/Tab';
import React from 'react'
import tokenImg from "~/images/BNBicon.png"
import Image from "next/image"
import Link from "next/link"

const tabTitles = ["USDT", "SOMI"]

const TradeSection = () => {

  const [activeTab, setActiveTab] = React.useState<string>('USDT');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };



  return (
    <div>
      <div className='mx-2 mb-2 hidden md:flex items-center'>
        <h1 className='hidden text-[24px] font-bold text-black md:block'>
          Trade
        </h1>
        <div className='flex flex-1 w-full justify-center'>
          <div className='hidden border-b border-gray-300 md:flex w-full justify-center max-w-[280px]'>
            {tabTitles.map((title: string) => (
              <Tab
                key={title}
                title={title}
                active={activeTab === title}
                onClick={() => handleTabClick(title)}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="overflow-x-auto mb-10 bg-white rounded-xl">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className='border-b'>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Name</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Property Name</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Price</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Change</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Volume</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 11 }).map((_, index) => (
              <tr key={index} className='border-b'>
                <td className=" px-4 py-3 whitespace-nowrap">
                  <Link href={`/trade/${index}`} key={index}>
                    <div className='flex items-center gap-3'>
                      <Image src={tokenImg} alt="token" className="w-8 h-8" />
                      <div>AKR</div>
                    </div>
                  </Link>
                </td>
                <td className=" px-4 py-3 whitespace-nowrap">Jalan Bani Bu hassan</td>
                <td className=" px-4 py-3 whitespace-nowrap">$100</td>
                <td className=" px-4 py-3 whitespace-nowrap text-red-400">23 (-1.01%)</td>
                <td className=" px-4 py-3 whitespace-nowrap">1000</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='w-full flex justify-end items-center'>
          <div className='flex items-center gap-3 p-4'>
            <p className='text-2xl text-gray-300'>{"<"}</p>
            <p className='text-sm'>{"1"}</p>
            <p className='bg-gray-300 h-5 w-5 flex justify-center items-center text-center rounded-sm text-sm'>{"2"}</p>
            <p className='text-sm'>{"3"}</p>
            <p className='text-sm'>{"4"}</p>
            <p className='text-2xl text-black'>{">"}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default TradeSection