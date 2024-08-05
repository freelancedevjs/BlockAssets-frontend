import Image from 'next/image'
import React, { Dispatch, SetStateAction, useLayoutEffect } from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/Dialog'

import Input from '@/components/ui/Input'
import { AlertCircle } from 'lucide-react'

interface IWelcomeModalProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  tradeType: "buy" | "sell"
  setTradeType: Dispatch<SetStateAction<"buy" | "sell">>
}
interface TabProps {
  title: string;
  onClick: () => void;
  tradeType: "buy" | "sell"
}

const tabTitles = ["buy", "sell"]


const AmountBox = ({ value }: { value: string }) => {
  return (
    <div className='cursor-pointer w-[70px] h-[30px] bg-primary-gray rounded-md text-xs flex justify-center items-center'>
      {value}
    </div>
  )
}


export const Tab: React.FC<TabProps> = ({ title, onClick, tradeType }) => {
  const tabClassName = ` ${tradeType === title
    ? `border-b-2  ${tradeType === "buy" ? "border-green-500" : "border-red-500"}  font-semibold text-base`
    : 'text-gray-500'
    }`;

  return (
    <div className={`cursor-pointer capitalize border-b flex-1 py-2 text-center ${tabClassName}`} onClick={onClick}>
      {title}
    </div>
  );
};


const BuySellDialog = ({ open, onOpenChange, defaultOpen, tradeType, setTradeType }: IWelcomeModalProps) => {
  const handleTabClick = (tab: "buy" | "sell") => {
    setTradeType(tab);
  };



  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen} >
      <DialogContent className='bg-white text-center max-w-[454px]'>
        <DialogHeader className='text-center'>
          <div>
            <div className='w-full flex items-center'>
              {tabTitles.map((title: string) => (
                <Tab
                  tradeType={tradeType}
                  key={title}
                  title={title}
                  onClick={() => handleTabClick(title as any)}
                />
              ))}
            </div>

            <Input label='Unit Price' placeholder='Enter unit price' type='number' additionalInfo='USD' className='my-4' />
            <Input label='Quantity' placeholder='Enter quantity' type='number' />

            <div className='flex items-center gap-3 mt-2 flex-wrap'>
              {["+10", "+50", "+100", "Max"].map((item, index) => (
                <AmountBox key={index} value={item} />))}
            </div>


            <div className='text-red-600 flex text-xs items-center gap-3 mt-2'>
              <AlertCircle />
              <div>Exceeds max quantity</div>
            </div>


            <div className='w-full flex items-center gap-4 mt-8'>
              <Button className=' bg-primary-gray w-1/2 text-black' onClick={() => onOpenChange && onOpenChange(false)}>Reset</Button>
              <Button className={` w-1/2 capitalize ${tradeType === "buy" ? "bg-green-500" : "bg-red-500"}`} onClick={() => onOpenChange && onOpenChange(false)}>{`$3000 ${tradeType}`}</Button>
            </div>
          </div>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default BuySellDialog