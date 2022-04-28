import { BaseEntityCreation } from "src/core/entities/base.entity";
import { prop, modelOptions } from "@typegoose/typegoose";
import { IsString } from "class-validator";

@modelOptions({ schemaOptions: { collection: 'UserAccessProfile' } })
export class UserAccessProfileEntity extends BaseEntityCreation {

  @prop()
  @IsString()
  public name: string;

  
  @prop()
  @IsString()
  public companyId: string;


} 