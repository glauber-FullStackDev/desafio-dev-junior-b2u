import { CarModel } from 'domain/models/car'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne
} from 'typeorm'
import { TypeOrmOwner } from './typeorm-owner'

@Entity('car')
export class TypeOrmCar implements CarModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  brand: string

  @Column()
  manufactureYear: number

  @Column()
  description: string

  @ManyToOne(() => TypeOrmOwner, (typeOrmOwner) => typeOrmOwner.id)
  owner: TypeOrmOwner

  @CreateDateColumn()
  created_at: Date
}
