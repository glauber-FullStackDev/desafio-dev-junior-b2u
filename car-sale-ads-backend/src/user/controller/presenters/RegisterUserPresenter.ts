import { ApiProperty } from '@nestjs/swagger';
import { UserData } from 'src/user/services/registerUser/registerUser.service';

export class RegisterUserPresenter {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'Joe Jhon' })
  name: string;

  @ApiProperty({ example: 'joejhon@email.com' })
  email: string;

  @ApiProperty({ example: '(99) 9999-999' })
  phoneNumber: string;

  @ApiProperty({ example: '2023-01-01T12:00:00.000Z' })
  createdAt: string;

  constructor(userData: UserData) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.phoneNumber = userData.phoneNumber;
    this.createdAt = userData.createdAt.toISOString();
  }
}
