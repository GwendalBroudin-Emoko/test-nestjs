import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesUserAccessProfileController } from './companies-user-access-profile.controller';

describe('CompaniesUserAccessProfileController', () => {
  let controller: CompaniesUserAccessProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesUserAccessProfileController],
    }).compile();

    controller = module.get<CompaniesUserAccessProfileController>(CompaniesUserAccessProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
