import { OwnerModel } from '../../../../domain/models/owner'
import {
  Column, CreateDateColumn, Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('owner')
export class TypeOrmOwner implements OwnerModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  owner_name: string

  @Column()
  email: string

  @Column()
  telephone: string

  @CreateDateColumn()
  created_at: Date
}
