import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

let mock: CreateVehicleDto[] = [
  {
    id: 1,
    name: 'Astra',
    brand: 'Chevrolet',
    manufacturingYear: '2006',
    description: 'Preto',
    owner: {
      name: 'Ricardo',
      email: 'ric@gmail.com',
      phone: '22998222222',
    },
  },
  {
    id: 2,
    name: 'teste',
    brand: 'teste',
    manufacturingYear: '2006',
    description: 'teste',
    owner: {
      name: 'testge',
      email: 'teste@gmail.com',
      phone: '22198222222',
    },
  },
];

@Injectable()
export class VehiclesService {
  create(createVehicleDto: CreateVehicleDto) {
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
    console.log(copyMock);

    const upVehiKeys = Object.keys(updateVehicleDto);
    const mockKeys = Object.keys(mock[vehicleIndex]);

    if (upVehiKeys.every((item) => mockKeys.includes(item))) {
      mock[vehicleIndex] = { ...mock[vehicleIndex], ...updateVehicleDto };

      if (copyMock.id !== mock[vehicleIndex].id) {
        return 'You can not change id number';
      }

      return 'Update com sucesso';
    }

    return BadRequestException;
  }

  remove(id: number) {
    mock = mock.filter((p) => p.id !== id);
    return 'Removido com sucesso';
  }
}
