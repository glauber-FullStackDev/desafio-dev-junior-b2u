import { Car } from "../models/Car";
import { ICarRepository } from "./ICarRepository";

class CarRepository implements ICarRepository {
  private cars: Car[] = [];

  private static INSTANCE: CarRepository;

  constructor() {
    this.cars = [];
  }

  public static getInstance(): CarRepository {
    if (!CarRepository.INSTANCE) {
      CarRepository.INSTANCE = new CarRepository();
    }

    return CarRepository.INSTANCE;
  }

  list(): Car[] {

    return this.cars

  }

  create(Data: Car): Car {

    const newCar = new Car();

    Object.assign(newCar, Data);

    this.cars.push(newCar);

    return newCar;
  }

  edit({
    id,
    nameCar,
    description,
    brandCar,
    email,
    phone,
    owner,
    year,

  }: Car): Car {

    const findIndex = this.cars.findIndex(value => value.id === id);

    const newCar = {
      id,
      nameCar,
      description,
      brandCar,
      email,
      phone,
      owner,
      year,
    }

    this.cars[findIndex] = newCar;

    return newCar;

  }

  find(id: string): Car {

    const car = this.cars.find(value => value.id === id);

    return car;

  }

  delete(id: string): void {

    const cars = this.cars.filter(value => value.id !== id);

    this.cars = cars;

    return;
  }


}

export { CarRepository };
