import { Test, TestingModule } from '@nestjs/testing';
import { MicrocervprismaController } from './microcervprisma.controller';
import { MicrocervprismaService } from './microcervprisma.service';

describe('MicrocervprismaController', () => {
  let microcervprismaController: MicrocervprismaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicrocervprismaController],
      providers: [MicrocervprismaService],
    }).compile();

    microcervprismaController = app.get<MicrocervprismaController>(MicrocervprismaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microcervprismaController.getHello()).toBe('Hello World!');
    });
  });
});
