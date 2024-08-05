"use client"
import ApolloWrapper from '@/proividers/ApolloWrapper';
import { UserFetchProvider } from '@/proividers/UserFetchProvider';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloWrapper>
        <UserFetchProvider>
          {children}
        </UserFetchProvider>
      </ApolloWrapper>
    </>
  );
};

export default Providers;
