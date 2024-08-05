import React from 'react'

import { useUserType } from '@/contexts/userTypeContext'

const Investor = () => {
  return (
    <div className='text-sm'>
      <p className='text-2xl font-semibold'>Accredited Investor</p>
      <div className='mt-6 text-[#808080]'>
        <p className='text-lg font-medium text-black'>Lorem ipsum dolor sit amet, con</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>
      </div>
    </div>
  )

}

const Corporate = () => {
  return (
    <div className='text-sm'>
      <p className='text-2xl font-semibold'>Corporate</p>
      <div className='mt-6 text-[#808080]'>
        <p className='text-lg font-medium text-black'>Lorem ipsum dolor sit amet, con</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>
      </div>
    </div>
  )
}

const Individual = () => {
  return (
    <div className='text-sm'>
      <p className='text-2xl font-semibold'>Individual</p>
      <div className='mt-6 text-[#808080]'>
        <p className='text-lg font-medium text-black'>Lorem ipsum dolor sit amet, con</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>

        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>

        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>

        <li className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</li>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>


        <p className='text-base font-medium text-black mt-4'>Lorem ipsum dolor sit amet, con</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum consectetur semper. In a eros varius, feugiat ex.</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum.</p>
      </div>
    </div>
  )
}




const Step5 = () => {
  const { selectedUserType } = useUserType()
  return (
    <>{selectedUserType === "Accredited Investor" ? <Investor /> : selectedUserType === "Corporate" ? <Corporate /> : <Individual />}</>
  )
}

export default Step5