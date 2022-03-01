import { BaseEntity, BaseEntityCreation } from "src/core/entities/base.entity";
import { prop, modelOptions } from "@typegoose/typegoose";
import { IsString } from "class-validator";

@modelOptions({ schemaOptions: { collection: 'accounts' } })
export class AccountEntity extends BaseEntityCreation {

  /**
   * Default lang of the user
   */
  @prop()
  @IsString()
  public lang: string;

  @prop()
  @IsString()
  public name: string;

  @prop()
  @IsString()
  public type: string;

  @prop()
  @IsString()
  public phone: string;

  @prop()
  @IsString()
  public avatar: string;

  @prop()
  @IsString()
  public isAdmin: string;

  @prop()
  @IsString()
  public isEnabled: string;

  @prop()
  @IsString()
  public giRendersLeft: string;

  @prop()
  @IsString()
  public ownerId: string;
} 