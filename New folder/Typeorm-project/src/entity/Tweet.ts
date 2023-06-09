import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name : "tweets"})
export class Tweet{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({type: "varchar", length: 80})
    title: string;

    @Column({type: "varchar", length: 80})
    content: string;

    @ManyToOne ((type) => User, (user) => user.tweets)
    user: User;
}