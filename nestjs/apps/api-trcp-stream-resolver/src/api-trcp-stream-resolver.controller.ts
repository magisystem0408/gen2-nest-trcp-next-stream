import { Controller, Get } from '@nestjs/common';
import { ApiTrcpStreamResolverService } from './api-trcp-stream-resolver.service';

@Controller()
export class ApiTrcpStreamResolverController {
  constructor(private readonly apiTrcpStreamResolverService: ApiTrcpStreamResolverService) {}

  @Get()
  getHello(): string {
    return this.apiTrcpStreamResolverService.getHello();
  }
}
