"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import LoginWrapper from '@/components/Auth/LoginWrapper'
import SuccessDialog from '@/components/Auth/Wallet/SuccessDialog'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import appStore from "~/images/appstore.png"
import googlePlay from "~/images/googleplay.png"

const Wallet = () => {

  const [privateKey, setPrivateKey] = useState("")
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false)

  const handleImport = () => {
    setOpenSuccessPopup(true)
  }

  return (
    <LoginWrapper title="Import SOMI wallet">
      <Input value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} placeholder='Enter private key' className='my-4' />
      <div className='h-[1px] w-full bg-[#F2F2F2] mb-4' />
      <p className='text-base text-center font-bold mb-4'>How To Import</p>
      <div className='flex flex-col items-start text-sm gap-2'>
        <p className='text-[#969AA6]'>1. Install SOMI Wallet App</p>
        <div className='flex items-center gap-3'>
          <Image src={appStore} alt="appStore" />
          <Image src={googlePlay} alt="googlePlay" />
        </div>
        <p className='text-[#969AA6]'>2. Click ‘Security&Privacy’ in ‘settings’</p>
        <p className='text-[#969AA6]'>3. Click ‘Export Private Key’</p>
        <p className='text-[#969AA6]'>4. Enter password and authenticate with OTP</p>
        <p className='text-[#969AA6]'>5. Paste your private key and Import</p>
      </div>
      <p className='mt-6 font-semibold text-center mb-4'>Or you could just import your wallet!</p>
      <Button className='w-full' disabled={!privateKey} onClick={handleImport}>Import</Button>
      <SuccessDialog open={openSuccessPopup} onOpenChange={setOpenSuccessPopup} />
    </LoginWrapper>
  )
}

export default Wallet