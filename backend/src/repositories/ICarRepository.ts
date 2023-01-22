import { Car } from "../models/Car"

interface ICarRepository {
  list(): Car[] | undefined;
  create(Data: Car): Car;
  edit(data: Car) : Car;
  delete(id: string): void;
  find(id: string): Car;
}

export { ICarRepository };
