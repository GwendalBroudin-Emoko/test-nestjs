import { Controller, Get } from '@nestjs/common';
import { AccountEntity } from '../entities/account.entity';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AccountsService } from '../services/accounts/accounts.service';
import { Crud } from 'nestjs-mongoose-crud';
// import { CrudController } from 'nestjs-mongoose-crud/dist/crud.controller';

@Crud({
  model: AccountEntity
})
@Controller('accounts')
export class AccountsController  {
  constructor(
    @InjectModel(AccountEntity)
    public readonly model: ReturnModelType<typeof AccountEntity>,
    private readonly accountService: AccountsService
  ) {
  }

}
