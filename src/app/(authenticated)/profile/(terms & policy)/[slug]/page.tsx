'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { GET_ONE_PAGE } from '@/components/profile/TermsAndPolicy/termsAndPolicy.gql';
import DynamicContentRenderer from '@/components/profile/TermsAndPolicy';
import Loader from '@/components/Loader';

const InvestorPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_PAGE, {
    variables: {
      input: {
        where: {
          slug: slug,
        },
      },
    },
  });

  if (loading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>
          <Loader />
        </p>
      </div>
    );

  if (error)
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>Error: {error.message}</p>
      </div>
    );

  const { id, name, content, status } = data.getOnePage;
  return <DynamicContentRenderer name={name} content={content} />;
};

export default InvestorPage;
