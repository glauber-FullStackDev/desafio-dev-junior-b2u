import { ApiProperty } from '@nestjs/swagger';

export class BadRequestHttpErrorPresenter {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({
    isArray: true,
    example: ['Invalid request body ptoperties'],
  })
  message: string[];

  @ApiProperty({ example: 'Bad request' })
  error: string;
}

export class ConflictHttpErrorPresenter {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({
    isArray: true,
    example: ['entity already exists'],
  })
  message: string[];

  @ApiProperty({ example: 'Conflict' })
  error: string;
}

export class ServerErrorHttpErrorPresenter {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({
    example: 'internal server error',
  })
  message: string;

  @ApiProperty({ example: 'Internal server error' })
  error: string;
}
