import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),

        scopes: ['email']
      },
      callbackUrls: [
        'http://localhost:4200/callback',
        'https://develop.d1uu1zzq9swwnn.amplifyapp.com/callback'
      ],
      logoutUrls: ['http://localhost:4200/signout', 'https://develop.d1uu1zzq9swwnn.amplifyapp.com/signout'],
    },
    email: true,
  }
});