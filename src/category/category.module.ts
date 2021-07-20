import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from 'src/database/entities/categories.entity';

@Module({
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [CategoryController],
})
export class CategoryModule {}
