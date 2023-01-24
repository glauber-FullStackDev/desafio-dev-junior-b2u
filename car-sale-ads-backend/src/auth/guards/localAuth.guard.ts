import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvalidEmailOrPasswordError } from 'src/shared/errors/authErrors/InvalidEmailOrPasswordError';
import { ValidateUserService } from '../services/validateUser.service';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private readonly validateUserService: ValidateUserService) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;

    if (!email || !password) {
      throw new InvalidEmailOrPasswordError();
    }

    const validatedUser = await this.validateUserService.execute(
      email,
      password,
    );
    request.user = validatedUser;
    return true;
  }
}
