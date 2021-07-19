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
exports.Transactions = void 0;
const typeorm_1 = require("typeorm");
let Transactions = class Transactions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Transactions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ length: 128 }),
    __metadata("design:type", String)
], Transactions.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Transactions.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "categories_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "sub_categories_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "users_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "expenses_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transactions.prototype, "groups_id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Transactions.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Transactions.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Transactions.prototype, "deleted_at", void 0);
Transactions = __decorate([
    typeorm_1.Entity()
], Transactions);
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.entity.js.map