import Image from 'next/image'
import React, { FC } from 'react'

import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { useToast } from '@/components/ui/Toast/use-toast';

import { useSignUp } from '@/contexts/signUpContext'
import { ISignupStepProps } from '@/components/Auth/CreateAccount'

import UsFlag from "~/images/us-flag.png"

export const Countries = [
  {
    flag: UsFlag,
    name: "United States",
    value: "United States"
  }
]

const Individual: FC<ISignupStepProps> = ({ formik }) => {
  const { setCurrentStep } = useSignUp()
  const { toast } = useToast()
  const { values, handleBlur, handleChange, handleSubmit, errors } = formik

  const handleClick = () => {
    console.log(values,formik.errors, "formik Values")
    if (Object.keys(formik.errors).length < 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      toast({ title: "Fill the form correctly !", variant: "destructive" })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col sm:flex-row w-full gap-2 items-end'>
        <Input placeholder='Enter first name' label='What’s your name?' value={values.firstName} onChange={handleChange} name="firstName" error={errors.firstName} />
        <Input placeholder='Enter last name' value={values.lastName} onChange={handleChange} name="lastName" error={errors.lastName} />
      </div>
      <p className=' self-start mt-1 text-left text-primary text-xs'>Please enter your legal name as it appears on your ID.</p>
      <Input
        placeholder='Street address'
        label='Address'
        name='address'
        error={errors.address}
        value={values.address}
        onChange={handleChange}
        className='mt-4 mb-2'
      />
      <div className='flex sm:flex-row flex-col items-center gap-3'>
        <Input name="city" placeholder='City' className='sm:flex-[0.5]' value={values.city} onChange={handleChange} error={errors.city} />
        <Input name="state" placeholder='State' className='sm:flex-[0.25]' value={values.state} onChange={handleChange} error={errors.state} />
        <Input name="postalCode" placeholder='Postal' className='sm:flex-[0.25]' value={values.postalCode} onChange={handleChange} error={errors.postalCode} />
      </div>

      <Select onValueChange={(e) => formik.setFieldValue("country", e)}>
        <SelectTrigger className="w-full mt-4">
          <SelectValue placeholder="United States" />
        </SelectTrigger>
        <SelectContent className='w-full'>
          {Countries.map((country, index) => (
            <SelectItem key={index} value={country.value} className='flex w-full items-center justify-between gap-3'>
              <div className='w-full flex gap-2 items-center'>
                <Image src={country.flag} alt='usa' />
                <p>{country.name}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input name='dob' type='date' placeholder='MM.DD.YYYY' label='Date of birth' className='mt-4' value={values.dob} onChange={handleChange} error={errors.dob} />
      <Button className='mb-2 mt-6 w-full' onClick={handleClick}>Continue as an Individual</Button>
    </form>
  )
}

export default Individual