import { string } from 'joi';
import { Schema, Model, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export interface ICarODM {
  createCar(car: ICar): Promise<ICar>
  getCars(): Promise<ICar[]>
  getUserCars(userId: string): Promise<ICar[]>
  getCarsBySearch(search: string): Promise<ICar[] | null>
  getCarById(id: string): Promise<ICar | null>
  updateCar(id: string, newCar: ICar): Promise<ICar | null>
  deleteCar(id:string): Promise<object>
}

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      name: { type: String, required: true },
      brand: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      published: { type: Date, required: true },
      userId: { type: String, required: true },
      salesman: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
    }, {
      versionKey: false,
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create(car);
  }

  public async createCars(cars: ICar[]) {
    return this.model.insertMany(cars);
  }

  public async getCars(): Promise<ICar[]> {
    const cars = await this.model.find();
    return cars;
  }

  public async getUserCars(userId: string): Promise<ICar[]> {
    const userCars = await this.model.find({ userId });
    return userCars;
  }

  public async getCarsBySearch(search: string): Promise<ICar[] | null> {
    const cars = await this.model.find({
      $or: [
        { brand: search },
        { name: search },
      ],
    });
    if (!cars.length) return null;
    return cars;
  }

  public async getCarById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);
    if (car) return car;
    return null;
  }

  public async updateCar(id: string, newCar: ICar): Promise<ICar | null> {
    await this.model.findByIdAndUpdate(id, newCar);
    const car = await this.model.findById(id);
    if (car) return car;
    return null;
  }

  public async deleteCar(id: string): Promise<object> {
    await this.model.findByIdAndDelete(id);
    return { message: 'Deleted!' };
  }

  public async deleteAll() {
    await this.model.deleteMany({});
  }
}

export default CarODM;
