"use client"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import BgElement from "~/images/bg-element.png"
import logoM from "~/images/logoMobile.png"


interface IMobileProps {
  className?: string
  children: React.ReactNode;
  title: string
  subTitle?: string
  iconSrc: StaticImageData
}


const MobileLoginWrapper: React.FC<IMobileProps> = ({ title, subTitle, iconSrc, children, className }) => {
  return (
    <div className={twMerge(`bg-[#EEEEEE] h-screen block sm:hidden`, className)}>
      <div className='absolute -top-4 w-full h-[70vh] z-10 rounded-2xl' style={{
        background: `url(${BgElement.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: "cover"

      }}></div>
        <div className='flex justify-center z-20'>
          <Image src={logoM} alt='logo' className='z-20' />
        </div>
      <div className='bg-white shadow-lg rounded-3xl px-3 py-2.5 relative z-20 m-3'>
        <div className='w-full flex justify-center'>
          <Image src={iconSrc} alt={title} />
        </div>
        <p className='text-xl font-semibold text-center mb-2'>{title}</p>
        {subTitle && <p className='text-sm text-[#181818] font-normal text-center mb-4'>{subTitle}</p>}
        {children}
      </div>
    </div>
  )
}

export default MobileLoginWrapper