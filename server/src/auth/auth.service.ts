import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private JwtService: JwtService){}

    public async register(data: CreateUserDto): Promise<User>{
        const createdUser = await this.userService.create(data);
        createdUser.password = undefined;

        return createdUser;
    }

    public async login(request: any) {
        
        const user = await this.getAuthenticatedUser(request.email, request.password);
        const payload = { name: user.name, subject: user.id };

        return {
            access_token: this.JwtService.sign(payload, {
                secret: process.env.JWT_SECRET
            })
        }
    }

    public async getAuthenticatedUser(userEmail: string, plainPassword: string) {
        try {
          const user = await this.userService.getByEmail(userEmail);
          
          await this.verifyPassword(plainPassword, user.password);
          const {email, password, ...rest} = user;
          
          return rest;
        } 
        catch (error) {
          throw new HttpException(error.response, HttpStatus.BAD_REQUEST);
        }
      }
       
    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        
        if (!isPasswordMatching) {
          throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
      }

}
