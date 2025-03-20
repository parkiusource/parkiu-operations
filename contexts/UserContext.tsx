import { useProfile } from '@/hooks/api/useProfile';
import { User } from '@/models/User';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { UseQueryResult } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserState {
  user: User | undefined;
  isLoading: boolean;
  error: Error | null;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserState | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    getAccessToken()
      .then((token: string) => {
        setAccessToken(token);
      })
      .catch((e) => {
        console.error(e);
      });

    return () => {
      setAccessToken(null);
    };
  }, []);

  const { data: user, isLoading, error } = useProfile(accessToken ?? '');

  const initialState: UserState = {
    user,
    isLoading,
    error,
  };

  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
