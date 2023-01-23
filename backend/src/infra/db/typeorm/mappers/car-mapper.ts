import { CarModel } from '../../../../domain/models/car'
import { TypeOrmCar } from '../entities/typeorm-car'

export class Mapper {
  public static toDomainEntity (typeOrmCar: TypeOrmCar): CarModel {
    console.log('3e', typeOrmCar)
    const domain: CarModel = {
        id: typeOrmCar.id,
        name: typeOrmCar.name,
        brand: typeOrmCar.brand,
        manufactureYear: typeOrmCar.manufactureYear,
        description: typeOrmCar.description,
        owner: typeOrmCar.owner,
        created_at: typeOrmCar.created_at
    }

    return domain
}

  public static toDomainEntities (typeOrmCar: TypeOrmCar[]): CarModel[] {
      return typeOrmCar.map(typeOrmCar => this.toDomainEntity(typeOrmCar))
  }
}
