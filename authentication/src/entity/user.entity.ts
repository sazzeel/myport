import { BeforeInsert, Column, Entity, OneToMany } from "typeorm";
import { CommonArea } from "./common.entity";
import Token from "./token.entity";
import BcryptUtils from "../utilis/bcrypt.util";



@Entity({
    name: "user",
})
export class User extends CommonArea
 {
    @Column({
        select: true
    })
    username: string;

    @Column({
        name: 'email',
        unique: true,
    })
    email: string;

    @Column({
        name: 'password',
        select: false
    })
    password: string;
    @OneToMany(() => Token, (token) => token.user, {
        nullable: true,
        onDelete: 'CASCADE'
      })
      token: Token[]
    
    //   @OneToMany(() => Otp, (otp) => otp.user)
    //   otp: Otp[]
    
      @BeforeInsert()
      async hashedPassword(){
        this.password = await BcryptUtils.hash(this.password)
      }
   
}