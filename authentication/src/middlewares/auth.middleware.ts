import { NextFunction, Request, Response} from "express";
import HttpExceprtion from "../utilis/HttpException";
import messages from "../customs/messages";
import { JwtUtil } from "../utilis/jwt.utils";
import { env } from "process";
import { AppDataSource } from "../config/db.config";
import { User } from "../entity/user.entity";

interface CustomRequest extends Request {
    user?: User; // Add a user property to the custom interface
  }

const auth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = 
    req.headers.authorization && req.headers.authorization.split (" ") [1];
    if (!token) {
        return next(HttpExceprtion.badRequest(messages["unAuthorized"]));

    }
    let payload = JwtUtil.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string
    );
    if (!payload){
        throw HttpExceprtion.unauthorized(messages["unAuthorized"]);

    }

    let userRepository= AppDataSource.getRepository(User);
    try{
        const user = await userRepository.findOne({
            where: {
                id: payload?.id,
            },
        });
        if (!user){
            throw HttpExceprtion.badRequest(messages["unAuthorized"]);

        }
    //     req.user = user;
    //     next();
    }catch (error){
    //     next (error);
    }
}