import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private JwtService;
    constructor(userService: UserService, JwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
