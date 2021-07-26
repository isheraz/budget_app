import { Repository } from 'typeorm';
import { Expenses } from 'src/database/entities/expenses.entity';
export declare class ExpenseService {
    private expenseRepository;
    constructor(expenseRepository: Repository<Expenses>);
    getAllExpense(): Promise<Expenses[]>;
    getExpense(id: number): Promise<Expenses>;
    insertExpense(amount: number, description: string, expense_date: Date, categories_id: number, user_id: number, paid_by: number, paid_for_id: number, paid_for_type: string): Promise<{}>;
    remove(id: number): Promise<{}>;
    update(id: number, amount: number, description: string, expense_date: Date, categories_id: number, user_id: number, paid_by: number, paid_for_id: number, paid_for_type: string): Promise<{}>;
}
