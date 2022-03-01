import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { ReturnModelType } from "@typegoose/typegoose";

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(AccountEntity)
    private readonly accountModel: ReturnModelType<typeof AccountEntity>
  ) {
  }

  async findAll(): Promise<AccountEntity[]> {
    return this.accountModel.find().exec();
  }
}
