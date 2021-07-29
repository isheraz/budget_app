import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  save(@Body('name') name: string, @Body('type') type: string) {
    return this.categoryService.insert(name, type);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.categoryService.get(id);
  }

  @Patch(':id')
  update(
    @Param('id') expenseId: number,
    @Body('name') name: string,
    @Body('type') type: string
  ) {
    const resp = this.categoryService.update(expenseId, name, type);
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
