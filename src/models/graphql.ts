/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class SignInInput {
  email: string;
  password: string;
}

export class SignUpInput {
  username: string;
  email: string;
  password: string;
}

export class Auth {
  username: string;
  email: string;
}

export abstract class IMutation {
  abstract signIn(signInInput: SignUpInput): Auth | Promise<Auth>;

  abstract signUp(signUpInput: SignInInput): Token | Promise<Token>;
}

export abstract class IQuery {
  abstract temp__(): boolean | Promise<boolean>;
}

export class Token {
  token: string;
}

export class User {
  username: string;
  email: string;
  password: string;
  name?: string;
  surname?: string;
  avatar?: string;
}
