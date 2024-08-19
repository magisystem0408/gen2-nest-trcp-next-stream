import { Test, TestingModule } from '@nestjs/testing';
import { ApiTrcpStreamResolverController } from './api-trcp-stream-resolver.controller';
import { ApiTrcpStreamResolverService } from './api-trcp-stream-resolver.service';

describe('ApiTrcpStreamResolverController', () => {
  let apiTrcpStreamResolverController: ApiTrcpStreamResolverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiTrcpStreamResolverController],
      providers: [ApiTrcpStreamResolverService],
    }).compile();

    apiTrcpStreamResolverController = app.get<ApiTrcpStreamResolverController>(ApiTrcpStreamResolverController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiTrcpStreamResolverController.getHello()).toBe('Hello World!');
    });
  });
});
