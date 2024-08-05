"use client"
import React, { useState } from 'react'
import Usdt from "~/images/usdt.png"
import Image from "next/image"
import { Tab } from '@/components/profile/Tab'
import BidAsk from '@/components/TradeSection/TradeInternalSection/BidAsk'
import BasicInfo from '@/components/TradeSection/TradeInternalSection/BasicInfo'
import Disclosure from '@/components/TradeSection/TradeInternalSection/Disclosure'
import { Button } from '@/components/ui/Button'
import Link from "next/link"
import BuySellDialog from '@/components/TradeSection/TradeInternalSection/BuySellModal'

const tabList = ["Basic", "Trade", "Disclosure"]

const TradeInternalSection = () => {
  const [openModal, setOpenModal] = useState(false)
  const [activeTab, setActiveTab] = React.useState<string>('Trade');
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy")
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };


  const handleBuySell = (type: "buy" | "sell") => {
    setTradeType(type)
    setOpenModal(prev => !prev)
  }

  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex items-center gap-3'>
        <Image src={Usdt} alt="token" className="" />
        <div>AKR/USDT</div>
      </div>
      <div className='flex items-center py-4 border-b justify-between gap-4'>
        <div className='text-green-600'>
          <div className='text-2xl font-semibold'>$2,356.041 USDT</div>
          <div className='text-sm'>+23.560 (+1.01%)</div>
        </div>
        <div className='text-sm text-text-gray'>
          <div>Volume</div>
          <div><span className='text-black'>347.920</span> AKD</div>
        </div>
        <div className='text-sm text-text-gray'>
          <div>24h High</div>
          <div className='text-green-600'>$4,970</div>
        </div>
        <div className='text-sm text-text-gray'>
          <div>24h Low</div>
          <div className='text-red-500'>$4,970</div>
        </div>
        <div className='text-sm text-text-gray'>
          <div>Open</div>
          <div className='text-black'>$4,970</div>
        </div>
        <div className='text-sm text-text-gray'>
          <div>Close</div>
          <div className='text-black'>$4,970</div>
        </div>
      </div>
      <div className='w-full flex justify-center my-4'>
        <div className='hidden border-b border-gray-300 md:flex w-full justify-center'>
          {tabList.map((title: string) => (
            <Tab
              key={title}
              title={title}
              active={activeTab === title}
              onClick={() => handleTabClick(title)}
            />
          ))}
        </div>
      </div>
      {activeTab === "Trade" && <BidAsk />}
      {activeTab === "Basic" && <BasicInfo />}
      {activeTab === "Disclosure" && <Disclosure />}

      <div className='w-full flex justify-center gap-4 mt-10 mb-16'>
        <Button className='px-8 bg-green-600 text-base font-medium' onClick={() => handleBuySell("buy")}>Buy</Button>
        <Button className='px-8 bg-red-500 text-base font-medium' onClick={() => handleBuySell("sell")}>Sell</Button>
        <Link href="/trade/order">
          <Button className='px-8 bg-primary-gray text-base text-black font-medium'>Order</Button>
        </Link>
      </div>
      <BuySellDialog open={openModal} onOpenChange={setOpenModal} tradeType={tradeType} setTradeType={setTradeType} />
    </div>
  )
}

export default TradeInternalSection