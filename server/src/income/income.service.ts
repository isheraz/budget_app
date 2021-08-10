import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from 'src/database/entities/income.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>
  ) {}

  getAllIncome(): Promise<Income[]> {
    return this.incomeRepository.find();
  }

  getIncome(id: number): Promise<Income> {
    return this.incomeRepository.findOne(id);
  }

  async insertIncome(
    amount: number,
    description: string,
    income_date: Date,
    categories_id: number,
    user_id: number,
    type: string
  ): Promise<{}> {
    const obj = this.incomeRepository.create();
    obj.amount = amount;
    obj.description = description;
    obj.income_date = income_date;
    obj.categories_id = categories_id;
    obj.users_id = user_id;
    const resp = await this.incomeRepository.save(obj);
    const response = {
      status: true,
      response: resp,
      message: 'Successfully added.',
    };
    return response;
  }

  async remove(id: number): Promise<{}> {
    await this.incomeRepository.delete(id);
    const response = { status: true, message: 'Successfully deleted.' };
    return response;
  }

  async update(
    id: number,
    amount: number,
    description: string,
    income_date: Date,
    categories_id: number,
    user_id: number,
    type: string
  ): Promise<{}> {
    const resp = await this.incomeRepository.update(
      { id: id },
      {
        amount: amount,
        description: description,
        income_date: income_date,
        categories_id: categories_id,
        users_id: user_id,
        type: type,
      }
    );
    const response = {
      status: true,
      response: resp,
      message: 'Successfully updated.',
    };
    return response;
  }
}
