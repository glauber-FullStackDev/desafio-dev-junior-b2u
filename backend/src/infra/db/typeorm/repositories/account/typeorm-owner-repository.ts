import { AddColorRepository } from '../../../../../data/protocols/db/product/add-color-repository'
import { AddImageRepository } from '../../../../../data/protocols/db/product/add-image-repository'
import { AddProductRepository } from '../../../../../data/protocols/db/product/add-product-repository'
import { AddSizeRepository } from '../../../../../data/protocols/db/product/add-size-repository'
import { ProductModel } from '../../../../../domain/models/product'
import { AddColorParams } from '../../../../../domain/usecases/product/add-color'
import { AddImageParams } from '../../../../../domain/usecases/product/add-image'
import { AddProductParams } from '../../../../../domain/usecases/product/add-product'
import { AddSizeParams } from '../../../../../domain/usecases/product/add-size'
import { TypeOrmColor } from '../../entities/typeorm-color'
import { TypeOrmImage } from '../../entities/typeorm-image'
import { TypeOrmProduct } from '../../entities/typeorm-product'
import { TypeOrmSize } from '../../entities/typeorm-size'
import { AppDataSource } from '../../helper/app-data-source'

export class TypeOrmProductRepository implements AddProductRepository, AddImageRepository, AddSizeRepository, AddColorRepository {
  async add (productData: AddProductParams): Promise<ProductModel> {
    const product = new TypeOrmProduct()
    product.name = productData.name
    product.description = productData.description
    product.category = productData.category
    product.price = productData.price
    product.count = productData.count

    const result = await AppDataSource.getInstance()
        .getRepository(TypeOrmProduct)
        .save(product)

    return result
  }

  async addImage (addImageParams: AddImageParams): Promise<void> {
    const image = new TypeOrmImage()
    image.name = addImageParams.name
    image.key = addImageParams.key
    image.size = addImageParams.size
    image.url = addImageParams.url
    image.product = addImageParams.product

    await AppDataSource.getInstance()
        .getRepository(TypeOrmProduct)
        .save(image)
  }

  async addSize (addSizeParams: AddSizeParams): Promise<void> {
    const size = new TypeOrmSize()
    size.size = addSizeParams.size

    await AppDataSource.getInstance()
        .getRepository(TypeOrmProduct)
        .save(size)
  }

  async addColor (addColorParams: AddColorParams): Promise<void> {
    const color = new TypeOrmColor()
    color.hex = addColorParams.hex

    await AppDataSource.getInstance()
        .getRepository(TypeOrmProduct)
        .save(color)
  }
}
