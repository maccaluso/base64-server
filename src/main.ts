import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/base64-server');
  app.enableCors({
    origin: ['http://localhost:3000', 'https://cooperative-press.eu'],
  });
  await app.listen(3101);
}
bootstrap();
