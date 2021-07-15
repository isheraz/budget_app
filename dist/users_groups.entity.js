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
exports.User_Groups = void 0;
const typeorm_1 = require("typeorm");
let User_Groups = class User_Groups {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User_Groups.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 32 }),
    __metadata("design:type", String)
], User_Groups.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User_Groups.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User_Groups.prototype, "groups_id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], User_Groups.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], User_Groups.prototype, "updated_at", void 0);
User_Groups = __decorate([
    typeorm_1.Entity()
], User_Groups);
exports.User_Groups = User_Groups;
//# sourceMappingURL=users_groups.entity.js.map