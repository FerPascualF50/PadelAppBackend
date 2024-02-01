import { Test, TestingModule } from '@nestjs/testing';
import { TourmentService } from './tourment.service';

describe('TourmentService', () => {
  let service: TourmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourmentService],
    }).compile();

    service = module.get<TourmentService>(TourmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
