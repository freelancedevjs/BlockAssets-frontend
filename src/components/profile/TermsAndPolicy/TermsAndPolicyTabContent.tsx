import React from 'react';
import TermsAndPolicyCard from './TermsAndPolicyCard';
import { ChevronLeft } from 'lucide-react';
import { useQuery } from '@apollo/client';
import { GET_MANY_PAGE_LIST } from '@/components/profile/TermsAndPolicy/termsAndPolicy.gql';
import Loader from '@/components/Loader';

interface TermsAndPolicyTabContentProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TermsAndPolicyTabContent: React.FC<TermsAndPolicyTabContentProps> = ({
  setActiveTab,
}) => {
  const { loading, error, data } = useQuery(GET_MANY_PAGE_LIST, {
    variables: {
      input: {
        where: null,
      },
    },
  });

  if (loading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <p className='text-xl'>
          <Loader />
        </p>
      </div>
    );

  if (error)
    return (
      <div className='flex h-screen items-center justify-center'>
        <p className='text-xl text-red-500'>Error: {error.message}</p>
      </div>
    );

  return (
    <div>
      <div className=' absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className=' flex items-center justify-between px-5 py-3'>
          <div onClick={() => setActiveTab('Vote')}>
            <ChevronLeft />
          </div>

          <div className=' text-lg font-semibold'>Terms & Policy</div>
          <div></div>
        </div>
      </div>
      {data &&
        data.getPages.data.map((item: any) => (
          <TermsAndPolicyCard
            key={item.id}
            title={item.name}
            link={`/profile/${item.slug}`}
          />
        ))}
    </div>
  );
};

export default TermsAndPolicyTabContent;
