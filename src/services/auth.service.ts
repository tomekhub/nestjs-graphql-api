import { JwtService } from '@nestjs/jwt';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from '../core/auth/jwt-payload.interface';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { SignInInput, SignUpInput, Token } from '../models/graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInInput: SignInInput): Promise<Token> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({
        email: signInInput.email,
      })
      .addSelect('user.password')
      .getOne();
    if (user) {
      const payload: JwtPayload = { email: user.email };
      if (await bcrypt.compare(signInInput.password, user.password)) {
        return { token: this.jwtService.sign(payload) };
      } else {
        throw new HttpException('Wrong password', HttpStatus.FORBIDDEN);
      }
    } else {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
  }

  async signUp(signUpInput: SignUpInput) {
    try {
      const { password, email, username } = signUpInput;
      const user = new UserEntity();
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.email = email;
      user.username = username;
      const createdUser = await this.userRepository.save(user);
      createdUser.password = undefined;
      return createdUser;
    } catch (err) {
      throw new HttpException(
        'User with this username or email already exists',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userRepository.findOne(payload.email);
  }
}
