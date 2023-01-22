import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerConfig } from './config/swagger.config';
import { ValidationConfig } from './config/validation.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ValidationConfig.setup(app);
  SwaggerConfig.setup(app);
  await app.listen(3000);
}
bootstrap();
