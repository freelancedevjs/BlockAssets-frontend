import DisclosureDetail from '@/components/Detail/DisclosureDetail';
import React from 'react';

const DisclosurePage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <DisclosureDetail slug={params.slug} />
    </>
  );
};

export default DisclosurePage;
