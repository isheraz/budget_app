import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('expenses')
export class ExpenseController {

    constructor(private readonly expenseService: ExpenseService){}

    @Post()
    addExpense(
        @Body('amount') amount: number, 
        @Body('description') description: string, 
        @Body('user_id') user_id: number
    ) {
        const id = this.expenseService.insertExpense(amount, description, user_id);
        return {id: id};
    }

    @Get()
    getAllExpense(){
        return this.expenseService.getAllExpense();
    }
}
