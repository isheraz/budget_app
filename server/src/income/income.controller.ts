import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IncomeService } from './income.service';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  addExpense(
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('income_date') income_date: Date,
    @Body('categories_id') categories_id: number,
    @Body('user_id') user_id: number,
    @Body('type') type: string
  ) {
    const id = this.incomeService.insertIncome(
      amount,
      description,
      income_date,
      categories_id,
      user_id,
      type
    );
    return { id: id };
  }

  @Get()
  getAllExpense() {
    return this.incomeService.getAllIncome();
  }

  @Get(':id')
  getExpense(@Param('id') incomeId: number) {
    return this.incomeService.getIncome(incomeId);
  }

  @Patch(':id')
  update(
    @Param('id') incomeId: number,
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('income_date') income_date: Date,
    @Body('categories_id') categories_id: number,
    @Body('user_id') user_id: number
  ) {
    const resp = this.incomeService.update(
      incomeId,
      amount,
      description,
      income_date,
      categories_id,
      user_id
    );
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') incomeId: number) {
    return this.incomeService.remove(incomeId);
  }
}