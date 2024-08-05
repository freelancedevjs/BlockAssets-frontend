import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/Dialog';

import Bin from '~/images/bin.png';
import Logout from '~/images/logoutI.png';
import { useMutation } from '@apollo/client';
import { DELETE_ACCOUNT_MUTATION } from '@/components/profile/AccountSetting/updateMe.gql';

interface IDeleteProfileDialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

const DeleteProfileDialog = ({
  open,
  onOpenChange,
  defaultOpen,
}: IDeleteProfileDialogProps) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [deleteAccountMutation] = useMutation(DELETE_ACCOUNT_MUTATION);

  useEffect(() => {
    if (open) {
      setConfirmDelete(false);
      setDeleteConfirmed(false);
    }
  }, [open]);

  const handleDeleteAccount = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setDeleteConfirmed(false);
    } else if (confirmDelete && !deleteConfirmed) {
      setDeleteConfirmed(true);
    } else {
      try {
        await deleteAccountMutation();
        setConfirmDelete(false);
        setDeleteConfirmed(false);
        onOpenChange && onOpenChange(false);
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <DialogContent className='max-w-[454px] bg-white text-center'>
        <DialogHeader className='text-center'>
          {deleteConfirmed ? (
            <div className='m-2 p-0 md:p-4'>
              <p className='mb-4 text-center text-xl  font-medium'>
                Your account has been <br />
                <span className='text-[22px] font-bold text-black'>
                  deleted.
                </span>
              </p>
              <div className='text-center'>
                <button
                  className='w-full rounded-lg bg-black px-6 py-2 text-[18px] font-semibold text-white hover:bg-gray-800 focus:outline-none'
                  onClick={() => onOpenChange && onOpenChange(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className='my-2 flex justify-center'>
                <Image src={Bin} alt='Welcome' className='' />
              </div>
              {confirmDelete ? (
                <p className='mb-4 text-center font-semibold'>
                  Are you sure you want to delete your account?
                </p>
              ) : (
                <>
                  <p className='mb-4 text-center font-semibold'>
                    The following conditions must be met to delete the account
                  </p>
                  <div className='flex flex-col gap-3 text-sm'>
                    <div className='cursor-pointer rounded-lg border border-[#E6E6E6] px-3 py-2'>
                      No balance and deposit
                    </div>
                    <div className='cursor-pointer rounded-lg border border-[#E6E6E6] px-3 py-2'>
                      No outstanding orders
                    </div>
                    <div className='cursor-pointer rounded-lg border border-[#E6E6E6] px-3 py-2'>
                      No current subscription
                    </div>
                    <div className='cursor-pointer rounded-lg border border-[#E6E6E6] px-3 py-2'>
                      No pending dividend payments
                    </div>
                  </div>
                </>
              )}

              <Button
                className='mt-4 w-full !bg-[#808080]'
                onClick={() => onOpenChange && onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className='w-full !bg-[#FFEBEB] !text-[#FF3F3F]'
                onClick={handleDeleteAccount}
              >
                <div className='flex justify-center gap-2'>
                  <Image src={Logout} alt='logout' />
                  <p className='font-medium'>Delete Account</p>
                </div>
              </Button>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProfileDialog;
