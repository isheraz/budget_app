import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { SETTINGS } from '../app.utils';
import { POSTGRES_ERROR_CODES } from '../database/postgres-error-codes';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from '../user/dto/login.dto';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(
        @Body(SETTINGS.VALIDATION_PIPE) 
        request: LoginDto
        ){
        try {
            return await this.authService.login(request);
        }
        catch(error){
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
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
            catch(error){
                if (error?.code === POSTGRES_ERROR_CODES.UNIQUE_VIOLATION) {
                    throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
                  }
                throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
