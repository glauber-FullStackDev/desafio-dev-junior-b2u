import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Car from "./cars.entity";

@Entity("owners")
class Owner {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cellphone: string;

  @OneToMany(() => Car, (car) => car.owner)
  cars: Owner[];
}

export default Owner;
