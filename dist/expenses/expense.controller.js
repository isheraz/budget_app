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
exports.ExpenseController = void 0;
const common_1 = require("@nestjs/common");
const expense_service_1 = require("./expense.service");
let ExpenseController = class ExpenseController {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    addExpense(amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type) {
        const id = this.expenseService.insertExpense(amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type);
        return { id: id };
    }
    getAllExpense() {
        return this.expenseService.getAllExpense();
    }
    getExpense(expenseId) {
        return this.expenseService.getExpense(expenseId);
    }
    update(expenseId, amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type) {
        const resp = this.expenseService.update(expenseId, amount, description, expense_date, categories_id, user_id, paid_by, paid_for_id, paid_for_type);
        return resp;
    }
    remove(expenseId) {
        return this.expenseService.remove(expenseId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('amount')),
    __param(1, common_1.Body('description')),
    __param(2, common_1.Body('expense_date')),
    __param(3, common_1.Body('categories_id')),
    __param(4, common_1.Body('user_id')),
    __param(5, common_1.Body('paid_by')),
    __param(6, common_1.Body('paid_for_id')),
    __param(7, common_1.Body('paid_for_type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Date, Number, Number, Number, Number, String]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "addExpense", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getAllExpense", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getExpense", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('amount')),
    __param(2, common_1.Body('description')),
    __param(3, common_1.Body('expense_date')),
    __param(4, common_1.Body('categories_id')),
    __param(5, common_1.Body('user_id')),
    __param(6, common_1.Body('paid_by')),
    __param(7, common_1.Body('paid_for_id')),
    __param(8, common_1.Body('paid_for_type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Date, Number, Number, Number, Number, String]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "remove", null);
ExpenseController = __decorate([
    common_1.Controller('expenses'),
    __metadata("design:paramtypes", [expense_service_1.ExpenseService])
], ExpenseController);
exports.ExpenseController = ExpenseController;
//# sourceMappingURL=expense.controller.js.map