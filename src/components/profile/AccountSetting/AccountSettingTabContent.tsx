import React, { useState } from 'react';
import AccountSettingCard from './AccountSettingCard';
import Switch from 'react-switch';
import DeleteProfileDialog from '@/components/DeleteProfileDialog';
import { ChevronLeft } from 'lucide-react';
import LogoutModal from '@/components/profile/AccountSetting/LogoutModal';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { UPDATE_ME_MUTATION } from '@/components/profile/AccountSetting/updateMe.gql';
import { useToast } from '@/components/ui/Toast/use-toast';
import { useUserFetch } from '@/proividers/UserFetchProvider';

interface AccountSettingTabContentProps {
  accountSettings?: { id: number; title: string }[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const AccountSettingTabContent: React.FC<AccountSettingTabContentProps> = ({
  accountSettings = [
    { id: 0, title: 'Change Password' },
    { id: 1, title: 'Logout' },
  ],
  setActiveTab,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUserFetch();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [isMarketingEmailsChecked, setMarketingEmailsChecked] =
    useState<boolean>(false);

  const [updateMeMutation] = useMutation(UPDATE_ME_MUTATION);

  const [isAppNotificationChecked, setAppNotificationChecked] =
    useState<boolean>(false);
  const [isMarketingNotificationChecked, setMarketingNotificationChecked] =
    useState<boolean>(false);

  const handleAppNotificationChange = (checked: boolean) => {
    setAppNotificationChecked(checked);
  };

  const handleMarketingNotificationChange = (checked: boolean) => {
    setMarketingNotificationChecked(checked);
  };
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleConfirmLogout = () => {
    setLogoutModalOpen(false);
  };
  const handleCancelLogout = () => {
    setLogoutModalOpen(false);
  };
  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleCardClick = (title: string) => {
    if (title === user?.phone) {
      router.push('/profile/change-number');
    } else if (title === 'Logout') {
      handleLogout();
    } else if (title === 'Change Password') {
      router.push('/profile/change-password');
    }
  };

  const handleMarketingEmailsChange = async (checked: boolean) => {
    setMarketingEmailsChecked(checked);
    try {
      await updateMeMutation({
        variables: {
          input: {
            marketing: checked,
          },
        },
      });
      toast({
        title: 'Marketing email preference updated successfully!',
        description: 'success !',
      });
    } catch (error) {
      toast({
        title:
          'Failed to update marketing email preference. Please try again later.',
        variant: 'destructive',
      });
      console.error('Error updating marketing email preference:', error);
    }
  };

  console.log({ user });
  return (
    <div className='mt-4'>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => setActiveTab('Vote')}>
            <ChevronLeft />
          </div>

          <div className=' text-lg font-semibold'>Settings</div>
          <div></div>
        </div>
      </div>
      <p className='font-family-Poppins mb-2 text-left text-lg font-bold md:hidden'>
        Notification
      </p>
      <div className='h-85 my-2 hidden w-full items-center rounded-lg bg-[#F2F6F6] p-4 md:flex'>
        <div className='flex-grow'>
          <p className=' text-xl font-medium leading-6 text-black'>
            Marketing Emails
          </p>
          <div className='flex items-center'>
            <p className=' items-center text-base font-medium leading-5 text-[#808080]'>
              Real estate news and other announcements.{' '}
            </p>
          </div>
        </div>

        <div>
          <Switch
            onChange={handleMarketingEmailsChange}
            checked={isMarketingEmailsChecked}
            onColor='#23B43A'
            offColor='#FF0000'
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            handleDiameter={24}
          />
        </div>
      </div>
      <div className='h-85 my-2 flex w-full items-center rounded-lg bg-white p-4 md:hidden md:bg-[#F2F6F6]'>
        <div className='flex-grow'>
          <p className=' text-sm font-semibold  leading-6 text-black md:text-xl'>
            App Notification
          </p>
        </div>

        <div>
          <Switch
            onChange={handleAppNotificationChange}
            checked={isAppNotificationChecked}
            onColor='#23B43A'
            offColor='#FF0000'
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            handleDiameter={24}
          />
        </div>
      </div>
      <div className='h-85 my-2 flex  w-full items-center rounded-lg bg-white p-4 md:hidden md:bg-[#F2F6F6]'>
        <div className='flex-grow'>
          <p className=' text-sm font-semibold  leading-6 text-black md:text-xl'>
            Marketing Notification
          </p>
        </div>

        <div>
          <Switch
            onChange={handleMarketingNotificationChange}
            checked={isMarketingNotificationChecked}
            onColor='#23B43A'
            offColor='#FF0000'
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            handleDiameter={24}
          />
        </div>
      </div>
      <p className='font-family-Poppins mb-2 text-left text-lg font-bold md:hidden'>
        Account
      </p>
      <AccountSettingCard
        title={user?.email || 'Email not provided'}
        onClick={() => handleCardClick(user?.email || '')}
      />
      <AccountSettingCard
        title={user?.phone || 'Phone not provided'}
        onClick={() => handleCardClick(user?.phone || '')}
      />

      {accountSettings.map((setting) => (
        <AccountSettingCard
          key={setting.id}
          title={setting.title}
          onClick={() => handleCardClick(setting.title)}
        />
      ))}

      <div className='m-2 mt-4 flex items-center justify-center'>
        <button
          onClick={() => setOpenDeleteModal(true)}
          className='font-Poppins letter-spacing-0.01em mt-4 px-6 py-3 text-center text-base 
          font-semibold text-[#FF3F3F] md:bg-white'
        >
          Delete Account
        </button>
      </div>
      <DeleteProfileDialog
        open={openDeleteModal}
        onOpenChange={setOpenDeleteModal}
      />
      <LogoutModal
        open={isLogoutModalOpen}
        onCancel={handleCancelLogout}
        onLogout={handleConfirmLogout}
      />
    </div>
  );
};

export default AccountSettingTabContent;
