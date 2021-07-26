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
exports.UsersGroupsController = void 0;
const common_1 = require("@nestjs/common");
const users_groups_service_1 = require("./users-groups.service");
let UsersGroupsController = class UsersGroupsController {
    constructor(userGroupService) {
        this.userGroupService = userGroupService;
    }
    save(name, groups_id, users_id) {
        return this.userGroupService.insert(name, groups_id, users_id);
    }
    getAll() {
        return this.userGroupService.getAll();
    }
    get(id) {
        return this.userGroupService.get(id);
    }
    update(id, name, groups_id, users_id) {
        const resp = this.userGroupService.update(id, name, groups_id, users_id);
        return resp;
    }
    remove(id) {
        return this.userGroupService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('groups_id')),
    __param(2, common_1.Body('users_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], UsersGroupsController.prototype, "save", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersGroupsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersGroupsController.prototype, "get", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('groups_id')),
    __param(3, common_1.Body('users_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number]),
    __metadata("design:returntype", void 0)
], UsersGroupsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersGroupsController.prototype, "remove", null);
UsersGroupsController = __decorate([
    common_1.Controller('users-groups'),
    __metadata("design:paramtypes", [users_groups_service_1.UsersGroupsService])
], UsersGroupsController);
exports.UsersGroupsController = UsersGroupsController;
//# sourceMappingURL=users-groups.controller.js.map