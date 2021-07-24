import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from "typeorm";
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private JwtService: JwtService
      ) {}

    findOne(email: string): any {
        return {};
    }
}
