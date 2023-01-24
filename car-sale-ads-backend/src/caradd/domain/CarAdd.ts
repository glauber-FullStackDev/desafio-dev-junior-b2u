import { randomUUID } from 'crypto';
import { CarItems } from './carItems';

export class CarAdd {
  private constructor(
    readonly id: string,
    readonly ownerId: string,
    readonly brand: string,
    readonly model: string,
    readonly manufactureYear: number,
    readonly modelYear: number,
    readonly fuel: string,
    readonly km: number,
    readonly price: number,
    readonly items: CarItems,
  ) {}

  static new(
    ownerId: string,
    brand: string,
    model: string,
    manufactureYear: number,
    modelYear: number,
    fuel: string,
    km: number,
    price: number,
    items: CarItems,
  ) {
    const id = randomUUID();
    return new CarAdd(
      id,
      ownerId,
      brand,
      model,
      manufactureYear,
      modelYear,
      fuel,
      km,
      price,
      items,
    );
  }

  static from(
    id: string,
    ownerId: string,
    brand: string,
    model: string,
    manufactureYear: number,
    modelYear: number,
    fuel: string,
    km: number,
    price: number,
    items: CarItems,
  ) {
    return new CarAdd(
      id,
      ownerId,
      brand,
      model,
      manufactureYear,
      modelYear,
      fuel,
      km,
      price,
      items,
    );
  }
}
