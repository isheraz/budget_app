import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategories } from '../database/entities/sub_categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategories)
    private categoryRepository: Repository<SubCategories>
  ) {}

  getAll(): Promise<SubCategories[]> {
    return this.categoryRepository.find();
  }

  get(id: number): Promise<SubCategories> {
    return this.categoryRepository.findOne(id);
  }

  async insert(name: string, type: string, categories_id: number): Promise<{}> {
    const obj = this.categoryRepository.create();
    obj.categories_id = categories_id;
    obj.name = name;
    obj.type = type;
    const resp = await this.categoryRepository.save(obj);
    const response = {
      status: true,
      response: resp,
      message: 'Successfully added.',
    };
    return response;
  }

  async remove(id: number): Promise<{}> {
    await this.categoryRepository.delete(id);
    const response = { status: true, message: 'Successfully deleted.' };
    return response;
  }

  async update(
    id: number,
    name: string,
    type: string,
    categories_id: number
  ): Promise<{}> {
    const resp = await this.categoryRepository.update(
      { id: id },
      {
        name: name,
        type: type,
        categories_id: categories_id,
      }
    );
    const response = {
      status: true,
      response: resp,
      message: 'Successfully updated.',
    };
    return response;
  }
}
