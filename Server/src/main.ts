import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Desafio dev junior')
    .setDescription('Aplicação CRUD para anúncio de veículos')
    .setVersion('1.0.0')
    .addTag('Vehicles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3333);
}
bootstrap();
