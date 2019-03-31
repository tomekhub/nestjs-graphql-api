import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
