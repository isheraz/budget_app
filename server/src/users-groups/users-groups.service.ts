import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersGroups } from '../database/entities/users_groups.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersGroupsService {
  constructor(
    @InjectRepository(UsersGroups)
    private userGroupRepository: Repository<UsersGroups>
  ) {}

  getAll(): Promise<UsersGroups[]> {
    return this.userGroupRepository.find();
  }

  get(id: number): Promise<UsersGroups> {
    return this.userGroupRepository.findOne(id);
  }

  async insert(name: string, groups_id: number, users_id: number): Promise<{}> {
    const obj = this.userGroupRepository.create();
    obj.users_id = users_id;
    obj.name = name;
    obj.groups_id = groups_id;
    const resp = await this.userGroupRepository.save(obj);
    const response = {
      status: true,
      response: resp,
      message: 'Successfully added.',
    };
    return response;
  }

  async remove(id: number): Promise<{}> {
    await this.userGroupRepository.delete(id);
    const response = { status: true, message: 'Successfully deleted.' };
    return response;
  }

  async update(
    id: number,
    name: string,
    groups_id: number,
    users_id: number
  ): Promise<{}> {
    const resp = await this.userGroupRepository.update(
      { id: id },
      {
        name: name,
        groups_id: groups_id,
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
