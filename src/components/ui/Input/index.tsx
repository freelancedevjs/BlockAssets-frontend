'use client';
import { Divide, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  inputClassName?: string;
  error?: any;
  additionalInfo?: string;
  isPasswordInput?: boolean;
  LastIcon?: React.ReactNode;
}

const Input: React.FC<IInputProps> = ({
  label,
  className,
  type,
  placeholder,
  error,
  value,
  inputClassName,
  additionalInfo,
  isPasswordInput,
  LastIcon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${className} w-full`}>
      {(label || additionalInfo) && (
        <div className='mb-1 flex items-center justify-between gap-2'>
          {label && (
            <div className=' text-primary text-xs font-medium'>{label}</div>
          )}
          {additionalInfo && (
            <div className='hidden text-xs text-[#333333] sm:flex'>
              {additionalInfo}
            </div>
          )}
        </div>
      )}
      <div className={`relative w-full rounded-md border-2 ${error ? "border-red-500" : "border-[#E6E6E6]"} bg-[#E6E6E6]  sm:bg-transparent `}>
        <input
          type={isPasswordInput ? (showPassword ? 'text' : 'password') : type}
          id={label}
          placeholder={placeholder || label}
          value={value}
          {...rest}
          className={twMerge(
            `block w-full rounded-md border-none bg-transparent px-2 py-2.5 text-sm font-normal outline-none focus:border-black focus:ring-black `,
            inputClassName
          )}
        />
        {LastIcon && LastIcon}
        {isPasswordInput &&
          (showPassword ? (
            <Eye
              onClick={() => setShowPassword((prev) => !prev)}
              className=' absolute right-2 top-2.5 cursor-pointer text-[#4F5B5B]'
            />
          ) : (
            <EyeOff
              onClick={() => setShowPassword((prev) => !prev)}
              className=' absolute right-2 top-2.5 cursor-pointer text-[#4F5B5B]'
            />
          ))}
      </div>
      {error && <div className='mt-1 text-xs text-red-500'>{error}</div>}
    </div>
  );
};

export default Input;
