import { prop, modelOptions } from "@typegoose/typegoose";
import { randomUUID } from "crypto";

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
})
export class BaseEntity {
  public id!: string;
  @prop({ default: randomUUID, _id: true })
  _id!: string;
}



export class BaseEntityCreation extends BaseEntity {
  @prop({ type: () => Date })
  public creationDate: Date
}
