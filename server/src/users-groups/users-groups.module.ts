import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersGroups } from 'src/database/entities/users_groups.entity';
import { UsersGroupsController } from './users-groups.controller';
import { UsersGroupsService } from './users-groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersGroups])],
  providers: [UsersGroupsService],
  controllers: [UsersGroupsController],
})
export class UsersGroupsModule {}
