import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get('/login')
    login(): any {
        return 'login';
    }

    @Post('/register')
    register(@Body() request): any {
        return {data: request};
    }



}
