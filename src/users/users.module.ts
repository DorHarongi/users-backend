import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersResolver } from './resolvers/users.resolver';
import { UserRepositoryService } from './services/user-repository/user-repository.service';

@Module({
  providers: [UsersResolver, UserRepositoryService],
  imports: [DatabaseModule]
})
export class UsersModule {}
