import { auth0 } from '@/lib/auth0';
import { getAdminProfile } from '@/utils/api/getAdminProfile';

export default async function AdminMainPage() {
  const accessToken = await auth0.getAccessToken();

  console.log({ accessToken });

  const user = await getAdminProfile(accessToken.token);

  console.log({ user });

  return user && <div></div>;
}
