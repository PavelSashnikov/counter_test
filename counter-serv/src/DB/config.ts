import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const DbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_LOGIN'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  synchronize: false,
  migrationsRun: true,
  migrations: [join(__dirname, `migrations/*{.ts,.js}`)],
  logging: true,
  autoLoadEntities: true,
  entities: [join(__dirname, `entities/*.entity.ts`)],
});
