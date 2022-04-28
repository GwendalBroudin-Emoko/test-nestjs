import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags } from '@nestjs/swagger';
import { UserAccessProfileEntity } from '../entities/user-access-profile.entity';
import { RelationController } from 'src/core/controllers/sub-controller/relation.controller';

// @Crud({
//   model: UserAccessProfileEntity,
// })
@ApiTags('companies')
@Controller('companies/:parentId/userAccessProfile')
export class CompaniesUserAccessProfileController extends RelationController<UserAccessProfileEntity> {

  override mutateModel(parentId: string): Partial<UserAccessProfileEntity> {
    throw new Error('Method not implemented.');
  }
  override subRouteWhereFilter(companyId: string): Partial<UserAccessProfileEntity> {
    return { companyId }
  }

  constructor(
    @InjectModel(UserAccessProfileEntity)
    public readonly model: ReturnModelType<typeof UserAccessProfileEntity>) {
    super(model)
  }
}
