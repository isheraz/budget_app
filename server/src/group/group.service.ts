import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Groups } from '../database/entities/groups.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Groups)
    private groupRepository: Repository<Groups>
  ) {}

  getAll(): Promise<Groups[]> {
    return this.groupRepository.find();
  }

  get(id: number): Promise<Groups> {
    return this.groupRepository.findOne(id);
  }

  async insert(name: string, users_id: number): Promise<{}> {
    const obj = this.groupRepository.create();
    obj.users_id = users_id;
    obj.name = name;
    const resp = await this.groupRepository.save(obj);
    const response = {
      status: true,
      response: resp,
      message: 'Successfully added.',
    };
    return response;
  }

  async remove(id: number): Promise<{}> {
    await this.groupRepository.delete(id);
    const response = { status: true, message: 'Successfully deleted.' };
    return response;
  }

  async update(id: number, name: string, users_id: number): Promise<{}> {
    const resp = await this.groupRepository.update(
      { id: id },
      {
        name: name,
        users_id: users_id,
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
