import { Test, TestingModule } from '@nestjs/testing';
import { DbAccessorService } from './db-accessor.service';

describe('DbAccessorService', () => {
  let service: DbAccessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbAccessorService],
    }).compile();

    service = module.get<DbAccessorService>(DbAccessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
