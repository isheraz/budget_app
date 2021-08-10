import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersGroupsService } from './users-groups.service';

@Controller('users-groups')
export class UsersGroupsController {
  constructor(private readonly userGroupService: UsersGroupsService) {}

  @Post()
  save(
    @Body('name') name: string,
    @Body('groups_id') groups_id: number,
    @Body('users_id') users_id: number
  ) {
    return this.userGroupService.insert(name, groups_id, users_id);
  }

  @Get()
  getAll() {
    return this.userGroupService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.userGroupService.get(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('groups_id') groups_id: number,
    @Body('users_id') users_id: number
  ) {
    const resp = this.userGroupService.update(id, name, groups_id, users_id);
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userGroupService.remove(id);
  }
}
