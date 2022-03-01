import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports:[
    ...databaseProviders,
  ],
  exports: [
    ...databaseProviders,
  ],
})
export class DatabaseModule { }
