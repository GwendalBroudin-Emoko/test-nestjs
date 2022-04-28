import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CompaniesController } from './controller/companies.controller';
import { CompaniesUserAccessProfileController } from './controller/companies-user-access-profile.controller';
import { CompanyEntity } from './entities/company.entity';
import { UserAccessProfileEntity } from './entities/user-access-profile.entity';
import { CompaniesService } from './service/companies.service';

@Module(
  { imports: [TypegooseModule.forFeature([CompanyEntity, UserAccessProfileEntity])],
  providers: [CompaniesService],
  exports: [CompaniesService],
  controllers: [CompaniesController,CompaniesUserAccessProfileController]
})
export class CompaniesModule {}
 