import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groups } from 'src/database/entities/groups.entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Groups])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
