import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { type } from 'os';
import { IncomeService } from './income.service';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  addIncome(
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
  getAllIncome() {
    return this.incomeService.getAllIncome();
  }

  @Get(':id')
  getIncome(@Param('id') incomeId: number) {
    return this.incomeService.getIncome(incomeId);
  }

  @Patch(':id')
  update(
    @Param('id') incomeId: number,
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('income_date') income_date: Date,
    @Body('categories_id') categories_id: number,
    @Body('user_id') user_id: number,
    @Body('type') type: string
  ) {
    const resp = this.incomeService.update(
      incomeId,
      amount,
      description,
      income_date,
      categories_id,
      user_id,
      type
    );
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') incomeId: number) {
    return this.incomeService.remove(incomeId);
  }
}
