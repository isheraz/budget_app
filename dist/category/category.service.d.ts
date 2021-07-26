import { Categories } from 'src/database/entities/categories.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Categories>);
    getAll(): Promise<Categories[]>;
    get(id: number): Promise<Categories>;
    insert(name: string, type: string): Promise<{}>;
    remove(id: number): Promise<{}>;
    update(id: number, name: string, type: string): Promise<{}>;
}
