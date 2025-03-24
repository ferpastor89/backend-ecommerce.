import { Test, TestingModule } from '@nestjs/testing';
import { ProductnestService } from './productnest.service';

describe('ProductnestService', () => {
  let service: ProductnestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductnestService],
    }).compile();

    service = module.get<ProductnestService>(ProductnestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
