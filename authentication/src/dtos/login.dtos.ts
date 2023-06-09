import { isEmail, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";


export class loginDTO {
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class ChnagePasswordDTO{
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @IsString()
    @IsNotEmpty()
    // @Validate(IsStrongPassword)
    newPassword: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;
}

export class forgetPasswordDTO{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
export class ResetPasswordDTO {
    @IsString()
    @IsNotEmpty()
    token: string;
  
    @IsString()
    @IsNotEmpty()
    hashedToken: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
    @IsString()
    @IsNotEmpty()
    confirmPassword: string;
  }