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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expenses = void 0;
const typeorm_1 = require("typeorm");
var paid_for_type;
(function (paid_for_type) {
    paid_for_type["USER"] = "USER";
    paid_for_type["GROUP"] = "GROUP";
})(paid_for_type || (paid_for_type = {}));
let Expenses = class Expenses {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Expenses.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expenses.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ length: 128 }),
    __metadata("design:type", String)
], Expenses.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Expenses.prototype, "expense_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expenses.prototype, "categories_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expenses.prototype, "users_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expenses.prototype, "paid_by", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Expenses.prototype, "paid_for_type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expenses.prototype, "paid_for_id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Expenses.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Expenses.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Expenses.prototype, "deleted_at", void 0);
Expenses = __decorate([
    typeorm_1.Entity()
], Expenses);
exports.Expenses = Expenses;
//# sourceMappingURL=expenses.entity.js.map