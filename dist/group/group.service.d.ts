import { Groups } from 'src/database/entities/groups.entity';
import { Repository } from 'typeorm';
export declare class GroupService {
    private groupRepository;
    constructor(groupRepository: Repository<Groups>);
    getAll(): Promise<Groups[]>;
    get(id: number): Promise<Groups>;
    insert(name: string, users_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
    update(id: number, name: string, users_id: number): Promise<{}>;
}
