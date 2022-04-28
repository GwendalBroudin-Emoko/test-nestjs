import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports:[
    TypegooseModule.forRoot("mongodb://localhost:27017/", {
      dbName: 'emoko-api-dev',
    }),
  ],
  exports: [
  ],
})
export class DatabaseModule { }
