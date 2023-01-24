import { CarAd as CarAdModel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { EntityPersistenceError } from 'src/shared/errors/databaseErrors/EntityPersistenceError';
import { CarAd } from '../domain/CarAd';
import { CarItems } from '../domain/CarItems';
import { CarAdRepository } from '../domain/repository/CarAdRepository';

export class PrismaCarAdRepository implements CarAdRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async save(CarAd: CarAd): Promise<CarAd> {
    try {
      await this.CarAdToModel(CarAd);
    } catch (e) {
      throw new EntityPersistenceError('error while persiste CarAd');
    }

    return CarAd;
  }

  async list(take = 1): Promise<CarAd[]> {
    const CarAdsModelList = await this.prismaClient.carAd.findMany({
      take,
    });

    return CarAdsModelList.map(this.modelToCarAd);
  }

  private CarAdToModel(CarAd: CarAd) {
    return this.prismaClient.carAd.create({
      data: {
        id: CarAd.id,
        ownerId: CarAd.ownerId,
        brand: CarAd.brand,
        model: CarAd.model,
        manufactureYear: CarAd.manufactureYear,
        modelYear: CarAd.modelYear,
        fuel: CarAd.fuel,
        km: CarAd.km,
        price: CarAd.price,
        eletricWindow: CarAd.items.eletricWindow,
        hidraulicSteenring: CarAd.items.hidraulicSteenring,
        eletricicSteenring: CarAd.items.eletricicSteenring,
        automaticGearBox: CarAd.items.automaticGearBox,
        airConditioning: CarAd.items.airConditioning,
        airbag: CarAd.items.airbag,
        alarm: CarAd.items.alarm,
        eletricLock: CarAd.items.eletricLock,
      },
    });
  }

  private modelToCarAd(model: CarAdModel) {
    const carItems = CarItems.from(model);
    return CarAd.from(
      model.id,
      model.ownerId,
      model.brand,
      model.model,
      model.manufactureYear,
      model.modelYear,
      model.fuel,
      model.km,
      model.price.toNumber(),
      carItems,
    );
  }
}
