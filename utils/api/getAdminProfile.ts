'use server';

const API_URL = process.env.API_BACKEND_URL;

export const getAdminProfile = async (accessToken: string) => {
  console.log({ accessToken });
  const response = await fetch(`${API_URL}/admins/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};
