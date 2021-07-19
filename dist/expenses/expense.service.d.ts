import { Expense } from './expense.model';
export declare class ExpenseService {
    expense: Expense[];
    insertExpense(amount: number, description: string, user_id: number): number;
    getAllExpense(): Expense[];
}
