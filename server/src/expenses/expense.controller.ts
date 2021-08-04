import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  addExpense(
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('expense_date') expense_date: Date,
    @Body('categories_id') categories_id: number,
    @Body('user_id') user_id: number,
    @Body('paid_by') paid_by: number,
    @Body('paid_for_id') paid_for_id: number,
    @Body('paid_for_type') paid_for_type: string
  ) {
    const id = this.expenseService.insertExpense(
      amount,
      description,
      expense_date,
      categories_id,
      user_id,
      paid_by,
      paid_for_id,
      paid_for_type
    );
    return { id: id };
  }

  @Get()
  getAllExpense() {
    return this.expenseService.getAllExpense();
  }

  @Get(':id')
  getExpense(@Param('id') expenseId: number) {
    return this.expenseService.getExpense(expenseId);
  }

  @Patch(':id')
  update(
    @Param('id') expenseId: number,
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('expense_date') expense_date: Date,
    @Body('categories_id') categories_id: number,
    @Body('user_id') user_id: number,
    @Body('paid_by') paid_by: number,
    @Body('paid_for_id') paid_for_id: number,
    @Body('paid_for_type') paid_for_type: string
  ) {
    const resp = this.expenseService.update(
      expenseId,
      amount,
      description,
      expense_date,
      categories_id,
      user_id,
      paid_by,
      paid_for_id,
      paid_for_type
    );
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') expenseId: number) {
    return this.expenseService.remove(expenseId);
  }
}
