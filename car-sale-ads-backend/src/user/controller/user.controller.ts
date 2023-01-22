import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
} from '@nestjs/swagger';
import {
  BadRequestHttpErrorPresenter,
  ConflictHttpErrorPresenter,
  ServerErrorHttpErrorPresenter,
} from 'src/shared/httpUtils/ErrorPresenter';
import { RegisterUserService } from '../services/registerUser/registerUser.service';
import { RegisterUserDto } from './dtos/RegisterUserDto';
import { RegisterUserPresenter } from './presenters/RegisterUserPresenter';

@Controller('user')
@ApiInternalServerErrorResponse({ type: ServerErrorHttpErrorPresenter })
export class UserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @ApiResponse({ type: RegisterUserPresenter })
  @ApiBadRequestResponse({ type: BadRequestHttpErrorPresenter })
  @ApiConflictResponse({ type: ConflictHttpErrorPresenter })
  async registerUser(@Body() userDto: RegisterUserDto) {
    const registerUserResult = await this.registerUserService.execute(userDto);
    return new RegisterUserPresenter(registerUserResult);
  }
}
