import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export const appsyncPolicy = new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['appsync:*'],
  resources: ['*'],
});


export const ssmPolicy = new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['ssm:GetParameters'],
  resources: ['*'], // Allow access to all resources
});