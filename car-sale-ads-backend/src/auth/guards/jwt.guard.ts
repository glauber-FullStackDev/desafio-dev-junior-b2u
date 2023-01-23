import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ValidateUserService } from '../services/validateUser.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly validateUserService: ValidateUserService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
