import { DisclosureTab } from '@/components/Detail/Disclosure';
import React from 'react';

const disclosure = [
  {
    createdAt: 'Wednesday, February 21, 2024 5:05 PM',
    name: 'Disclosure 1',
  },
  {
    createdAt: 'Wednesday, February 21, 2024 5:05 PM',
    name: 'Disclosure 2',
  },
  {
    createdAt: 'Wednesday, February 21, 2024 5:05 PM',
    name: 'Disclosure 3',
  },
];

const Disclosure = () => {
  return (
    <div className=' flex flex-col gap-2.5'>
      {disclosure.map((disclosure, index) => {
        return (
          <DisclosureTab
            data={{
              ...disclosure,
              slug: '',
              property: { slug: '' },
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Disclosure;
