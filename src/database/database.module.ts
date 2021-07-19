import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormconfig from '../ormcofig';

@Module({imports: [TypeOrmModule.forRoot(ormconfig)]})
export class DatabaseModule {}
