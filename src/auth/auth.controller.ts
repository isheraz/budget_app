import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(
        @Body(SETTINGS.VALIDATION_PIPE) 
        request: LoginDto
        ){
        try {
            return await this.authService.login(request);
        }
        catch(err){
            return err;
        }
    }

    @Post('/register')
    async register(
        @Body(SETTINGS.VALIDATION_PIPE)
        request: CreateUserDto,
        ): Promise<User> {
            try{
                return await this.authService.register(request);
            }
            catch(err){
                return err;
            }
    }

}
