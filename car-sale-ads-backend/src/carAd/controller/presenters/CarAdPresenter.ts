import { ApiProperty } from '@nestjs/swagger';
import { CarAd } from 'src/carAd/domain/CarAd';
import { currencyFormatter } from 'src/shared/formatters/currencyFormmater';

class CarItemsPresenter {
  @ApiProperty({ example: true })
  eletricWindow: boolean;

  @ApiProperty({ example: true })
  hidraulicSteenring: boolean;

  @ApiProperty({ example: false })
  eletricicSteenring: boolean;

  @ApiProperty({ example: false })
  automaticGearBox: boolean;

  @ApiProperty({ example: true })
  airConditioning: boolean;

  @ApiProperty({ example: true })
  airbag: boolean;

  @ApiProperty({ example: true })
  alarm: boolean;

  @ApiProperty({ example: true })
  eletricLock: boolean;
}

export class CarAdPresenter {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: '420c3803-f147-4690-a2fa-5405cf094430' })
  ownerId: string;

  @ApiProperty({ example: 'Chevrollet' })
  brand: string;

  @ApiProperty({ example: 'Prisma 1.4 flex' })
  model: string;

  @ApiProperty({ example: 2020 })
  manufactureYear: number;

  @ApiProperty({ example: 2021 })
  modelYear: number;

  @ApiProperty({ example: 'flex' })
  fuel: string;

  @ApiProperty({ example: 42000 })
  km: number;

  @ApiProperty({ example: 'R$ 52.800,00' })
  price: string;

  @ApiProperty({ type: CarItemsPresenter })
  items: CarItemsPresenter;

  constructor(CarAd: CarAd) {
    this.id = CarAd.id;
    this.ownerId = CarAd.ownerId;
    this.brand = CarAd.brand;
    this.model = CarAd.model;
    this.manufactureYear = CarAd.manufactureYear;
    this.modelYear = CarAd.modelYear;
    this.fuel = CarAd.fuel;
    this.km = CarAd.km;
    this.price = currencyFormatter(CarAd.price);
    this.items = CarAd.items;
  }
}
