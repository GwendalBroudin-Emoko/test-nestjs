import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { CompanyEntity } from '../entities/company.entity';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: CompanyEntity
})
@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  /**
   *
   */
  constructor(
    @InjectModel(CompanyEntity)
    public readonly model: ReturnModelType<typeof CompanyEntity>) {
  }  
}
