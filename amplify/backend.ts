import {defineBackend} from '@aws-amplify/backend';
import {auth} from './auth/resource';
import {data} from './data/resource';
import {apiTrcpStreamResolver} from "./functions/api-trcp-stream-resolver/resource";
import {generateRandomString} from "./utils/helpers";
import {ssmPolicy} from "./policy";
import {AuthorizationType, Cors, LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
    auth,
    data,
    apiTrcpStreamResolver
});

const {lambda} = backend.apiTrcpStreamResolver.resources
const apiStack = backend.createStack('api-stack');
lambda.addToRolePolicy(ssmPolicy);

const randomString = generateRandomString(5);


const trcpStreamRestApi = new RestApi(apiStack, 'TrcpStreamRestApi', {
    restApiName: `trcpStreamRestApi-${randomString}`,
    deploy: true,
    defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: Cors.DEFAULT_HEADERS,
    },
})

const lambdaIntegration = new LambdaIntegration(
    lambda,
);

const stripeWebhookPath = trcpStreamRestApi.root;

stripeWebhookPath.addMethod('GET', lambdaIntegration, {authorizationType: AuthorizationType.NONE});

backend.addOutput({
    custom: {
        API: {
            [trcpStreamRestApi.restApiName]: {
                endpoint: trcpStreamRestApi.url,
                apiName: trcpStreamRestApi.restApiName,
            },
        },
    },
});