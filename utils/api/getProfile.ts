'use server';

import { User } from '@/models/User';

const API_URL = process.env.API_BACKEND_URL;

export const getProfile = async (accessToken: string): Promise<User> => {
  const response = await fetch(`${API_URL}/admins/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) throw new Error('Failed to get admin profile');

  return response.json();
};
