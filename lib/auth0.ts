import { Auth0Client } from '@auth0/nextjs-auth0/server';

const authAudience = process.env.AUTH0_AUDIENCE;

export const auth0 = new Auth0Client({
  authorizationParameters: {
    scope: 'openid profile email offline_access',
    audience: authAudience,
  },
});
