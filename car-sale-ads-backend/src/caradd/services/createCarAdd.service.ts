import { Inject, Injectable } from '@nestjs/common';
import { CarAdd } from '../domain/CarAdd';
import { CarItems } from '../domain/carItems';
import { CarAddRepository } from '../domain/repository/CarAddRepository';

@Injectable()
export class CreateCarAddService {
  constructor(
    @Inject(CarAddRepository)
    private readonly carAddRepository: CarAddRepository,
  ) {}

  async execute(input: CreateCarAddInput): Promise<CarAdd> {
    const carItems = CarItems.from(input.items);
    const carAdd = CarAdd.new(
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

    await this.carAddRepository.save(carAdd);
    return carAdd;
  }
}

type CreateCarAddInput = {
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
