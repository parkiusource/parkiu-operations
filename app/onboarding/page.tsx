'use client';

import { useUserContext } from '@/contexts/UserContext';
import { useOnboarding } from '@/hooks/useOnboarding';

export default function AdminOnboardingPage() {
  const { user } = useUserContext();

  const { step } = useOnboarding({ user });

  console.log({ step });

  return <div></div>;
}
