'use client';

import { Auth0Provider } from '@auth0/nextjs-auth0';

import { QueryClientProvider } from '@/contexts/QueryClientContext';
import { UserProvider } from '@/contexts/UserContext';
import { OnboardingProvider } from '@/contexts/OnboardingContext';

type ProvidersProps = React.HTMLAttributes<HTMLDivElement>;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider>
      <Auth0Provider>
        <UserProvider>
          <OnboardingProvider>{children}</OnboardingProvider>
        </UserProvider>
      </Auth0Provider>
    </QueryClientProvider>
  );
};
