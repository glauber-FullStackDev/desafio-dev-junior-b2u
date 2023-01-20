import { IOwnerCreate, IOwnerUpdate } from "./owner.interface";

interface ICarCreate {
  name: string;
  brand: string;
  price: number;
  year: number;
  description?: string;
  owner: IOwnerCreate;
}

interface ICarResponse extends ICarCreate {
  id: string;
}

interface ICarUpdate {
  name?: string;
  brand?: string;
  price?: number;
  year?: number;
  description?: string;
  owner?: IOwnerUpdate;
}

export { ICarCreate, ICarResponse, ICarUpdate };
