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
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestHttpErrorPresenter,
  ServerErrorHttpErrorPresenter,
  UnauthorizedHttpErrorPresenter,
} from 'src/shared/httpUtils/ErrorPresenter';
import { CreateCarAdService } from '../services/createCarAd.service';

import { ListCarAdsService } from '../services/listCarAds.service';
import { CreateCarAdDto } from './dtos/CreateCarAdDto';
import { CarAdPresenter } from './presenters/CarAdPresenter';

@Controller('ads')
@ApiTags('Car Adds')
@ApiInternalServerErrorResponse({ type: ServerErrorHttpErrorPresenter })
export class CarAdController {
  constructor(
    private readonly createCarAdService: CreateCarAdService,
    private readonly listCarAdsService: ListCarAdsService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CarAdPresenter })
  @ApiBadRequestResponse({ type: BadRequestHttpErrorPresenter })
  @ApiUnauthorizedResponse({ type: UnauthorizedHttpErrorPresenter })
  async create(@Request() req, @Body() createCarAdDto: CreateCarAdDto) {
    const createCarAdResult = await this.createCarAdService.execute({
      ownerId: req.user.id,
      ...createCarAdDto,
    });

    return new CarAdPresenter(createCarAdResult);
  }

  @Get()
  @ApiOkResponse({ type: CarAdPresenter, isArray: true })
  async list() {
    const listCarAdsResult = await this.listCarAdsService.execute();
    return listCarAdsResult.map((carrAdd) => new CarAdPresenter(carrAdd));
  }
}
