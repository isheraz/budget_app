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
exports.UsersGroupsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_groups_entity_1 = require("../database/entities/users_groups.entity");
const typeorm_2 = require("typeorm");
let UsersGroupsService = class UsersGroupsService {
    constructor(userGroupRepository) {
        this.userGroupRepository = userGroupRepository;
    }
    getAll() {
        return this.userGroupRepository.find();
    }
    get(id) {
        return this.userGroupRepository.findOne(id);
    }
    async insert(name, groups_id, users_id) {
        const obj = this.userGroupRepository.create();
        obj.users_id = users_id;
        obj.name = name;
        obj.groups_id = groups_id;
        const resp = await this.userGroupRepository.save(obj);
        const response = {
            status: true,
            response: resp,
            message: 'Successfully added.',
        };
        return response;
    }
    async remove(id) {
        await this.userGroupRepository.delete(id);
        const response = { status: true, message: 'Successfully deleted.' };
        return response;
    }
    async update(id, name, groups_id, users_id) {
        const resp = await this.userGroupRepository.update({ id: id }, {
            name: name,
            groups_id: groups_id,
            users_id: users_id,
        });
        const response = {
            status: true,
            response: resp,
            message: 'Successfully updated.',
        };
        return response;
    }
};
UsersGroupsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_groups_entity_1.UsersGroups)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersGroupsService);
exports.UsersGroupsService = UsersGroupsService;
//# sourceMappingURL=users-groups.service.js.map