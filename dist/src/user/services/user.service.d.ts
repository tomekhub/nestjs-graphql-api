import { LoginInput, RegistrationInput } from 'src/graphql';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
export declare class UserService {
  private readonly userRepository;
  constructor(userRepository: Repository<User>);
  login(loginInput: LoginInput): Promise<User[]>;
  register(
    registrationInput: RegistrationInput,
  ): Promise<import('typeorm').InsertResult>;
}
