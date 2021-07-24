import { Repository } from "typeorm";
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userRepository;
    private JwtService;
    constructor(userRepository: Repository<User>, JwtService: JwtService);
    findOne(email: string): any;
}
