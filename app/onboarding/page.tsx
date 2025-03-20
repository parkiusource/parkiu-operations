'use client';

import { useUserContext } from '@/contexts/UserContext';
import { useOnboarding } from '@/hooks/useOnboarding';

export default function AdminOnboardingPage() {
  const { user } = useUserContext();

  const { step } = useOnboarding({ user });

  return <div></div>;
}
