import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected name: string;
  protected brand: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected image: string;
  protected price: number;
  protected description: string;
  protected published: Date;
  protected userId: string;
  protected salesman: string;
  protected email: string;
  protected phoneNumber: number;

  constructor(params: ICar) {
    this.id = params.id;
    this.name = params.name;
    this.brand = params.brand;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.image = params.image;
    this.price = params.price;
    this.description = params.description;
    this.published = params.published;
    this.userId = params.userId;
    this.salesman = params.salesman;
    this.email = params.email;
    this.phoneNumber = params.phoneNumber;
  }
}

export default Car;
