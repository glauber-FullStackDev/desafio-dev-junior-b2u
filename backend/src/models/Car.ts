import { v4 as uuidV4 } from "uuid";
class Car {
	id?: string;
	nameCar: string;
	brandCar: string;
	year: string;
	description: string;
  owner: string;
  email: string;
  phone: string

	constructor(){
		if(!this.id){
			this.id = uuidV4();
		}
	}

}

export { Car };
