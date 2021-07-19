import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(){}

    async register(request: CreateUserDto): Promise<User>{
        
        const user = new User();

        user.name = request.name;
        
        user.email = request.email;
        
        user.phone = request.phone;
        
        user.password = request.password;
        
        return await user.save();
    }

    findOne(email: string): any {
        return {};
    }
}
