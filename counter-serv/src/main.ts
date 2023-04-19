import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = await app.get(ConfigService);
  const apiPort = conf.get<number>('PORT') || 3001;
  await app.listen(apiPort, () => {
    console.log(`listen on http://localhost:${apiPort}`);
  });
}
bootstrap();
