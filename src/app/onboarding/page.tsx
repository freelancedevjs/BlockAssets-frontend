'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useState } from 'react';

import logo from "~/images/logo.png"
import Onboard1 from "~/images/onboarding1.png"
import Onboard2 from "~/images/onboarding2.png"
import Onboard3 from "~/images/onboarding3.png"
import Onboard4 from "~/images/onboarding4.png"
import Onboard5 from "~/images/onboarding5.png"


const onBoardSteps = [
  {
    title: 'Become a building owner with minimal investment.',
    description: 'You can easily invest in high-value buildings with a small amount of money through fractional property investment.',
    image: Onboard1
  },
  {
    title: 'Your building will make you money!',
    description: 'Even if you buy just one building piece, the dividends will gradually create a second salary.',
    image: Onboard2
  },
  {
    title: 'Gaining decision-making authority for the building',
    description: 'By staking tokens, you are granted voting rights, allowing you to participate in a fair decision-making process.',
    image: Onboard5
  },
  {
    title: 'Quick and simple buying and selling with a swish!',
    description: 'Trade my building pieces quickly and safely like stocks.',
    image: Onboard4
  },
  {
    title: 'Because it’s All safe!I have no choice but to have fun',
    description: 'My building managed by experts, My assets safe based on blockchain technology.',
    image: Onboard3
  },
]


export default function OnboardingPage() {

  const [currentStep, setcurrentStep] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < 4) {
      setcurrentStep(prev => prev + 1)
    } else {
      router.push("/termservices")
    }
  }

  return (
    <div className='flex flex-col sm:flex-row px-4 md:px-8 py-10 gap-6 bg-[#F5F5F5] min-h-screen'>
      <Link href="/termservices">
        <div className='flex justify-end sm:hidden w-full text-right font-medium cursor-pointer'>
          {"Skip >"}
        </div>
      </Link>
      <div className='w-full order-2 sm:order-1 sm:flex-[0.45]'>
        <div className='hidden sm:flex items-center justify-between gap-6 font-medium text-base'>
            <div>
              <Image src={logo} alt="logo" />
            </div>
          <Link href="/termservices">
            <div className='cursor-pointer whitespace-nowrap text-sm md:text-base'>
              {"Skip >"}
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center sm:items-start justify-center h-[80%] px-3'>
          <h2 className='text-center sm:text-left'>{onBoardSteps[currentStep].title}</h2>
          <p>{onBoardSteps[currentStep].description}</p>
          <div className='flex w-full justify-center my-4 '>
            <div className='flex justify-center shadow sm:hidden bg-white rounded-full w-max p-2 gap-1.5 items-center cursor-pointer'>
              {Array.from({ length: onBoardSteps.length }).map((_, index) => (
                <div key={index} className={`h-2.5 w-2.5 rounded-full ${currentStep === index ? "bg-black" : "bg-gray-300"}`}></div>
              ))}
            </div>
          </div>
          <button className='bg-black rounded-md sm:mt-8 text-white text-base w-full max-w-sm py-2.5 px-4' onClick={handleNext}>Next</button>
        </div>
        <div className='hidden sm:flex gap-1.5 items-center cursor-pointer px-3'>
          {Array.from({ length: onBoardSteps.length }).map((_, index) => (
            <div key={index} className={`h-2.5 w-2.5 rounded-full ${currentStep === index ? "bg-black" : "bg-gray-300"}`}></div>
          ))}
        </div>
      </div>
      <div className='order-1 sm:order-2 flex-[0.5] flex w-full items-center justify-center bg-white rounded-xl p-4'>
        <Image src={onBoardSteps[currentStep].image} alt="image1" />
      </div>
    </div>
  );
}
