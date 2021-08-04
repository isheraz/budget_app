import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from '../database/entities/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>
  ) {}

  getAll(): Promise<Categories[]> {
    return this.categoryRepository.find();
  }

  get(id: number): Promise<Categories> {
    return this.categoryRepository.findOne(id);
  }

  async insert(name: string, type: string): Promise<{}> {
    const obj = this.categoryRepository.create();
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

  async update(id: number, name: string, type: string): Promise<{}> {
    const resp = await this.categoryRepository.update(
      { id: id },
      {
        name: name,
        type: type,
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
