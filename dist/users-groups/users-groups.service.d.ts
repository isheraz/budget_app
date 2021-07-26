import { UsersGroups } from 'src/database/entities/users_groups.entity';
import { Repository } from 'typeorm';
export declare class UsersGroupsService {
    private userGroupRepository;
    constructor(userGroupRepository: Repository<UsersGroups>);
    getAll(): Promise<UsersGroups[]>;
    get(id: number): Promise<UsersGroups>;
    insert(name: string, groups_id: number, users_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
    update(id: number, name: string, groups_id: number, users_id: number): Promise<{}>;
}
