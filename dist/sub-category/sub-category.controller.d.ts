import { SubCategoryService } from './sub-category.service';
export declare class SubCategoryController {
    private readonly subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    save(name: string, type: string, categories_id: number): Promise<{}>;
    getAll(): Promise<import("../database/entities/sub_categories.entity").SubCategories[]>;
    get(id: number): Promise<import("../database/entities/sub_categories.entity").SubCategories>;
    update(id: number, name: string, type: string, categories_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
}
