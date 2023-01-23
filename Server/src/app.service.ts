import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Server is running! Please check http://localhost:3333/api for Swagger docs...';
  }
}
