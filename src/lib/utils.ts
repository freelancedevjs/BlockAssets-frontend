import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const walletNameTrimmer = (name: string | undefined | null) => {
  const text = name?.slice(0, 6) + "..." + name?.slice(-4);
  return text;
};
