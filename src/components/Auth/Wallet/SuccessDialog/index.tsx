"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/Dialog'

interface ISuccessModalProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

const SuccessDialog = ({ open, onOpenChange, defaultOpen }: ISuccessModalProps) => {
  const router = useRouter()
  const handleOk = () => {
    router.push("/")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen} >
      <DialogContent className='bg-white text-center max-w-[454px]'>
        <DialogHeader className='text-center mt-1'>
          <DialogDescription className='text-center text-base font-medium'>
            You have successfully imported your Wallet
          </DialogDescription>
          <Button className='!my-6' onClick={handleOk}>Ok</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessDialog