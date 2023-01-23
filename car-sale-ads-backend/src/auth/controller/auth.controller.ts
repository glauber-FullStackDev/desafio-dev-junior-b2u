import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ServerErrorHttpErrorPresenter,
  UnauthorizedHttpErrorPresenter,
} from 'src/shared/httpUtils/ErrorPresenter';
import { LocalAuthGuard } from '../guards/localAuth.guard';
import { LoginService } from '../services/login.service';
import { LoginDto } from './dtos/LoginDto';
import { LoginPresenter } from './presenters/LoginPresenter';

@Controller('auth')
@ApiTags('Auth')
@ApiInternalServerErrorResponse({ type: ServerErrorHttpErrorPresenter })
export class AuthController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiCreatedResponse({ type: LoginPresenter })
  @ApiUnauthorizedResponse({ type: UnauthorizedHttpErrorPresenter })
  @ApiBody({ type: LoginDto })
  async login(@Request() req) {
    const loginResult = await this.loginService.execute(req.user);
    return loginResult;
  }
}
