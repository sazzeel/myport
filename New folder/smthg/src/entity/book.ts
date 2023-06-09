import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  author!: string;

  @Column()
  genre!: string;

  @Column()
  description!: string;

  @Column()
  image!: string;
}
