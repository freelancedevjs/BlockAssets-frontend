import React from 'react';
import { MdArrowForwardIos, MdPhone, MdEmail } from 'react-icons/md';
import { IoLogOut } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';

interface AccountSettingCardProps {
  title: string;
  onClick?: () => void;
}

const AccountSettingCard: React.FC<AccountSettingCardProps> = ({
  title,
  onClick,
}) => {
  let icon;
  switch (title) {
    case 'Johndeo123@gmail.com':
      icon = <MdEmail size={24} color='black' />;
      break;
    case 'Change Password':
      icon = <IoIosLock size={24} color='black' />;
      break;
    case 'Logout':
      icon = <IoLogOut size={24} color='black' />;
      break;
    default:
      icon = <MdPhone size={24} color='black' />;
  }

  return (
    <div
      className='h-85 my-2 flex w-full cursor-pointer items-center rounded-lg  bg-white p-4 md:bg-[#F2F6F6]'
      onClick={onClick}
    >
      <div className='flex items-center pr-4'>
        <div className='rounded-full bg-white p-2'>{icon}</div>

        <p className='ml-2 break-all text-base font-medium leading-5 text-gray-800'>
          {title}
        </p>
      </div>

      <div className='flex-grow' />

      <div className='flex items-center'>
        <MdArrowForwardIos size={24} color='black' />
      </div>
    </div>
  );
};

export default AccountSettingCard;
