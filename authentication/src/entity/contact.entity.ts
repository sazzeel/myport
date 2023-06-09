import { Column, Entity } from "typeorm";
import { CommonArea } from "./common.entity";

@Entity({
    name:"contact"

})
export class Contact extends CommonArea{
    @Column ({
        name: 'name'
    })
    name: string;

    @Column({
        name: 'email'
    })
    email: string;

    @Column({
        name: 'phone_num'
    })
    phoneNumber: string
    @Column({
        name: 'message'
    })
    message: string
}