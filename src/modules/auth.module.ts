import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserEntity } from '../models/user.entity';
import { AuthResolver } from '../graphql/resolvers/auth/auth.resolver';
import { AuthService } from '../services/auth.service';
import { JwtStrategy } from '../core/auth/jwt.strategy';
import { JWT_SECRET } from '../config/config';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
