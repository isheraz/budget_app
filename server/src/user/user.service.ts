import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}

      async findOne(email: string): Promise<User> {
        return await this.userRepository.findOneOrFail({where: {email: email}});
      }
}
