import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidatedUserDto } from './dtos/ValidatedUserDto';

@Injectable()
export class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async execute(user: ValidatedUserDto): Promise<AuthenticationDto> {
    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload);

    return { acess_token: token };
  }
}

type AuthenticationDto = {
  acess_token: string;
};
