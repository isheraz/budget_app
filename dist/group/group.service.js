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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const groups_entity_1 = require("../database/entities/groups.entity");
const typeorm_2 = require("typeorm");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    getAll() {
        return this.groupRepository.find();
    }
    get(id) {
        return this.groupRepository.findOne(id);
    }
    async insert(name, users_id) {
        const obj = this.groupRepository.create();
        obj.users_id = users_id;
        obj.name = name;
        const resp = await this.groupRepository.save(obj);
        const response = {
            status: true,
            response: resp,
            message: 'Successfully added.',
        };
        return response;
    }
    async remove(id) {
        await this.groupRepository.delete(id);
        const response = { status: true, message: 'Successfully deleted.' };
        return response;
    }
    async update(id, name, users_id) {
        const resp = await this.groupRepository.update({ id: id }, {
            name: name,
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
GroupService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(groups_entity_1.Groups)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map