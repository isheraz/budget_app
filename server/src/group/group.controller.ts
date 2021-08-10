import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  save(@Body('name') name: string, @Body('users_id') users_id: number) {
    return this.groupService.insert(name, users_id);
  }

  @Get()
  getAll() {
    return this.groupService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.groupService.get(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('users_id') users_id: number
  ) {
    const resp = this.groupService.update(id, name, users_id);
    return resp;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.groupService.remove(id);
  }
}
