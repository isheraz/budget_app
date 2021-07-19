import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';

@Controller('sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  save(
    @Body('name') name: string,
    @Body('type') type: string,
    @Body('categories_id') categories_id: number
  ) {
    return this.subCategoryService.insert(name, type, categories_id);
  }

  @Get()
  getAll() {
    return this.subCategoryService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.subCategoryService.get(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('type') type: string,
    @Body('categories_id') categories_id: number
  ) {
    const resp = this.subCategoryService.update(id, name, type, categories_id);
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.subCategoryService.remove(id);
  }
}
