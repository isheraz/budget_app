import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private JwtService: JwtService){}

    async register(request: CreateUserDto): Promise<User>{
        
        const user = new User();

        user.name = request.name;
        user.email = request.email;    
        user.phone = request.phone;
        user.password = request.password;
        
        return await user.save();
    }

    async login(user: any) {
        const payload = { name: user.name, subject: user.id };

        return {
            access_token: this.JwtService.sign(payload)
        }
    }

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.userService.findOne(username);
        const isPasswordMatch = bcrypt.compare(password, user.password);

        if(user && isPasswordMatch){
            const {password, email, ...rest} = user;

            return rest;
        }

        return null;
    }


}
