import { BaseEntityCreation } from "src/core/entities/base.entity";
import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { IsString } from "class-validator";
import { UserAccessProfileEntity } from "./user-access-profile.entity";

@modelOptions({ schemaOptions: { collection: 'Company' } })
export class CompanyEntity extends BaseEntityCreation {

  @prop()
  @IsString()
  public name: string;

  @prop()
  @IsString()
  public siren: string;

  @prop()
  @IsString()
  public tva: string;

  @prop()
  @IsString()
  public phone: string;

  @prop()
  @IsString()
  public activityArea: string;

  @prop()
  @IsString()
  public logoId: string;

  @prop({
    ref: () => UserAccessProfileEntity,
    foreignField: 'companyId',
    localField: '_id',    
    justOne: false
  })
  public userAccessProfiles: Ref<UserAccessProfileEntity>[];

} 