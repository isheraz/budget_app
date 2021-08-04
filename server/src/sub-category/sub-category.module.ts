import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { SubCategories } from '../database/entities/sub_categories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategories])],
  providers: [SubCategoryService],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}
