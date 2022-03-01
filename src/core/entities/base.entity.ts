import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
})
export class BaseEntity  {
  // @prop()
  public id!: string;
  @prop()
  _id!: string;
}



export class BaseEntityCreation extends BaseEntity {
  @prop({ type: () => Date })
  public creationDate: Date
}
