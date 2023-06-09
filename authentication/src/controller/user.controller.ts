
import { Request, Response, NextFunction } from "express";

import { User } from "../entity/user.entity";
import { UserService } from "../services/user.service";
import Message from '../customs/messages'
import { ChnagePasswordDTO, ResetPasswordDTO, forgetPasswordDTO } from "../dtos/login.dtos";
import messages from "../customs/messages";

class UserController {
  UserService: any;
  constructor (private userservice = new UserService()) {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    const user = await this.UserService.getAll();
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  }

  async signup(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    try {
      const user = await this.UserService.create(data);
      res.status(200).json({
        status: "success",
        data: {
          user,
        },
        message: "User successfully created",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async Userlogin(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const user = await this.UserService.login(data);
    res.status(200).json({
      status: true,
      data: {
        user,
      },
      message: "Login successfully",
    });
    return user
  }

  async changePassword(req: Request, res: Response, next:NextFunction){
    const data = req.body as ChnagePasswordDTO
    // const user = req.user as User
    const user = req.user as User
    await this.UserService.changePassword(data, user)
    res.status(200).json({
      success: true,
      data:{
          user,
      },
      message: Message['updatePassword']
    })
  }

  async forgetPassword(req: Request, res: Response, next: NextFunction){
    const data = req.body as forgetPasswordDTO
    const user = await this.UserService.forgetPassword(data)
    res.status(200).json({
      success: true,
      where: {
        user,
      },
      // message: messages["PAssword has been Updated to the latest"]
    })
  }

  async resetPassword(req: Request, res: Response, next: NextFunction){
    const data = req.body as ResetPasswordDTO
    const user = await this.UserService.resetPassword(data)
    res.status(200).json({
      success: true,
      where:{
        user,
      },
      message: Message['updatePassword']
    })
  }
}

export default new UserController();