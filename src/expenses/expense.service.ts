import { Injectable } from '@nestjs/common';
import { Expense } from './expense.model';
// import { Expenses } from 'src/database/entities/expenses.entity';

@Injectable()
export class ExpenseService {

    expense: Expense[] = [];

    insertExpense(amount: number, description: string, user_id: number) { 
        const newExpense = new Expense(1, amount, description, user_id)
        this.expense.push(newExpense);
        return 1;
    }

    getAllExpense() {
        return this.expense;
    }

}
