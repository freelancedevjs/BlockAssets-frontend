'use client';

import AccountSettingTabContent from '@/components/profile/AccountSetting/AccountSettingTabContent';
import FAQTabContent from '@/components/profile/Faq/FAQTabContent';
import NoticeTabContent from '@/components/profile/Notice/NoticeTabContent';
import { Tab } from '@/components/profile/Tab';
import TermsAndPolicyTabContent from '@/components/profile/TermsAndPolicy/TermsAndPolicyTabContent';
import VoteTabContent from '@/components/profile/Vote/VoteTabContent';
import { useUserFetch } from '@/proividers/UserFetchProvider';
import Image from 'next/image';
import * as React from 'react';
import { useMediaQuery } from 'usehooks-ts';

const Profile: React.FC = () => {

  const { user } = useUserFetch()
  const [activeTab, setActiveTab] = React.useState<string>('Vote');
  const handleTabClick = (tab: string) => {
    if (tab === 'Settings') {
      tab = 'Account Setting';
    }
    setActiveTab(tab);
  };
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Array of tab titles
  const tabTitles = [
    'Vote',
    'Notice',
    'FAQ',
    'Terms & Policy',
    'Account Setting',
  ];
  const backgroundImageUrl = 'your-background-image-url';
  const userName = 'John Deo';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Vote':
        return <VoteTabContent />;
      case 'Notice':
        return <NoticeTabContent setActiveTab={setActiveTab} />;
      case 'FAQ':
        return <FAQTabContent setActiveTab={setActiveTab} />;
      case 'Terms & Policy':
        return <TermsAndPolicyTabContent setActiveTab={setActiveTab} />;
      case 'Account Setting':
        return <AccountSettingTabContent setActiveTab={setActiveTab} />;
      default:
        return null;
    }
  };

  const tabTitlesMobileView = ['Notice', 'FAQ', 'Terms & Policy', 'Settings'];

  const iconComponents = [
    <svg
      key='pageIcon'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1962_21162)'>
        <path
          d='M17.6402 13.1159L11.334 2.19315C10.304 0.388742 7.69926 0.388742 6.67294 2.19315L0.363077 13.1159C-0.666953 14.9203 0.615027 17.1619 2.69361 17.1619H15.2874C17.366 17.1619 18.6702 14.8981 17.6402 13.1159ZM8.99977 14.7388C8.45141 14.7388 7.99568 14.283 7.99568 13.7347C7.99568 13.1863 8.45141 12.7306 8.99977 12.7306C9.54813 12.7306 10.0039 13.1863 9.98163 13.7606C10.0076 14.283 9.5259 14.7388 8.99977 14.7388ZM9.91494 8.24735C9.87048 9.02543 9.82231 9.79981 9.77785 10.5779C9.75562 10.8298 9.75562 11.0596 9.75562 11.3078C9.73339 11.7191 9.41104 12.0377 8.99977 12.0377C8.5885 12.0377 8.26986 11.7413 8.24392 11.33C8.17723 10.1185 8.10683 8.9291 8.04014 7.71752C8.01791 7.39888 7.99568 7.07653 7.96974 6.75788C7.96974 6.23175 8.26615 5.79825 8.74782 5.66116C9.22949 5.5463 9.70745 5.77602 9.91494 6.23175C9.98534 6.39108 10.0076 6.5504 10.0076 6.73565C9.98534 7.24326 9.93717 7.74716 9.91494 8.24735Z'
          fill='black'
        />
      </g>
      <defs>
        <clipPath id='clip0_1962_21162'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>,
    <svg
      key='pageIconq'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1962_21172)'>
        <path
          d='M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0ZM9 14.25C8.85167 14.25 8.70666 14.206 8.58333 14.1236C8.45999 14.0412 8.36386 13.9241 8.30709 13.787C8.25033 13.65 8.23548 13.4992 8.26442 13.3537C8.29335 13.2082 8.36479 13.0746 8.46967 12.9697C8.57456 12.8648 8.7082 12.7934 8.85369 12.7644C8.99917 12.7355 9.14997 12.7503 9.28702 12.8071C9.42406 12.8639 9.54119 12.96 9.62361 13.0833C9.70602 13.2067 9.75 13.3517 9.75 13.5C9.75 13.6989 9.67099 13.8897 9.53033 14.0303C9.38968 14.171 9.19892 14.25 9 14.25ZM10.1453 9.525C10.0224 9.58476 9.91961 9.67899 9.84942 9.79619C9.77924 9.91339 9.74469 10.0485 9.75 10.185V10.5C9.75 10.6989 9.67099 10.8897 9.53033 11.0303C9.38968 11.171 9.19892 11.25 9 11.25C8.80109 11.25 8.61033 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5V10.185C8.24226 9.75082 8.36395 9.32416 8.59956 8.95939C8.83517 8.59461 9.17405 8.30824 9.573 8.13675C9.89149 8.00489 10.1548 7.76736 10.3188 7.46412C10.4827 7.16088 10.5371 6.81044 10.473 6.47175C10.4152 6.17497 10.2702 5.90219 10.0564 5.6884C9.84256 5.4746 9.56979 5.32952 9.273 5.27175C9.0563 5.23164 8.83341 5.23977 8.62021 5.29558C8.407 5.35138 8.20871 5.45347 8.03944 5.59461C7.87016 5.73574 7.73407 5.91243 7.64084 6.11213C7.5476 6.31183 7.49952 6.52961 7.5 6.75C7.5 6.94891 7.42099 7.13968 7.28033 7.28033C7.13968 7.42098 6.94892 7.5 6.75 7.5C6.55109 7.5 6.36033 7.42098 6.21967 7.28033C6.07902 7.13968 6 6.94891 6 6.75C6.0004 6.2067 6.14833 5.67371 6.428 5.20792C6.70767 4.74213 7.10859 4.36103 7.58794 4.1053C8.06729 3.84958 8.60709 3.72883 9.14972 3.75594C9.69234 3.78306 10.2174 3.95701 10.6689 4.25925C11.1204 4.56148 11.4813 4.98065 11.7131 5.472C11.945 5.96335 12.039 6.50843 11.9853 7.04906C11.9315 7.5897 11.732 8.10559 11.4079 8.54165C11.0838 8.97772 10.6474 9.3176 10.1453 9.525Z'
          fill='black'
        />
      </g>
      <defs>
        <clipPath id='clip0_1962_21172'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>,
    <svg
      key='pageIconw'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1962_21183)'>
        <path
          d='M12.8658 8.21531C12.8958 8.21531 12.9255 8.2157 12.9555 8.21626L12.9632 8.2164C13.1311 8.21943 13.2977 8.23025 13.4626 8.24825V2.12379C13.4626 0.952805 12.5099 0 11.3388 0H2.12393C0.952805 0 0 0.952805 0 2.12379V14.3396C0 15.5108 0.952805 16.4636 2.12379 16.4636H8.27613C7.74524 15.6103 7.46673 14.6359 7.46673 13.6174C7.46673 10.6386 9.88864 8.21531 12.8658 8.21531H12.8658ZM7.61685 3.46771H10.7642C11.0554 3.46771 11.2915 3.70378 11.2915 3.99505C11.2915 4.28632 11.0554 4.52239 10.7642 4.52239H7.61685C7.32572 4.52239 7.0895 4.28632 7.0895 3.99505C7.0895 3.70378 7.32572 3.46771 7.61685 3.46771ZM7.61685 5.57722H10.7642C11.0554 5.57722 11.2915 5.81326 11.2915 6.10457C11.2915 6.39587 11.0554 6.63191 10.7642 6.63191H7.61685C7.32572 6.63191 7.0895 6.39584 7.0895 6.10457C7.0895 5.8133 7.32572 5.57722 7.61685 5.57722ZM5.84585 12.9957H2.69852C2.40725 12.9957 2.17118 12.7596 2.17118 12.4684C2.17118 12.1772 2.40725 11.941 2.69852 11.941H5.84582C6.13695 11.941 6.37316 12.1772 6.37316 12.4684C6.37316 12.7596 6.13698 12.9957 5.84585 12.9957ZM5.84585 10.8509H2.69852C2.40725 10.8509 2.17118 10.6149 2.17118 10.3236C2.17118 10.0323 2.40725 9.79622 2.69852 9.79622H5.84582C6.13695 9.79622 6.37316 10.0323 6.37316 10.3236C6.37316 10.6149 6.13698 10.8509 5.84585 10.8509ZM5.84585 8.74143H2.69852C2.40725 8.74143 2.17118 8.50535 2.17118 8.21408C2.17118 7.92278 2.40725 7.68674 2.69852 7.68674H5.84582C6.13695 7.68674 6.37316 7.92278 6.37316 8.21408C6.37316 8.50535 6.13698 8.74143 5.84585 8.74143ZM5.84585 6.63191H2.69852C2.40725 6.63191 2.17118 6.39584 2.17118 6.10457C2.17118 5.8133 2.40725 5.57722 2.69852 5.57722H5.84582C6.13695 5.57722 6.37316 5.81326 6.37316 6.10457C6.37316 6.39587 6.13698 6.63191 5.84585 6.63191ZM5.84585 4.52239H2.69852C2.40725 4.52239 2.17118 4.28632 2.17118 3.99505C2.17118 3.70378 2.40725 3.46771 2.69852 3.46771H5.84582C6.13695 3.46771 6.37316 3.70378 6.37316 3.99505C6.37316 4.28632 6.13698 4.52239 5.84585 4.52239ZM7.0895 8.21408C7.0895 7.92278 7.32572 7.68674 7.61685 7.68674H9.13268C9.42398 7.68674 9.66002 7.92278 9.66002 8.21408C9.66002 8.50535 9.42398 8.74143 9.13268 8.74143H7.61685C7.32572 8.74143 7.0895 8.50535 7.0895 8.21408Z'
          fill='black'
        />
        <path
          d='M15.9866 10.5443C15.1772 9.72062 14.0962 9.25564 12.9428 9.23532L12.9352 9.23518C12.9114 9.23476 12.8877 9.23438 12.8639 9.23438C10.449 9.23438 8.48438 11.2004 8.48438 13.617C8.48438 14.5767 8.78897 15.4882 9.36504 16.253C10.2013 17.363 11.4765 17.9995 12.8639 17.9995C15.2788 17.9995 17.2435 16.0335 17.2435 13.617C17.2435 12.4601 16.7972 11.3689 15.9866 10.5443ZM14.7352 12.9045L13.0628 14.9893C13.0134 15.051 12.9507 15.1007 12.8794 15.1349C12.8082 15.1691 12.7301 15.1868 12.6511 15.1868C12.5435 15.1868 12.4353 15.1539 12.3419 15.0864L11.0946 14.1826C10.8588 14.0118 10.8061 13.682 10.977 13.4461C11.1479 13.2103 11.4776 13.1576 11.7134 13.3286L12.5542 13.9378L13.9126 12.2445C14.0949 12.0173 14.4266 11.9809 14.6539 12.1631C14.881 12.3454 14.9174 12.6773 14.7352 12.9044L14.7352 12.9045Z'
          fill='black'
        />
      </g>
      <defs>
        <clipPath id='clip0_1962_21183'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>,
    <svg
      key='pageIconqq'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.777 2.39109C13.6293 2.13977 13.4191 1.931 13.1667 1.7851C12.9144 1.6392 12.6285 1.56117 12.337 1.55859H5.66577C5.37428 1.56117 5.08843 1.6392 4.83607 1.7851C4.58371 1.931 4.37345 2.13977 4.22577 2.39109L0.890145 8.16797C0.742036 8.4245 0.664062 8.7155 0.664062 9.01172C0.664062 9.30794 0.742036 9.59894 0.890145 9.85547L4.22577 15.6098C4.37345 15.8612 4.58371 16.0699 4.83607 16.2158C5.08843 16.3617 5.37428 16.4398 5.66577 16.4423H12.337C12.6285 16.4398 12.9144 16.3617 13.1667 16.2158C13.4191 16.0699 13.6293 15.8612 13.777 15.6098L17.1126 9.83297C17.2608 9.57644 17.3387 9.28544 17.3387 8.98922C17.3387 8.693 17.2608 8.402 17.1126 8.14547L13.777 2.39109ZM11.8139 9.00047C11.8139 9.55673 11.6489 10.1005 11.3399 10.563C11.0309 11.0255 10.5916 11.386 10.0777 11.5989C9.56378 11.8118 8.99827 11.8674 8.4527 11.7589C7.90713 11.6504 7.40599 11.3825 7.01266 10.9892C6.61932 10.5959 6.35146 10.0947 6.24294 9.54916C6.13442 9.00359 6.19011 8.43809 6.40298 7.92417C6.61585 7.41025 6.97634 6.971 7.43885 6.66196C7.90137 6.35292 8.44514 6.18797 9.0014 6.18797C9.74732 6.18797 10.4627 6.48428 10.9901 7.01173C11.5176 7.53918 11.8139 8.25455 11.8139 9.00047Z'
        fill='black'
      />
    </svg>,
  ];

  return (
    <div className='container mx-auto mt-1'>
      <div className='mx-2 mb-2 hidden md:block'>
        <h1 className='hidden text-[22px] font-bold text-black md:block'>
          Profile
        </h1>
      </div>
      <div className='rounded-lg bg-[#f6f6f6] md:bg-white'>
        {!isMobile && (
          <div
            className='relative h-[147px]  rounded-xl bg-[#212121] md:h-[140px] md:bg-[#BDD6FB]'
            style={{
              width: '100%',
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute bottom-0 left-1/2 hidden h-32 w-32 -translate-x-1/2 translate-y-1/2 transform overflow-hidden rounded-full border-4 border-white md:block'>
              <Image
                src='data:image/jpeg;base64,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'
                alt={`Profile image of ${userName}`}
                layout='fill'
                objectFit='cover'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div className='absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2 transform p-5 text-center md:block md:hidden'>
              <div className='mb-1 mt-2 flex items-center  justify-center gap-2'>
                <p className='text-xs font-medium text-[#0C78DB] capitalize'>
                  {user ? `${user.userType.toLowerCase()}` : ""}
                </p>
                <span className='mx-1 h-4 border-r border-white' />

                <h1 className=' text-base font-medium text-white capitalize'>
                  {user ? `${user.firstName} ${user.lastName}` : ""}
                </h1>
              </div>

              <span className='mx-auto my-2 block h-2 w-[100%] border-b border-[#2E2E2E]'></span>

              <p className='m-3 rounded-[2rem] bg-[#2B2B2B]  p-4 text-xs font-semibold text-white '>
                {user ? `${user.email}` : ""}
              </p>
            </div>
          </div>
        )}

        {isMobile && activeTab === 'Vote' && (
          <div
            className='relative h-[147px]  rounded-xl bg-[#212121] md:h-[140px] md:bg-[#BDD6FB]'
            style={{
              width: '100%',
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute bottom-0 left-1/2 hidden h-32 w-32 -translate-x-1/2 translate-y-1/2 transform overflow-hidden rounded-full border-4 border-white md:block'>
              <Image
                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EADcQAAICAQIDBAgEBgMBAAAAAAABAhEDITEEEkFRYYHwBRMicZGhwdEyYrHhFCNCU5LxM1KCcv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACMRAAMBAQACAgICAwAAAAAAAAABAhEDEiEEMRMiBUEyUWH/2gAMAwEAAhEDEQA/APjcR0NhMENjVHtSYHRNXDK5GSHcbOC1m113LR9luC20jVylWqGisjosYtvyYqbM8mNmxMtZUYZlERi5v2fiPhBY1pq+0iKpUgsEsMtlrKtkWVchtiJbKORDZRsw2aJbKNkNlJSMNgdPgf8Agf8A9MZMR6MleCa6qX0NEti6f6m+aMmZaGKaptm/KjLOJGkVuDM2RZeUBbjJdCLRBrAbIsgBaICVuQlbJbpUvEWgDfSOl9SA8bAQAAAAFk9KWwyIpF4m0Bog6T7xuHJ6vIpKloZky6ZVMabT1HVjmjNXF+AvJNGGMmtUxnrZNasqq9F76z0W0vZaUisN7ZVuyUxHOxl0Q2VbKtj0WF2yjZFlbMtjJbKN60X5H/VJR9+/wFyeNdJyffUV8NTDYFW+8p11GOcf7UX72/uUeSH9mPg39ybYGn0Zk5crhL+pae86MjiwyQU4uPPBp2nfMvodjHkhmipQejLcq1YX4+2KyozyRqmhMommjufPUZ3EhxQ1xCjGEL5CfVRfQj+GTNMUhkUhqEc9c8Mf8M6qLoh8I1s/kdGKQxRQ/wAUsk1hx5cLk6ULninDeLO9yplMmGMlsJ8EzOnBA2cVw3K7j0MZz1LkZKLxJS7l8C0Y10X+K+w0GAtdi6rvBUui+AKv9M2gLJrbXxJ2IolLRm0wJCyhNj0C1g3oVsmMeZ6ukt2GgTCLnbTSS3bB5FFVjVfme/7FZ5FJJRVRWy+otsTYBKTe+pV7fUCGzDYEMq2SyrJtgQauB4hYZ8s9IN79hlYAqc+0OacvUd2WuwuUTHwfF8tY8z9no+w6XKmrTTTOlWqXo9zhc9Z1GZxKuJpcCjiI3XISiUyziVaGct8i6kWWQS2luyvMu0NaOO5SNSyg83eZebvIbH5Mg5L5p8yZzcmk2a5syZHciPV6YLqmWSXlBa7fmRa6P5mEMvHeu3z2k3fgVUu+/wD1+5bTqvkaQsJRJXmXT5uyG72HoFrArehN6/QegFO9CckuVci3X4n2svCLg+eUdI6pd4qWrfvBhjX2VshsHoVbM6BLZUCBADIAgwwAAAQAaeF43Jgai/ah2P6GYBr19GouoeyzvYM+LiF/Ll7X/XqWcTz60dp0zor0jkhyykueMlfY09nqVXT/AGery/kZazojXKNC2rYY+O4fJu3B9U0Mx05NrZlZaZXr1ip2HoRwKtSXgXQ0RWhZoqkjx+sts52bDWxnbOlmRzeKXL7S3MdFntE5bT9icstGZ27YN3rQ+HC5JR5lUfecr2n6Gk39Br/2+f7krmezb8f3JjHmlVs1Y1yrQ1M6NJsyuE0rcZV8StruOnF7WZeMxKD9Zj2e6Whu4xCZm16372S+l/FkN0w5q95LRE9etl+HaeWKm6jfgK7Qv49Bp4aT8WmdLjIxhDc5xfJJvHib3cW78WLHVaV79V0rUsJ0+hRrsJJZnSAsgvJWUEAEAAgAAAQAAAAAMXtYH+SSfg190hYzHrizL8qfzQMBZ1uBnz4Yvrszkm/0Y/Yku83yf7HR8Zvzw68Ni9aC8T0GvY60dV8hGZHN4qqZ082xy+MaRm36OTpGGLCubLFPtO16r2bRw4txaa3R1MfpKDxpTi01vWxDlSR0fCvlOq2Z8S9o0wjoZY+xK1+pv4dRypKMk29KRTm/6J8Jml7LYcU80uXHG+97I1fwOBL+c5ZH3OkOSjhxqENO3vYnJMs/+ipJv0Iy8LwtUsKXubMHEcIk7wvwbNs5GebJVMk3Jz6p0/nuA7PG3zLfqIZztYSfoZk/Bie/sv8AVi0XeuBfllT7r1X6MohCDqAEbABPxKyV+dy1aA/Pnz2gAp6AXkigAAAAgAAAAAZi0x5u6KXzQsYtOHl+eaXglr+qEwFnR9HRrFfaznHX4FJ8NCu/9SnL/I7PhT5dTbjeg3m0EJbEyk0jrPXrj60pxEzkcZO5UjZxedRTtnLnJydsh0r+jyPlUk8RAIAIHGa2u5m30TC+IlN6qMdPe/LMlLyv2N/orbL4HRC/ZFUvZuySszZGNmzPNl2d08/QubEyGSFsmzNc8FSM8ly7mpoTmVa9hKl6OPpJXAlbxt0pqvHoLej2/wBkrdatVtQzL/MSy9ukl2Pz50JEhQLVfYKAAC30rwDoT0th51ACGrFyVMb50IavsABQA1TAQAAAAB7hmek4wW0FXjuycS5I+tauvw31f7CtXu7AAWps4HjFhXq8q9lu0+wyVoQlY089o3z6Vzryk9B/E8PVrNGkZeK9IYlHlxe2+3ZHJq9ECXYb/LTO2/5HrU4i2ScskrkyoAY+zgbbesAABCN9dmpp9HvkyyT/AKo9nYI33194Rfq5qarRnSvTLz9nSm9REhlqaUlqnqVaKs9qIXjomRRodJC2jBO4FtC5odRDQsOHpBicaq9+qZbHLkd1aeko9o3Ljtc1aiq93iRqcZxucCcFCnF3B/hfnYqle1+A2GRwtbxe6fXv95DxKdvFqusH+JGRCui+IV3FgpafcMAq/PnzqQXrs+fnzTIrUMELmtCo2t+opqhABfHj505S0hHeXYWjDkqWVuPZHqys8nNWlKOyXQAIyT5pdVFaJdhR7EgICVLlXiQnv3kAAiXK5X7/ANAb1IJhFylSGAN2qIHPAK5au+gNMMaIS0AG77ktkAgOm67fmRp5ZXkKtNbfQ6SnmauGycsuST9l9ew1yRzIye0jVhzcq5Z210ZpM9P4fylnjQ2URbRoaTVp2hcomj0KlNCKIoY0FDw4usCuUXkw9YLwNPKCiJyn6OG4MFVvp7yPHTz58DfPEp77mScHCTT0aJVzwh4h6xy/5Epd/Uq1jb0corsav5hXSgrQxgsI9Wv7uN/5fbzYPHHb10K7UpfYGl58+aIrz58RYLA5ca1cnPuUa+ZWeTkf8qKje7Wr+JJWUeZUvj57qFgCqbtrd7kNa6aoY626ERi5yUYq2wwMF0FHSx8DGOs/akWeGNdPga/ExucOU/cFG+eGNGXJj5XoJ82jAobw9Ker1FkpdXol1ML0xp49N8o6aow53c9NkTLLKSq3RT3mqrTV15EABPKzBM6klWwtvUAOsBct17x+LXGiAEvspzG45uG3wNO+OMurJA2ev8Om1jFzSQJABov0JoKABnBZZLVIwZNZyb11ADFnLRVoh6ABIwQyKt156fcAEIrVJvusJ6WulP6/YgDIhbW5u9GwjUp/1J0ADn7Nz9muQuRAFwsVMz5EqADNkDLJalX2dAA5mMAABAG0bXbRAAIR/9k='
                alt={`Profile image of ${userName}`}
                layout='fill'
                objectFit='cover'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div className='absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2 transform p-5 text-center md:block md:hidden'>
              <div className='mb-1 mt-2 flex items-center  justify-center gap-2'>
                <p className='text-xs font-medium text-[#0C78DB] capitalize'>
                  {user ? `${user.userType.toLowerCase()}` : ""}
                </p>
                <span className='mx-1 h-4 border-r border-white' />
                <h1 className=' text-base font-medium text-white capitalize'>{user ? `${user.firstName} ${user.lastName}` : ""}</h1>
              </div>
              <span className='mx-auto my-2 block h-2 w-[100%] border-b border-[#2E2E2E]'></span>
              <p className='m-3 rounded-[2rem] bg-[#2B2B2B]  p-4 text-xs font-semibold text-white '>
                {user ? `${user.email}` : ""}
              </p>
            </div>
          </div>
        )}

        <div className='rounded-lg bg-[#f6f6f6] md:bg-white md:p-10 md:p-4'>
          <div className='mt-[3rem] hidden text-center md:block'>
            <div className='mt-2 flex items-center  justify-center gap-2'>
              <h1 className=' text-xl font-semibold text-black capitalize'>{user ? `${user.firstName} ${user.lastName}` : ""}</h1>
              <span className='mx-1 h-4 border-r border-[#808080]' />
              <p className='text-sm font-medium text-[#0C78DB] capitalize'>
                {user ? `${user.userType.toLowerCase()}` : ""}
              </p>
            </div>
            <p className='font=normal text-sm text-[#333333]'>
              {user ? `${user.email}` : ""}
            </p>
          </div>

          {/* Tabs */}
          <div className='mt-4  hidden border-b border-gray-300 md:flex'>
            {tabTitles.map((title: string) => (
              <Tab
                key={title}
                title={title}
                active={activeTab === title}
                onClick={() => handleTabClick(title)}
              />
            ))}
          </div>

          {renderTabContent()}
        </div>
        {activeTab === 'Vote' && (
          <div className='mt-[5%] w-full  md:hidden '>
            {tabTitlesMobileView.map((title, index) => (
              <div
                key={index}
                className='mb-4 flex items-center rounded-lg bg-white p-4'
                onClick={() => handleTabClick(title)}
              >
                <div className='rounded-full bg-white p-2'>
                  {iconComponents[index]}
                </div>
                <p className='ml-2 text-sm font-semibold leading-5 text-gray-800 md:text-base md:font-medium'>
                  {title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
