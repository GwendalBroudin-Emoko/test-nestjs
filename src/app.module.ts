import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { AccountsModule } from './accounts/accounts.module';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    CoreModule,
    AccountsModule,
    DatabaseModule,
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
