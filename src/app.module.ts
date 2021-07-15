import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
=======
import config from './ormcofig';


@Module({
  imports: [TypeOrmModule.forRoot(config)],
>>>>>>> expenses-modulee-for-budget-app
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
