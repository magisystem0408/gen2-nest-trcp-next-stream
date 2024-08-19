import { Module } from '@nestjs/common';
import { ApiTrcpStreamResolverService } from './api-trcp-stream-resolver.service';

@Module({
  imports: [],
  providers: [ApiTrcpStreamResolverService],
})
export class ApiTrcpStreamResolverModule {}
