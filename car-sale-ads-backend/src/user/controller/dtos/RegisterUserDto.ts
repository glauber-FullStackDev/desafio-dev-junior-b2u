import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsPhoneNumber,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @Length(3, 50)
  @ApiProperty({ example: 'Joe Jhon' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'joejhon@email.com' })
  email: string;

  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message:
      'password must have at least 8 characters one uppercase letter, one special character, one number',
  })
  @ApiProperty({ example: 'Password@123' })
  password: string;

  @IsPhoneNumber('BR')
  @ApiProperty({ example: '(99) 9999-9999' })
  phoneNumber: string;
}
