"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const expense_model_1 = require("./expense.model");
let ExpenseService = class ExpenseService {
    constructor() {
        this.expense = [];
    }
    insertExpense(amount, description, user_id) {
        const newExpense = new expense_model_1.Expense(1, amount, description, user_id);
        this.expense.push(newExpense);
        return 1;
    }
    getAllExpense() {
        return this.expense;
    }
};
ExpenseService = __decorate([
    common_1.Injectable()
], ExpenseService);
exports.ExpenseService = ExpenseService;
//# sourceMappingURL=expense.service.js.map