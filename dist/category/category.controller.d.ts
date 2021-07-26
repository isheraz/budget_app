import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    save(name: string, type: string): Promise<{}>;
    getAll(): Promise<import("../database/entities/categories.entity").Categories[]>;
    get(id: number): Promise<import("../database/entities/categories.entity").Categories>;
    update(expenseId: number, name: string, type: string): Promise<{}>;
    remove(id: number): Promise<{}>;
}
