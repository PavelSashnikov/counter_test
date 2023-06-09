import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './DB/config';
import { LoginModule } from './resourses/login/login.module';
import { CounterModule } from './resourses/counter/counter.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => DbConfig(configService),
      inject: [ConfigService],
    }),
    LoginModule,
    CounterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
