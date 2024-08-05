"use client"
import { Check } from 'lucide-react';
import Image from "next/image"
import Link from 'next/link';
import React, { useMemo, useState } from 'react'

import Step1 from '@/components/TermsAndCondition/steps/Step1';
import Step2 from '@/components/TermsAndCondition/steps/Step2';
import Step3 from '@/components/TermsAndCondition/steps/Step3';
import Step4 from '@/components/TermsAndCondition/steps/Step4';
import Step5 from '@/components/TermsAndCondition/steps/Step5';
import WelcomeDialog from '@/components/TermsAndCondition/WelcomeDialog';
import { Button } from '@/components/ui/Button';

import logo from '~/images/logo.png';
// import Step6 from '@/components/TermsAndCondition/steps/Step6';
// import Step7 from '@/components/TermsAndCondition/steps/Step7';

const StepsOptions = [
  { title: 'Terms and Conditions', component: Step1 },
  { title: 'Privacy Policy', component: Step2 },
  { title: 'Electronic Financial Transaction', component: Step3 },
  { title: 'Investor Identity', component: Step4 },
  { title: 'Investor Deatils', component: Step5 },
];


const StepIndicator = ({ index, currentStep, option }: { index: number, currentStep: number, option: typeof StepsOptions[0] }) => {
  return (
    <div className='flex flex-row items-center sm:items-start sm:flex-col' key={index}>
      <div
        key={index}
        className={` flex items-center gap-2.5 rounded-xl px-2 sm:px-4 py-2 ${currentStep >= index
          ? 'font-medium text-black'
          : ' font-normal text-[#808080]'
          } `}
      >
        {currentStep >= index ? <div className='bg-black text-white p-[3px] flex items-center justify-center h-4 w-4 rounded-full'>
          <Check size={20} />
        </div> :
          <div className='h-4 w-4 rounded-full border p-2.5 flex items-center justify-center text-[13px]'>
            {`0${index + 1}`}
          </div>
        }
        <div className="hidden sm:block text-sm truncate">{option.title}</div>
      </div>
      {index < StepsOptions.length - 1 && <div className={` h-[2px] w-7 sm:w-[2px] sm:h-10 sm:ml-6  ${currentStep >= index + 1 ? "bg-black" : "bg-[#B3B3B3]"}`}></div>}
    </div>
  )
}


const TermsAndCondition = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const [open, setOpen] = useState(false)
  const handleAgreement = () => {
    if (currentStep < StepsOptions.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
    if (currentStep === StepsOptions.length - 1) {
      setOpen(true)
    }
  }

  const CurrentComponent = useMemo(() => StepsOptions[currentStep].component, [currentStep])


  return (
    <div className='sm:flex max-h-screen min-h-screen overflow-y-auto sm:overflow-hidden'>
      <div
        className=" hidden sm:block border-primary-gray bg-tertiary-gray border-r px-4 py-7 xl:py-10 w-[40%] max-w-[380px] md:w-max"
      >
          <div className='relative ml-3 w-[80%]'>
            <Image
              className='w-full object-contain'
              src={logo}
              alt='logo-image'
            />
          </div>
        <div className='mt-16 w-full'>
          {StepsOptions.map((option, index) => {
            return (
              <StepIndicator option={option} currentStep={currentStep} index={index} key={index} />
            );
          })}
        </div>
      </div>

      {/* for mobile */}
      <div className='w-full flex sm:hidden items-center justify-center py-4 bg-secondary-gray px-2'>
        {StepsOptions.map((option, index) => {
          return (
            <StepIndicator option={option} currentStep={currentStep} index={index} key={index} />
          );
        })}
      </div>
      <div className='flex-1 border'>
        <div className='bg-secondary-gray w-full hideScroll max-h-full min-h-full overflow-y-auto px-6 py-8'>
          <CurrentComponent />
          <Button className='mt-6 w-full sm:w-auto' onClick={handleAgreement}>Agree</Button>
          <WelcomeDialog open={open} onOpenChange={setOpen} />
        </div>
      </div>
    </div>
  )
}

export default TermsAndCondition