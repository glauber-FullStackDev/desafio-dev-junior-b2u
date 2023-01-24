import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestHttpErrorPresenter,
  ServerErrorHttpErrorPresenter,
  UnauthorizedHttpErrorPresenter,
} from 'src/shared/httpUtils/ErrorPresenter';
import { CreateCarAddService } from '../services/createCarAdd.service';
import { CreateCarAddDto } from './dtos/CreateCarAddDto';
import { CarAddPresenter } from './presenters/CarAddPresenter';

@Controller('caradd')
@ApiTags('Car Add')
@ApiInternalServerErrorResponse({ type: ServerErrorHttpErrorPresenter })
export class CarAddController {
  constructor(private readonly createCarAddService: CreateCarAddService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CarAddPresenter })
  @ApiBadRequestResponse({ type: BadRequestHttpErrorPresenter })
  @ApiUnauthorizedResponse({ type: UnauthorizedHttpErrorPresenter })
  async create(@Request() req, @Body() createCarAddDto: CreateCarAddDto) {
    const createCarAddResult = await this.createCarAddService.execute({
      ownerId: req.user.id,
      ...createCarAddDto,
    });

    return new CarAddPresenter(createCarAddResult);
  }
}
