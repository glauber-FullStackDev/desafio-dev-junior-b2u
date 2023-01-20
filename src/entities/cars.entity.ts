import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import Owner from "./owner.entity";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 20 })
  brand: string;

  @Column({ type: "float" })
  price: number;

  @Column()
  year: number;

  @Column({ type: "text", width: 250 })
  description?: string;

  @ManyToOne(() => Owner, (owner) => owner.cars, {
    cascade: true,
    eager: true,
  })
  owner: Owner;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Car;
