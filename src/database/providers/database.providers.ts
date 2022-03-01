import { TypegooseModule } from 'nestjs-typegoose';

export const DATABASE_INJECT_TOKEN = 'DATABASE_CONNECTION'

export const databaseProviders = [
  TypegooseModule.forRoot("mongodb://localhost:27017/", {
      dbName: 'emoko-api-dev',
      
    }),
];