import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from '../../../services/user.service';
import { GqlAuthGuard } from '../../../core/auth/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver('User')
export class UserResolver {
  constructor(private readonly userSerivce: UserService) {}
  @Query()
  async getUsers() {
    return await this.userSerivce.getUsers();
  }
}
