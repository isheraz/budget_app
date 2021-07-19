import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('/register')
    async register(
        @Body(SETTINGS.VALIDATION_PIPE)
        request: CreateUserDto,
        ): Promise<User> {
            try{
                return await this.userService.register(request);
            }
            catch(err){
                return err;
            }
    }
}
