import { Router } from "express";
import userController from "../controller/user.controller";
import Validator from "../middlewares/valid.middleware";
import { signupDTO } from "../dtos/user.dtos";
import { catchAsync } from "../utilis/catchAsync";
import { ResetPasswordDTO, forgetPasswordDTO, loginDTO } from "../dtos/login.dtos";


const router = Router()

router.get('/', userController.getAll.bind(userController));

router.post("/signup", Validator.validate(signupDTO), 
// catchAsync(userController.signup.bind(userController))
)

router.post('/login', Validator.validate(loginDTO),)

router.post("/changepassword",)

router.post("/forgotpassword", Validator.validate(forgetPasswordDTO))

router.post('/resetpassword', Validator.validate(ResetPasswordDTO))

export default router;