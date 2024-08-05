import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/Dialog'

import Exclaim from "~/images/exclaim.png"

interface IWalletModalProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

const ErrorDialog = ({ open, onOpenChange, defaultOpen }: IWalletModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen} >
      <DialogContent className='bg-white text-center max-w-[454px]'>
        <DialogHeader className='text-center'>
          <div className='flex justify-center my-2'>
            <Image src={Exclaim} alt='Wallet' className='' />
          </div>
          <DialogDescription className='text-center'>
            Import Failed. Invalid Private Key
          </DialogDescription>
          <Button className='!my-6' onClick={() => onOpenChange && onOpenChange(false)}>Ok</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ErrorDialog