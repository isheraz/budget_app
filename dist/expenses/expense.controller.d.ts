import { ExpenseService } from './expense.service';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    addExpense(amount: number, description: string, expense_date: Date, categories_id: number, user_id: number, paid_by: number, paid_for_id: number, paid_for_type: string): {
        id: Promise<{}>;
    };
    getAllExpense(): Promise<import("../database/entities/expenses.entity").Expenses[]>;
    getExpense(expenseId: number): Promise<import("../database/entities/expenses.entity").Expenses>;
    update(expenseId: number, amount: number, description: string, expense_date: Date, categories_id: number, user_id: number, paid_by: number, paid_for_id: number, paid_for_type: string): Promise<{}>;
    remove(expenseId: number): Promise<{}>;
}
