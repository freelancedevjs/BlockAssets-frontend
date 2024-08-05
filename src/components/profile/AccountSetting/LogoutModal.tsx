import { SIGN_OUT_MUTATION } from '@/components/profile/AccountSetting/updateMe.gql';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LogoutModalProps {
  open: boolean;
  onLogout: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  open,
  onLogout,
  onCancel,
}) => {
  const router = useRouter();

  const [signOut, { loading, error }] = useMutation(SIGN_OUT_MUTATION);

  const handleSignOut = async () => {
    try {
      await signOut();
      onLogout();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <div
      className={`${
        open ? 'fixed' : 'hidden'
      } inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50`}
    >
      <div className='m-2 mx-auto max-w-md rounded-lg bg-white p-4 md:p-6'>
        <p className='mb-4 text-center text-xl font-[22px] font-medium'>
          Are you sure you want to <br />
          <span className=' text-xl  font-bold'>logout?</span>
        </p>
        <div className='flex justify-between gap-2'>
          <button
            className='flex-1 rounded-md border border-gray-400 bg-[#808080] px-4 py-2 text-white focus:outline-none'
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className='w-fit flex-1 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-700 focus:outline-none'
            onClick={handleSignOut}
            disabled={loading}
          >
            {loading ? 'Signing out...' : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
