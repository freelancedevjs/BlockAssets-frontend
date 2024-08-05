"use client"
import React, { createContext, useContext, useState } from 'react';

export type IUserType = 'Individual' | 'Corporate' | 'Accredited Investor';

interface UserTypeContextProps {
  selectedUserType: IUserType ;
  setSelectedUserType: React.Dispatch<
    React.SetStateAction<IUserType>
  >;
}

const UserTypeContext = createContext<UserTypeContextProps>({
  selectedUserType: "Individual",
  setSelectedUserType: (value) => value,
});

export const UserTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedUserType, setSelectedUserType] = useState<IUserType>("Individual");
  return (
    <UserTypeContext.Provider value={{ selectedUserType, setSelectedUserType }}>
      {children}
    </UserTypeContext.Provider>
  )
};

export const useUserType = () => {
  const { selectedUserType, setSelectedUserType } = useContext(UserTypeContext);
  return { selectedUserType, setSelectedUserType };
};
