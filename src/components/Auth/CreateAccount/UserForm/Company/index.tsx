import Image from 'next/image'
import React, { FC } from 'react'

import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'

import { useSignUp } from '@/contexts/signUpContext'

import { Countries } from '@/components/Auth/CreateAccount/UserForm/Individual'
import { ISignupStepProps } from '@/components/Auth/CreateAccount'
import { useToast } from '@/components/ui/Toast/use-toast'

const Company: FC<ISignupStepProps> = ({ formik }) => {
  const { setCurrentStep, companyName, setCompanyName, address, setAddress, postalCode, setPostalCode, city, setCity, state, setState, country, setCountry } = useSignUp()
  const { values, errors, handleBlur, handleChange, handleSubmit } = formik
  const { toast } = useToast()


  const handleClick = () => {
    if (Object.keys(formik.errors).length < 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      toast({ title: "Fill the form correctly !", variant: "destructive" })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex w-full gap-2'>
        <Input name='companyName' error={errors.companyName} placeholder='Enter company name' label='What’s your  Company name?' value={values.companyName} onChange={handleChange} />
      </div>
      <Input
        placeholder='Business address'
        label='Address'
        name='address'
        className='mt-4 mb-2'
        value={values.address}
        onChange={handleChange}
        error={errors.address}
      />
      <div className='flex items-center gap-3'>
        <Input placeholder='City' name='city' className='sm:flex-[0.5]' value={values.city} onChange={handleChange} error={errors.city} />
        <Input placeholder='State' name='state' className='sm:flex-[0.25]' value={values.state} onChange={handleChange} error={errors.state} />
        <Input placeholder='Postal' name='postalCode' className='sm:flex-[0.25]' value={values.postalCode} onChange={handleChange} error={errors.postalCode} />
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
      <Button className='mb-2 mt-6 w-full' onClick={handleClick}>Continue as a Corporate</Button>
    </form>
  )
}

export default Company