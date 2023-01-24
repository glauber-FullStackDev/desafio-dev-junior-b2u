import {IBrands} from "./IBrands";
import { IUsers } from "./IUsers";

export interface ICars {
  id: string;
  model: string;
  year: string;
  description: string;
  brandId: string;
  userId: string;
  brands: IBrands;
  users: IUsers
}

export type TOnlyCar = Omit<ICars, 'brands' | 'users'>