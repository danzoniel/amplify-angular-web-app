import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Sensor: a
    .model({
      id: a.string(),
      timestamp: a.timestamp(),
      latitude: a.float(),
      longitude: a.float(),
      statusHealth: a.string(),
      currentWaterLevel: a.float(),
      supportedVolume: a.float(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
