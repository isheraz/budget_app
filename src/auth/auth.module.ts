import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
    secret: 'secret-key-for-budget-app',
    signOptions: { expiresIn: '60s' },
  })],
  
  providers: [
    AuthService,
    LocalStrategy
  ],
  
  exports: [
    AuthService
  ],
  
  controllers: [
    AuthController
  ],
})

export class AuthModule {}
