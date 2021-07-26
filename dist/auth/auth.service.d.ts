import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private JwtService;
    constructor(userService: UserService, JwtService: JwtService);
    register(request: CreateUserDto): Promise<User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    validateUser(username: string, password: string): Promise<any>;
}
