'use server';

import { auth0 } from '@/lib/auth0';
import { User, UserStatus } from '@/models/User';
import { getProfile } from '@/utils/api/getProfile';
import { redirect } from 'next/navigation';

export default async function AdminMainPage() {
  let user: User | undefined;

  try {
    const accessToken = await auth0.getAccessToken();

    user = await getProfile(accessToken.token);
  } catch (e) {
    console.error(e);
    redirect('/auth/login');
  }

  if (!user) {
    redirect('/auth/login');
  }

  if (user.profile.status === UserStatus.PendingProfile) {
    console.log('Redirecting to onboarding');
    redirect('/onboarding');
  }

  return <></>;
}
