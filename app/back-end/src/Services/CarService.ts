import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import { ICarODM } from '../Models/CarODM';

class CarService {
  constructor(
    private carODM: ICarODM,
  ) {}

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.carODM.createCar(car);
    return this.createCarDomain(newCar);
  }

  public async getCars() {
    const cars = await this.carODM.getCars();
    const newCars = cars.map((car) => {
      const newCar = {
        id: car.id,
        name: car.name,
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color,
        image: car.image,
        price: car.price,
        description: car.description,
        published: car.published,
        userId: car.userId,
        salesman: car.salesman,
        email: car.email,
        phoneNumber: car.phoneNumber,
      }
      return newCar;
    })
    return newCars;
  }

  public async getCarById(id: string) {
    const car = await this.carODM.getCarById(id);
    const newCar = {
      id: car?.id,
      name: car?.name,
      brand: car?.brand,
      model: car?.model,
      year: car?.year,
      color: car?.color,
      image: car?.image,
      price: car?.price,
      description: car?.description,
      published: car?.published,
      userId: car?.userId,
      salesman: car?.salesman,
      email: car?.email,
      phoneNumber: car?.phoneNumber,
    }
    return newCar;
  }

  public async getUserCars(userId: string) {
    const userCars = await this.carODM.getUserCars(userId);
    const cars = userCars.map((car) => {
      const newCar = {
        id: car.id,
        name: car.name,
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color,
        image: car.image,
        price: car.price,
        description: car.description,
        published: car.published,
        userId: car.userId,
        salesman: car.salesman,
        email: car.email,
        phoneNumber: car.phoneNumber,
      }
      return newCar;
    })
    return cars;
  }

  public async getCarsBySearch(search: string) {
    const searchItem = search[0].toUpperCase() + search.substring(1);
    const cars = await this.carODM.getCarsBySearch(searchItem);
    if (!cars) {
      const searchItem2 = search[0].toUpperCase() + search[1].toUpperCase() + search[2].toUpperCase() + search.substring(3);
      const cars2 = await this.carODM.getCarsBySearch(searchItem2);
      return cars2;
    }
    return cars;
  }

  public async updateCar(id: string, newCar: ICar) {
    const update = await this.carODM.updateCar(id, newCar);
    return update;
  }

  public async deleteCar(id: string) {
    const deleted = await this.carODM.deleteCar(id);
    return deleted;
  }
}

export default CarService;
