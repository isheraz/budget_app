"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const expenses_entity_1 = require("../database/entities/expenses.entity");
let ExpenseService = class ExpenseService {
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    getAllExpense() {
        return this.expenseRepository.find();
    }
    getExpense(id) {
        return this.expenseRepository.findOne(id);
    }
    async insertExpense(amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type) {
        const obj = this.expenseRepository.create();
        obj.amount = amount;
        obj.description = description;
        obj.expense_date = expense_date;
        obj.categories_id = categories_id;
        obj.users_id = user_id;
        obj.paid_by = paid_by;
        obj.paid_for_id = paid_for_id;
        obj.paid_for_type = paid_for_type;
        const resp = await this.expenseRepository.save(obj);
        const response = {
            status: true,
            response: resp,
            message: 'Successfully added.',
        };
        return response;
    }
    async remove(id) {
        await this.expenseRepository.delete(id);
        const response = { status: true, message: 'Successfully deleted.' };
        return response;
    }
    async update(id, amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type) {
        const resp = await this.expenseRepository.update({ id: id }, {
            amount: amount,
            description: description,
            expense_date: expense_date,
            categories_id: categories_id,
            users_id: user_id,
            paid_by: paid_by,
            paid_for_id: paid_for_id,
            paid_for_type: paid_for_type,
        });
        const response = {
            status: true,
            response: resp,
            message: 'Successfully updated.',
        };
        return response;
    }
};
ExpenseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(expenses_entity_1.Expenses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExpenseService);
exports.ExpenseService = ExpenseService;
//# sourceMappingURL=expense.service.js.map