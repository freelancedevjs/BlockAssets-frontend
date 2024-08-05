'use client';
import Loader from '@/components/Loader';
import { User } from '@/generated/generated';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { redirect, useRouter } from 'next/navigation';
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

export const UserFetchContext = createContext<{
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({});
const USER_QUERY = gql`
  query {
    getMe {
      firstName
      lastName
      dob
      email
      userType
      companyName
      phone
      country
      tnc_status
      wallet {
        address
      }
    }
  }
`;

export const useUserFetch = () => useContext(UserFetchContext);
export const UserFetchProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [fetchUserQuery, { data, error, loading }] = useLazyQuery(USER_QUERY);

  useLayoutEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const res = await fetchUserQuery();
        if (isMounted) {
          if (!res.data) {
            router.push('/login');
          } else {
            setUser(res.data.getMe);
          }
        }
      } catch (error) {
        if (isMounted) {
          router.push('/login');
        }
      }
    };
    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <UserFetchContext.Provider value={{ user, setUser }}>
      {children}
    </UserFetchContext.Provider>
  );
};
