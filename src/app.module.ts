import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { AccountsModule } from './accounts/accounts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CoreModule,
    AccountsModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
