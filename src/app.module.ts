import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ExpenseModule } from './expenses/expense.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [DatabaseModule, ExpenseModule, CategoryModule, SubCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
