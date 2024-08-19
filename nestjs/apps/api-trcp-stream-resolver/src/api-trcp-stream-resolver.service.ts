import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiTrcpStreamResolverService {
  getHello(): string {
    return 'Hello World!';
  }
}
