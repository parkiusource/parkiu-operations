'use client';

import { Auth0Provider } from '@auth0/nextjs-auth0';

import { QueryClientProvider } from '@/contexts/QueryClientContext';
import { UserProvider } from '@/contexts/UserContext';

type ProvidersProps = React.HTMLAttributes<HTMLDivElement>;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider>
      <Auth0Provider>
        <UserProvider>{children}</UserProvider>
      </Auth0Provider>
    </QueryClientProvider>
  );
};
