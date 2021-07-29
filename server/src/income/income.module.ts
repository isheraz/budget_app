import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from 'src/database/entities/expenses.entity';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
@Module({
  imports: [TypeOrmModule.forFeature([Expenses])],
  controllers: [IncomeController],
  providers: [IncomeService],
})
export class IncomeModule {}
