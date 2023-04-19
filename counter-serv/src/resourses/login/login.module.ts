import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/DB/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from 'src/entities/constants';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), JwtModule.register(jwt)],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
