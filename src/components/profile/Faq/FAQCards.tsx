import React, { useState } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

interface FAQCardsProps {
  question: string;
  answer: string;
}

const FAQCards: React.FC<FAQCardsProps> = ({ question, answer }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleExpansion} className='cursor-pointer h-85 my-2 flex w-full items-center rounded-lg bg-white p-4 md:bg-[#F2F6F6]'>
      <div className='flex-grow'>
        <div className='flex items-center'>
          <p className='md:text=lg md:text-medium text-sm font-semibold leading-6 text-[#000000] lg:text-lg xl:text-lg'>
            {question}
          </p>
        </div>
        {isExpanded && (
          <p className='mt-2 text-sm font-normal leading-5 text-[#808080] md:text-base md:font-medium'>
            {answer}
          </p>
        )}
      </div>
      <div className='flex items-center'>
        <div className='text-808080 cursor-pointer' >
          {isExpanded ? (
            <MdRemove size={24} color='#DF1525' className='font-bold' />
          ) : (
            <MdAdd size={24} color='#DF1525' className='font-bold' />
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQCards;
