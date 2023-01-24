import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({ example: 'joejhon@email.com' })
  email: string;

  @ApiProperty({ example: 'Password@123' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message:
      'password must have at least 8 characters one uppercase letter, one special character, one number',
  })
  password: string;
}
