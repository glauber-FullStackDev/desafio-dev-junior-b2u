import { Request, Response } from 'express';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService(new CarODM());
  }

  public async createCar() {
    const { id, username, email, phoneNumber } = this.res.locals;
    const car = {
      ...this.req.body,
      published: new Date(),
      userId: id,
      salesman: username,
      email,
      phoneNumber,
    }
    const newCar = await this.service.createCar(car);
    return this.res.status(201).json(newCar);
  }

  public async getCars() {
    const cars = await this.service.getCars();
    return this.res.status(200).json(cars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    const car = await this.service.getCarById(id);
    return this.res.status(200).json(car);
  }

  public async getUserCars() {
    const { id } = this.res.locals;
    const userCars = await this.service.getUserCars(id);
    return this.res.status(200).json(userCars);
  }

  public async getCarsBySearch() {
    const { search } = this.req.params;
    const cars = await this.service.getCarsBySearch(search);
    return this.res.status(200).json(cars);
  }

  public async updateCar() {
    const { params } = this.req;
    const { id, username, email, phoneNumber } = this.res.locals;
    const car = {
      ...this.req.body,
      date: new Date(),
      userId: id,
      salesman: username,
      email,
      phoneNumber,
    }
    const update = await this.service.updateCar(params.id, car);
    return this.res.status(201).json(update);
  }

  public async deleteCar() {
    const { id } = this.req.params;
    const deleted = await this.service.deleteCar(id);
    return this.res.status(202).json(deleted);
  }
}

export default CarController;
