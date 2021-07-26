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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sub_categories_entity_1 = require("../database/entities/sub_categories.entity");
const typeorm_2 = require("typeorm");
let SubCategoryService = class SubCategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    getAll() {
        return this.categoryRepository.find();
    }
    get(id) {
        return this.categoryRepository.findOne(id);
    }
    async insert(name, type, categories_id) {
        const obj = this.categoryRepository.create();
        obj.categories_id = categories_id;
        obj.name = name;
        obj.type = type;
        const resp = await this.categoryRepository.save(obj);
        const response = {
            status: true,
            response: resp,
            message: 'Successfully added.',
        };
        return response;
    }
    async remove(id) {
        await this.categoryRepository.delete(id);
        const response = { status: true, message: 'Successfully deleted.' };
        return response;
    }
    async update(id, name, type, categories_id) {
        const resp = await this.categoryRepository.update({ id: id }, {
            name: name,
            type: type,
            categories_id: categories_id,
        });
        const response = {
            status: true,
            response: resp,
            message: 'Successfully updated.',
        };
        return response;
    }
};
SubCategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sub_categories_entity_1.SubCategories)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;
//# sourceMappingURL=sub-category.service.js.map