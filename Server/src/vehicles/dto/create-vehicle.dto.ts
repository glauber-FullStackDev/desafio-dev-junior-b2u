export class CreateVehicleDto {
  id: number;
  name: string;
  brand: string;
  manufacturingYear: string;
  description: string;
  owner: {
    name: string;
    email: string;
    phone: string;
  };
}
