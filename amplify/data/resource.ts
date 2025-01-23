/* ****************************************************************************************************************
The following code defines the askBedrock query that takes an array of strings called ingredients and returns a BedrockResponse. 
The .handler(a.handler.custom({ entry: "./bedrock.js", dataSource: "bedrockDS" })) line sets up a custom handler for this query, d
efined in bedrock.js, using bedrockDS as its data source.
**************************************************************************************************************** */

import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  BedrockResponse: a.customType({
    body: a.string(),
    error: a.string(),
  }),

  askBedrock: a
    .query()
    .arguments({ ingredients: a.string().array() })
    .returns(a.ref("BedrockResponse"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({ entry: "./bedrock.js", dataSource: "bedrockDS" })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});