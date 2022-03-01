import { Module } from '@nestjs/common';
import { AccountEntity } from './entities/account.entity';
import { AccountsService } from './services/accounts/accounts.service';
import { AccountsController } from './controller/accounts.controller';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([AccountEntity])],
  providers: [AccountsService],
  exports: [AccountsService],
  controllers: [AccountsController]
})
export class AccountsModule { }
