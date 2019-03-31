export declare class LoginInput {
  email: string;
  password: string;
}
export declare class RegistrationInput {
  username: string;
  email: string;
  password: string;
  name?: string;
  surname?: string;
}
export abstract class IMutation {
  abstract register(registrationInput: RegistrationInput): User | Promise<User>;
  abstract login(loginInput: LoginInput): string | Promise<string>;
}
export abstract class IQuery {
  abstract temp__(): boolean | Promise<boolean>;
}
export declare class User {
  username: string;
  email: string;
  password: string;
  name?: string;
  surname?: string;
  avatar?: string;
}
