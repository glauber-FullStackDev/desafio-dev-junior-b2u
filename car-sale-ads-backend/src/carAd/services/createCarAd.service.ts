import { Inject, Injectable } from '@nestjs/common';
import { CarAd } from '../domain/CarAd';
import { CarItems } from '../domain/CarItems';
import { CarAdRepository } from '../domain/repository/CarAdRepository';

@Injectable()
export class CreateCarAdService {
  constructor(
    @Inject(CarAdRepository)
    private readonly carAdRepository: CarAdRepository,
  ) {}

  async execute(input: CreateCarAdInput): Promise<CarAd> {
    const carItems = CarItems.from(input.items);
    const carAd = CarAd.new(
      input.ownerId,
      input.brand,
      input.model,
      input.manufactureYear,
      input.modelYear,
      input.fuel,
      input.km,
      input.price,
      carItems,
    );

    await this.carAdRepository.save(carAd);
    return carAd;
  }
}

type CreateCarAdInput = {
  ownerId: string;
  brand: string;
  model: string;
  manufactureYear: number;
  modelYear: number;
  fuel: string;
  km: number;
  price: number;
  items: {
    eletricWindow?: boolean;
    hidraulicSteenring?: boolean;
    eletricicSteenring?: boolean;
    automaticGearBox?: boolean;
    airConditioning?: boolean;
    airbag?: boolean;
    alarm?: boolean;
    eletricLock?: boolean;
  };
};
