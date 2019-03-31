import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '../../../services/auth.service';
import { SignInInput, SignUpInput } from '../../../models/graphql';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation()
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    return await this.authService.signIn(signInInput);
  }
  @Mutation()
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return await this.authService.signUp(signUpInput);
  }
}
