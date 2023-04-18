import { JwtModuleOptions } from '@nestjs/jwt';

export const jwt: JwtModuleOptions = {
  global: true,
  secret: 'mySyperSecretKey',
  signOptions: { expiresIn: '2h' },
};
