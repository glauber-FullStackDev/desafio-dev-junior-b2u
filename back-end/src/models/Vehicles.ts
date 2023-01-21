import { CustomError } from "../helpers/apiErrors";

export class NewVehicle {
  constructor(
    private vehicle: Vehicles,
  ) { }

  getId() {
    return this.vehicle.id;
  }

  getCar() {
    return this.vehicle;
  }

  carBussines() {
    const { carName, brand, description, yearOfManufacture, name, email, telephone } = this.vehicle
    if (!carName || !brand || !description || !yearOfManufacture || !name || !email || !telephone) {
      throw new CustomError(422, "Entre com todos parametros");
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new CustomError(422, "Email invalido");
    }
    if (carName.length < 3 || brand.length < 3 || name.length < 3) {
      throw new CustomError(422, "Minimo 3 caracteries");
    }
    if (description.length > 250 || description.length < 10) {
      throw new CustomError(422, "Digite uma descrição com maximo 250 e minimo 10 caracteries ");
    }
    if (telephone.length !== 12) {
      throw new CustomError(422, "Digite uma telefone valido com ddd ex: 55 000000000 ");
    }
    if (yearOfManufacture.length !== 4) {
      throw new CustomError(422, "Digite um ano valido ex: 2000 ");
    }

    return this.vehicle
  }

}

export interface Vehicles {
  id?: string,
  carName: string,
  brand: string,
  yearOfManufacture: string,
  description: string,
  name: string,
  telephone: string,
  email: string,
}


