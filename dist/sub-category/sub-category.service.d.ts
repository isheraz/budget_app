import { SubCategories } from 'src/database/entities/sub_categories.entity';
import { Repository } from 'typeorm';
export declare class SubCategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<SubCategories>);
    getAll(): Promise<SubCategories[]>;
    get(id: number): Promise<SubCategories>;
    insert(name: string, type: string, categories_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
    update(id: number, name: string, type: string, categories_id: number): Promise<{}>;
}
