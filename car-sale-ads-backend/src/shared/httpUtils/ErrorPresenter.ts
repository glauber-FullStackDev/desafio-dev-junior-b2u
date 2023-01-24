import { ApiProperty } from '@nestjs/swagger';

export class BadRequestHttpErrorPresenter {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({
    isArray: true,
    example: ['Invalid request body properties'],
  })
  message: string[];
}

export class UnauthorizedHttpErrorPresenter {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({
    example: 'Unauthorized',
  })
  message: string;
}

export class ConflictHttpErrorPresenter {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({
    example: 'entity already exists',
  })
  message: string;
}

export class ServerErrorHttpErrorPresenter {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({
    example: 'internal server error',
  })
  message: string;
}
