import { IsEmail, isNotEmpty, IsNotEmpty, IsString, IsStrongPassword, Validate } from "class-validator";
import { Email } from "../customs/isEmail";


export class signupDTO{
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsEmail()
    @Validate(Email)
    email: string


    @IsNotEmpty()
    @Validate(IsStrongPassword)
    password: string
}