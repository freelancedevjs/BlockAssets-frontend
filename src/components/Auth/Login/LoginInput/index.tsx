"use client"
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

import LoginWrapper from '@/components/Auth/LoginWrapper'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { User, useSignInMutation } from '@/generated/generated'
import { useToast } from '@/components/ui/Toast/use-toast'
import { useUserFetch } from '@/proividers/UserFetchProvider'

const LoginInput = ({ setCurrentStep, formik }) => {
  const { setUser } = useUserFetch()
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } = formik
  const { toast } = useToast()
  const [signIn, { data, loading, error }] = useSignInMutation()
  const router = useRouter()
  const handleSignIn = async () => {
    if (Object.keys(formik.errors).length > 0) {
      toast({ title: "Something Went wrong, Retry", variant: "destructive" })
      return
    }
    try {
      const result = await signIn({
        variables: {
          "input": {
            "email": values.email,
            "password": values.password,
          }
        }
      })
      console.log(result, "Signin Result")
      if (result && result.data) {
        toast({ title: "Success", description: "Login successful !" })
        setUser && setUser(result.data.signIn.user as User)
        router.push("/")
      }
    } catch (error) {
      toast({
        title: "Failed", description: "Login Failed !", variant: "destructive"
      })
      console.log("Login Error", error)
    }

  }

  return (
    <LoginWrapper title="Login to your account" subtitle="Unlock your property dreams">
      <form onSubmit={handleSubmit} className='w-full'>
        <Input placeholder='Enter Email' label='Email' name='email' onChange={handleChange} value={values.email} error={errors.email} />
        <Input
          placeholder='Create Password'
          label='Password'
          type='password'
          name='password'
          value={values.password}
          error={errors.password}
          onChange={handleChange}
          className='my-4 '
        />
        <Link href="/forgot-password" className='text-right w-full' >
          <div className='text-xs text-[#333333] text-right'>Forgot your Password?</div>
        </Link>
        <Button className='mb-2 mt-6 w-full' onClick={handleSignIn} loading={loading}>Log In</Button>
        <p className='text-center text-xs text-[#808080]'>
          Don't have an account yet?{' '}
          <Link href="/onboarding">
            <span className='font-medium text-black'>Sign up now</span>
          </Link>
        </p>
      </form>
    </LoginWrapper>
  )
}

export default LoginInput