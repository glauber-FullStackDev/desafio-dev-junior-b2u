import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Car sale ads')
      .setDescription('The car sale ads API description')
      .setVersion('1.0')
      .setContact('Jirlan Souza', '', 'jirlansouza08@gmail.com')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);
  }
}
