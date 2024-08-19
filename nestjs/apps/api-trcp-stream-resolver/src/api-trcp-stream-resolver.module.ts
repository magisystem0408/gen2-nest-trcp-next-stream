import { Module } from '@nestjs/common';
import { ApiTrcpStreamResolverController } from './api-trcp-stream-resolver.controller';
import { ApiTrcpStreamResolverService } from './api-trcp-stream-resolver.service';

@Module({
  imports: [],
  providers: [ApiTrcpStreamResolverService],
})
export class ApiTrcpStreamResolverModule {}
