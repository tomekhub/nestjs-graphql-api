import { UserService } from '../services/user.service';
import { LoginInput, RegistrationInput } from 'src/graphql';
export declare class UserResolver {
  private readonly userService;
  constructor(userService: UserService);
  login(loginInput: LoginInput): Promise<import('../model/user.entity').User[]>;
  register(
    registrationInput: RegistrationInput,
  ): Promise<import('typeorm').InsertResult>;
}
