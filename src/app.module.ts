import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ExpenseModule } from './expenses/expense.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { GroupModule } from './group/group.module';
import { UsersGroupsModule } from './users-groups/users-groups.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ExpenseModule,
    CategoryModule,
    SubCategoryModule,
    GroupModule,
    UsersGroupsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
