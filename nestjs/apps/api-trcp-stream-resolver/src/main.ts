import { NestFactory } from '@nestjs/core';
import { ApiTrcpStreamResolverModule } from './api-trcp-stream-resolver.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiTrcpStreamResolverModule);
  await app.listen(3000);
}
bootstrap();
