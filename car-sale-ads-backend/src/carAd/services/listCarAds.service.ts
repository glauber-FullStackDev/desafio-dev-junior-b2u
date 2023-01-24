import { Inject } from '@nestjs/common';
import { CarAdRepository } from '../domain/repository/CarAdRepository';

export class ListCarAdsService {
  constructor(
    @Inject(CarAdRepository)
    private readonly carAdRepository: CarAdRepository,
  ) {}

  async execute() {
    const CarAdsList = await this.carAdRepository.list();
    return CarAdsList;
  }
}
