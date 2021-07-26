import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from "typeorm";
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}

      async findOne(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({where: {email: email}});
      }
}
