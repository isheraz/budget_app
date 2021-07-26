import { GroupService } from './group.service';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    save(name: string, users_id: number): Promise<{}>;
    getAll(): Promise<import("../database/entities/groups.entity").Groups[]>;
    get(id: number): Promise<import("../database/entities/groups.entity").Groups>;
    update(id: number, name: string, users_id: number): Promise<{}>;
    remove(id: number): Promise<{}>;
}
