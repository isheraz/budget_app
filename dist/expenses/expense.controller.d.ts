import { ExpenseService } from './expense.service';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    addExpense(amount: number, description: string, user_id: number): {
        id: number;
    };
    getAllExpense(): import("./expense.model").Expense[];
}
