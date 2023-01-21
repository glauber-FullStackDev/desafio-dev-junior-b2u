export interface ICar {
  name: string;
  brand: string;
  year: number;
  owner: {
    name: string;
    email: string;
    tel: string;
  };
}

export interface ICarContext {
  cars: ICar[];
  getCars: () => void;
  getCar: (id: any) => void;
  addCar: (car: ICar) => void;
  removeCar: (id: any) => void;
  updateCar: (id:any, car: ICar) => void;
}
