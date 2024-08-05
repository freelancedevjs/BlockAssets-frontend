"use client"
import { useUserType } from '@/contexts/userTypeContext'
import { Check } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import BadgeIcon from "~/images/userType/badge.png"
import CustomerIcon from "~/images/userType/customer.png"
import SuiteCaseIcon from "~/images/userType/suitcase.png"


type IUserType = "Individual" | "Corporate" | "Accredited Investor"

interface IUserArray {
  type: IUserType,
  icon: StaticImageData
}


const useTypeArray: IUserArray[] = [
  {
    type: "Individual",
    icon: CustomerIcon
  },
  {
    type: "Corporate",
    icon: SuiteCaseIcon
  },
  {
    type: "Accredited Investor",
    icon: BadgeIcon
  },
]


const UserType = ({ icon, type, onClick, selectedUserType }: { icon: StaticImageData, type: IUserType, onClick: (type: IUserType) => void, selectedUserType: IUserType | undefined }) => {
  return (
    <div onClick={() =>  onClick(type) } className='border border-[#E6E6E6] cursor-pointer hover:border-black rounded-md bg-white flex items-center justify-between gap-3 px-3 py-2'>
      <div className='flex items-center gap-2'>
        <Image src={icon} alt={type} />
        <div className='font-medium text-lg'>{`I'm a ${type}`}</div>
      </div>
      {selectedUserType === type ? <div className='bg-black text-white p-[3px] flex items-center justify-center h-4 w-4 rounded-full'>
        <Check size={20} />
      </div> : <div className='border h-4 w-4 rounded-full'>
      </div>}
    </div>
  )
}

const Step4 = () => {
  const { selectedUserType, setSelectedUserType } = useUserType()
  const handleUserSelect = (type: IUserType) => {
    setSelectedUserType(type)
  }

  return (
    <div className='text-sm max-w-md w-full py-6'>
      <p className='text-2xl font-semibold'>Let us know your identity as an investor!</p>
      <div className='mt-6 flex flex-col gap-4 w-full'>
        {useTypeArray.map((userType, i) => (
          <UserType key={i} icon={userType.icon} type={userType.type} selectedUserType={selectedUserType} onClick={handleUserSelect} />
        ))}
      </div>
    </div>
  )
}

export default Step4