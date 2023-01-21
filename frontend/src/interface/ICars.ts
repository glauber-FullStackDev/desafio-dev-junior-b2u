import { Types } from "mongoose";

export interface ICarsApi {
  index: number;
  id: Types.ObjectId;
  model: string;
  year: string;
  description: string;
  brands: any;
}

export interface ICars {
  index: number;
  carId: Types.ObjectId;
  carmModel: string;
  carYear: string;
  carDescription: string;
  carBrands: string;
}
