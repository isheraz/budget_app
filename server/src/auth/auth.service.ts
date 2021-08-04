import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
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
            access_token: this.JwtService.sign(payload, {
                secret: process.env.JWT_SECRET
            })
        }
    }

    async validateUser(username: string, password: string): Promise<any>{
        try{
            const user = await this.userService.findOne(username);
            
            const isPasswordMatch = bcrypt.compare(password, user.password);

            if(isPasswordMatch){
                const {password, email, ...rest} = user;
    
                return rest;
            }
    
            return null;
        }
        catch(error){
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }


}
