import { createContext, useMemo } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';

import { CACHE_CONFIG } from '@/lib/queryClient';

export const QueryClientContext = createContext({});

type QueryClientContextProviderProps = Omit<QueryClientProviderProps, 'client'>;

const QueryClientContextProvider = ({
  children,
}: QueryClientContextProviderProps) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: CACHE_CONFIG.default.staleTime,
            gcTime: CACHE_CONFIG.default.cacheTime,
          },
        },
      }),
    [],
  );

  return (
    <QueryClientContext.Provider value={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </QueryClientContext.Provider>
  );
};

export { QueryClientContextProvider as QueryClientProvider };
