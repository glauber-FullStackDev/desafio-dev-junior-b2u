import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestHttpErrorPresenter,
  ConflictHttpErrorPresenter,
  ServerErrorHttpErrorPresenter,
  UnauthorizedHttpErrorPresenter,
} from 'src/shared/httpUtils/ErrorPresenter';
import { RegisterUserService } from '../services/registerUser/registerUser.service';
import { RegisterUserDto } from './dtos/RegisterUserDto';
import { RegisterUserPresenter } from './presenters/RegisterUserPresenter';

@Controller('users')
@ApiTags('Users')
@ApiInternalServerErrorResponse({ type: ServerErrorHttpErrorPresenter })
export class UserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @ApiCreatedResponse({ type: RegisterUserPresenter })
  @ApiBadRequestResponse({ type: BadRequestHttpErrorPresenter })
  @ApiConflictResponse({ type: ConflictHttpErrorPresenter })
  async registerUser(@Body() userDto: RegisterUserDto) {
    const registerUserResult = await this.registerUserService.execute(userDto);
    return new RegisterUserPresenter(registerUserResult);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedHttpErrorPresenter })
  async profile(@Request() req) {
    return req.user;
  }
}
