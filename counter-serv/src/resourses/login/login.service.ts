import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/DB/entities/user.entity';
import { LoginDto, LoginResponseDto } from 'src/entities/login.dto';
import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  getAll = async () => {
    return await this.userRepo.find();
  };

  login = async (userData: LoginDto): Promise<LoginResponseDto> => {
    const user = await this.userRepo.findOne({
      where: { login: userData.login },
      select: ['login', 'password'],
    });

    if (!(await compare(userData.password, user?.password))) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.login, sub: user.id };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  };
}
