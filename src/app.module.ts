import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import config from './ormcofig';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ExpenseModule } from './expenses/expense.module';


@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, AuthModule, DatabaseModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
