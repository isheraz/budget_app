import { UsersGroupsService } from './users-groups.service';
export declare class UsersGroupsController {
    private readonly userGroupService;
    constructor(userGroupService: UsersGroupsService);
    save(name: string, groups_id: number, users_id: number): Promise<{}>;
    getAll(): Promise<import("../database/entities/users_groups.entity").UsersGroups[]>;
    get(id: number): Promise<import("../database/entities/users_groups.entity").UsersGroups>;
    update(id: number, name: string, groups_id: number, users_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
}
