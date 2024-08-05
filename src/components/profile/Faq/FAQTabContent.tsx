import React from 'react';
import FAQCards from './FAQCards';
import { ChevronLeft } from 'lucide-react';
import { useGetFaqsQuery } from '@/generated/generated';
import Loader from '@/components/Loader';

interface FAQTabContentProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const FAQTabContent: React.FC<FAQTabContentProps> = ({ setActiveTab }) => {
  const { data, loading, error } = useGetFaqsQuery({
    variables: {
      input: null,
    },
  });

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>
          <Loader />
        </p>
      </div>
    );
  }

  if (error || !data || !data.getFaqs || !data.getFaqs.data) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>Error: {error ? error.message : 'Data not available'}</p>
      </div>
    );
  }

  const faqDataArray = data.getFaqs.data;

  return (
    <div>
      <div className='absolute left-0 top-0 z-50 w-full overflow-hidden overflow-x-auto bg-white md:hidden'>
        <div className='flex items-center justify-between px-5 py-3'>
          <div onClick={() => setActiveTab('Vote')}>
            <ChevronLeft />
          </div>
          <div className='text-lg font-semibold'>FAQ</div>
          <div></div>
        </div>
      </div>
      <p className='font-family-Poppins mb-3 mt-4 text-center text-[22px] font-semibold md:mt-0 md:hidden'>
        How can we help you?
      </p>
      {faqDataArray.map((faq) => (
        <FAQCards key={faq.id} question={faq.title} answer={faq.content} />
      ))}
    </div>
  );
};

export default FAQTabContent;
