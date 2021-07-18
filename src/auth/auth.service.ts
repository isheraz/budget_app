import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private JwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.userService.findOne(username);

        if(user && user.password === password){
            const {password, email, ...rest} = user;

            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user.id };

        return {
            access_token: this.JwtService.sign(payload)
        }
    }
}
