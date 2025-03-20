import { getProfile } from '@/utils/api/getProfile';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (accessToken: string) => {
  return useQuery({
    queryKey: ['profile', accessToken],
    queryFn: () => getProfile(accessToken),
    enabled: Boolean(accessToken),
  });
};
