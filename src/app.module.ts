import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ExpenseModule } from './expenses/expense.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, ExpenseModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
