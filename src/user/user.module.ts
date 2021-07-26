import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
    secret: 'SECRET',
    signOptions: { expiresIn: '60s' },
  })],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
