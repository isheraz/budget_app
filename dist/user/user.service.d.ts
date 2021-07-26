import { Repository } from "typeorm";
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User | undefined>;
}
