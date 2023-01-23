import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InvalidEmailOrPasswordError } from 'src/shared/errors/authErrors/InvalidEmailOrPasswordError';
import { ValidateUserService } from '../services/validateUser.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUserService: ValidateUserService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.validateUserService.execute(email, password);
    if (!user) {
      throw new InvalidEmailOrPasswordError();
    }
    return user;
  }
}
