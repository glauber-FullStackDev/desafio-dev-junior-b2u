import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

let mock: CreateVehicleDto[] = [
  {
    id: 1,
    name: 'Astra',
    brand: 'Chevrolet',
    manufacturingYear: '2006',
    price: 'R$ 19.500,00',
    description: 'Preto',
    ownerName: 'Ricardo',
    email: 'ric@gmail.com',
    phone: '2299822222',
  },

  {
    id: 2,
    name: 'teste',
    brand: 'teste',
    manufacturingYear: '2006',
    price: 'R$ 19.500,00',
    description: 'teste',
    ownerName: 'Ricardo',
    email: 'ric@gmail.com',
    phone: '2299822222',
  },
];

@Injectable()
export class VehiclesService {
  create(createVehicleDto: CreateVehicleDto) {
    createVehicleDto.id = Math.max(...mock.map((o) => o.id)) + 1;
    return mock.push(createVehicleDto);
  }

  findAll() {
    return mock;
  }

  findOne(id: number) {
    const vehicleIndex = mock.findIndex((p) => p.id === id);
    return mock[vehicleIndex];
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    const vehicleIndex = mock.findIndex((p) => p.id === id);
    const copyMock = { ...mock[vehicleIndex] };

    const upVehiKeys = Object.keys(updateVehicleDto);
    const mockKeys = Object.keys(mock[vehicleIndex]);

    if (upVehiKeys.every((item) => mockKeys.includes(item))) {
      if (updateVehicleDto.id && copyMock.id !== updateVehicleDto.id) {
        throw new BadRequestException('You can not change id number');
      }

      mock[vehicleIndex] = { ...mock[vehicleIndex], ...updateVehicleDto };

      return 'Update com sucesso';
    }

    throw new BadRequestException('Check the body keys');
  }

  remove(id: number) {
    mock = mock.filter((p) => p.id !== id);
    return 'Removido com sucesso';
  }
}
