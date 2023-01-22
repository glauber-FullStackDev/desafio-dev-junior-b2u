import { INestApplication, ValidationPipe } from '@nestjs/common';

export class ValidationConfig {
  static setup(app: INestApplication) {
    app.useGlobalPipes(new ValidationPipe());
  }
}
