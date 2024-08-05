'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import {
  GetMyNotificationsResponse,
  Notification,
} from '@/contexts/NotificationContext/notification';

const GET_NOTIFICATIONS = gql`
  query GetNotifications($input: GetManyInput) {
    getMyNotifications(input: $input) {
      count
      data {
        category
        title
        content
        createdAt
        id
        mode
        readAt
        property {
          id
          slug
        }
        updatedAt
      }
    }
  }
`;

interface NotificationsContextValue {
  loading: boolean;
  error: ApolloError | undefined | null;
  notifications: Notification[];
  totalNotifications: number;
  loadMore: () => void;
  hasMore: boolean;
}

const NotificationsContext = createContext<NotificationsContextValue | null>(
  null
);

export const useNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError | undefined | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const {
    loading: queryLoading,
    error: queryError,
    data,
    fetchMore,
  } = useQuery<GetMyNotificationsResponse>(GET_NOTIFICATIONS, {
    variables: {
      input: {
        pagination: {
          page: 0,
          size: 10,
        },
      },
    },
  });

  useEffect(() => {
    setLoading(queryLoading);
    setError(queryError);
    if (data) {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        ...(data.getMyNotifications.data || []),
      ]);
      setTotalNotifications(data.getMyNotifications.count || 0);
      setHasMore(
        data.getMyNotifications.data.length < data.getMyNotifications.count
      );
    }
  }, [queryLoading, queryError, data]);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchMore({
        variables: {
          input: {
            pagination: {
              page: page + 1,
              size: 10,
            },
          },
        },
      });
      setPage(page + 1);
    }
  };

  return {
    loading,
    error,
    notifications,
    totalNotifications,
    loadMore,
    hasMore,
  };
};

export const NotificationsProvider = ({ children }) => {
  const {
    loading,
    error,
    notifications,
    totalNotifications,
    loadMore,
    hasMore,
  } = useNotifications();

  return (
    <NotificationsContext.Provider
      value={{
        loading,
        error,
        notifications,
        totalNotifications,
        loadMore,
        hasMore,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = (): NotificationsContextValue => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      'useNotificationsContext must be used within a NotificationsProvider'
    );
  }
  return context;
};
