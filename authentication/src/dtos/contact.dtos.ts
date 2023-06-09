import { IsEmail, IsNotEmpty } from "class-validator";

export class contactDTO {
    @IsNotEmpty()
    name:string


    @IsNotEmpty()
    @IsEmail()
    email: string


    @IsNotEmpty()
    phoneNumber: string

    
    @IsNotEmpty()
    message: string
}