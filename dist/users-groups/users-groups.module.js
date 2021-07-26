"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_groups_entity_1 = require("../database/entities/users_groups.entity");
const users_groups_controller_1 = require("./users-groups.controller");
const users_groups_service_1 = require("./users-groups.service");
let UsersGroupsModule = class UsersGroupsModule {
};
UsersGroupsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_groups_entity_1.UsersGroups])],
        providers: [users_groups_service_1.UsersGroupsService],
        controllers: [users_groups_controller_1.UsersGroupsController],
    })
], UsersGroupsModule);
exports.UsersGroupsModule = UsersGroupsModule;
//# sourceMappingURL=users-groups.module.js.map