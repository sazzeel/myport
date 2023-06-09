// import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
// import messages from "./messages";
// import { PASSWORD_REGEX } from "../constants/regex";



// @ValidatorConstraint({name: "isStrongPassword", async: true})
// export class IsStrongPassword implements ValidatorConstraintInterface{
//     async validate (text: string, arg: ValidatorConstraintInterface){
//         return PASSWORD_REGEX.test(text);

//     }
//     defaultMessage(args: ValidationArguments){
//         return messages.passwordStrength;
//     }
// }