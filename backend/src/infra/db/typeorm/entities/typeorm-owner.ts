import { OwnerModel } from '../../../../domain/models/owner'
import {
  Column, CreateDateColumn, Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('account')
export class TypeOrmOwner implements OwnerModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  telephone: string

  @CreateDateColumn()
  created_at: Date
}
