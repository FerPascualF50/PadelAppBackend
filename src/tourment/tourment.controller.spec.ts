import { Test, TestingModule } from '@nestjs/testing';
import { TourmentController } from './tourment.controller';
import { TourmentService } from './tourment.service';

describe('TourmentController', () => {
  let controller: TourmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourmentController],
      providers: [TourmentService],
    }).compile();

    controller = module.get<TourmentController>(TourmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
