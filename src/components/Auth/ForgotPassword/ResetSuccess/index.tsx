"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LoginWrapper from '@/components/Auth/LoginWrapper'
import { Button } from '@/components/ui/Button'

import Success from "~/images/success.png"


const ResetSuccessful = () => {
  return (
    <LoginWrapper className="text-center">
      <div className='flex justify-center !mb-4'>
        <Image src={Success} alt='Success' className='' />
      </div>
      <p className='text-xl font-semibold'>Password reset</p>
      <p className='mb-4 mt-2 text-xs text-[#808080]'>Your new password has been successfully changed.</p>
      <Link href="/login" className='w-full'>
        <Button className='!my-6 w-full'>Continue to log in</Button>
      </Link>
    </LoginWrapper>
  )
}

export default ResetSuccessful