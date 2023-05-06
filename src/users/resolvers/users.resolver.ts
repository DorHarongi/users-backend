import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/input/create-user.input';
import { UpdateUserInput } from '../dto/input/update-user.input';
import { UserDTO } from '../dto/entities/user.dto';
import { UserRepositoryService } from '../services/user-repository/user-repository.service';

@Resolver(() => UserDTO)
export class UsersResolver {
  constructor(private userRepositoryService: UserRepositoryService) {}

  @Query(() => [UserDTO])
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.userRepositoryService.getAllUsers();
  }

  @Mutation(() => UserDTO)
  async updateUser(@Args('updateUserData') updateUserData: UpdateUserInput) {
    return await this.userRepositoryService.updateUser(updateUserData);
  }

  @Mutation(() => UserDTO)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return await this.userRepositoryService.createUser(createUserData);
  }
}
