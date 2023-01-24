import { CarAd } from '../CarAd';

export interface CarAdRepository {
  save(CarAd: CarAd): Promise<CarAd>;
  list(): Promise<CarAd[]>;
}

export const CarAdRepository = Symbol('CarAdRepository');
