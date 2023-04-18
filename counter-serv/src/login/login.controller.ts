import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from 'src/entities/login.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.loginService.getAll();
  }

  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
