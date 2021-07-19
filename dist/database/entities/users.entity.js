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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const countries_entity_1 = require("./countries.entity");
let Users = class Users {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Users.prototype, "countries_id", void 0);
__decorate([
    typeorm_1.Column({ length: 32 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 48 }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ length: 16 }),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Users.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Users.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "deleted_at", void 0);
__decorate([
    typeorm_1.ManyToOne(() => countries_entity_1.Countries, countries => countries.users),
    __metadata("design:type", countries_entity_1.Countries)
], Users.prototype, "countries", void 0);
Users = __decorate([
    typeorm_1.Entity()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.entity.js.map