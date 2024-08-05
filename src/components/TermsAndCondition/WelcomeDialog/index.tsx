import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/Dialog'

import Welcome from "~/images/welcome.png"

interface IWelcomeModalProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

const WelcomeDialog = ({ open, onOpenChange, defaultOpen }: IWelcomeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen} >
      <DialogContent className='bg-white text-center max-w-[454px]'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-center font-bold text-3xl'>Welcome!</DialogTitle>
          <div className='flex justify-center my-2'>
            <Image src={Welcome} alt='Welcome' className='' />
          </div>
          <DialogDescription className='text-center'>
            Let’s win a property!
          </DialogDescription>
          <Link href="/signup" className='self-center'>
            <Button>Win your's Now !</Button>
          </Link>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default WelcomeDialog