import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, Length } from 'class-validator';

export class RegisterUserDto {
  @Length(3, 50)
  @ApiProperty({ example: 'Joe Jhon' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'joejhon@email.com' })
  email: string;

  @IsPhoneNumber('BR')
  @ApiProperty({ example: '(99) 9999-9999' })
  phoneNumber: string;
}
