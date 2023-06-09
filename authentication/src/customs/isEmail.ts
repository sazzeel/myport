import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { AppDataSource } from "../config/db.config";
import { User } from "../entity/user.entity";
import messages from "./messages";



export class Email implements ValidatorConstraintInterface{
    async validate (email:string, _arg:ValidationArguments){
        const user = await AppDataSource.getRepository(User).findOne({
            where:{
                email,
            }
        })
        if(!user){
            return true
        }
        return false
    }
    defaultMessage (_args:ValidationArguments){
        return messages.invalidAuth
    }
}