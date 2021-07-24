import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: LoginDto): Promise<any>;
    register(request: CreateUserDto): Promise<User>;
}
