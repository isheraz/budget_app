import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
export declare class UserService {
    constructor();
    register(request: CreateUserDto): Promise<User>;
    findOne(email: string): any;
}
