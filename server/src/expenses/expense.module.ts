import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { Expenses } from 'src/database/entities/expenses.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Expenses])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
