'use client';

import { useUserContext } from '@/contexts/UserContext';

export default function AdminOnboardingPage() {
  const { user } = useUserContext();

  console.log({ user });
  return <div></div>;
}
