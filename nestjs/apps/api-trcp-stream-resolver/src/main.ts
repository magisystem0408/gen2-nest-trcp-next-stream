import type {APIGatewayProxyHandler} from 'aws-lambda';
import {NestFactory} from '@nestjs/core';
import {ApiTrcpStreamResolverModule} from './api-trcp-stream-resolver.module';
import {ApiTrcpStreamResolverService} from "./api-trcp-stream-resolver.service";


export const handler: APIGatewayProxyHandler = async () => {
    const appContext = await NestFactory.createApplicationContext(
        ApiTrcpStreamResolverModule
    )

    const eventsService = appContext.get(ApiTrcpStreamResolverService)

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'neko'}),
    };
}