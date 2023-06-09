
import { AppDataSource } from "../config/db.config";
import Message from "../customs/messages";
import {
  ChnagePasswordDTO,
  forgetPasswordDTO,
  loginDTO,
  ResetPasswordDTO,
} from "../dtos/login.dtos";
import { signupDTO } from "../dtos/user.dtos";
import { User } from "../entity/user.entity";
import BcryptUtils from "../utilis/bcrypt.util";
import { JwtUtil } from "../utilis/jwt.utils";
import HttpExceprtion from "../utilis/HttpException";
import RandomGenerator from "../utilis/random.utilis";
import sendMail from "../utilis/email.utilis";

export class UserService {
  constructor(private userRepository = AppDataSource.getRepository(User)) {}

  async getAll() {
    const user = await this.userRepository.find();
    return user;
  }

  async create(data: signupDTO): Promise <User| undefined> {
    try {
      let user = new User();
      (user.username = data.username),
        (user.email = data.email),
        (user.password = data.password);
      const userData = await this.userRepository.save(user);
      if (!userData) throw new Error("user not saved");
      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  async login(data: loginDTO) {
    const { email, password } = data;
    let user = await this.userRepository.findOne({
      where: {
        email,
      },
      select: ["email", "password"],
    });
    if (user != null) {
      const compare = await BcryptUtils.compare(password, user.password);
      if (compare) {
        const token = JwtUtil.sign(
          { id: user.id },
          process.env.ACCESS_TOKEN_SECRET!,
          process.env.ACCESS_TOKEN_EXPIRES_IN!
        );
        return token;
      } else {
        throw HttpExceprtion.badRequest(Message["invalidAuth"]);
      }
    } else {
      throw HttpExceprtion.badRequest(Message["invalidAuth"]);
    }
  }

  async changePassword(data: ChnagePasswordDTO, user: User) {
    const { newPassword, oldPassword } = data;
    console.log(user);

    const findUser = await this.userRepository.findOne({
      select: {
        password: true,
        username: true,
        email: true,
        id: true,
      },
      where: {
        id: user.id,
      },
    });

    if (!findUser) {
      throw HttpExceprtion.notFound(Message["invalidPassword"]);
    }
    const isCorrectPassword = await BcryptUtils.compare(
      oldPassword,
      findUser.password
    );
    if (!isCorrectPassword) {
      throw HttpExceprtion.badRequest(Message["invalidRequest"]);
    }
    findUser.password = await BcryptUtils.hash(newPassword);
    await this.userRepository.save(findUser);
    return findUser;
  }

  async forgetPassword(data: forgetPasswordDTO) {
    const { email } = data;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw HttpExceprtion.badRequest(Message["invalidEmail"]);
    }
    const token = RandomGenerator.generateRandomNumber();
    const tokenWithExpiration = RandomGenerator.hashWithExpiration(token);
    try {
      const fullUrl = `https//localhost:8000/forget-password?token=${tokenWithExpiration}`;
      sendMail({
        to: email,
        subject: "Reset Password",
        html: `<h1>Reset The Birsiyeko Password</h1>,
        <p>Click on the Given link to reset your Password</p>
        <P>${token}</p>`,
        from: "sajil.sharma@gmail.com.com",
        text: " Reset Password",
      });
      console.log(fullUrl, token);
    } catch (error) {
      throw HttpExceprtion.internalServerError("Error Sending mail");
    }
    return {
      hashedToken: tokenWithExpiration,
      email,
    };
  }

  async resetPassword(data: ResetPasswordDTO) {
    const { password, hashedToken } = data;
    const tokenWithExpiration = hashedToken.split(".");
    const tokenHash = tokenWithExpiration[0];
    const expiration = tokenWithExpiration[1];

    const isTokenExpired = RandomGenerator.isTokenExpires(expiration);
    if (isTokenExpired) {
      throw HttpExceprtion.badRequest(Message["invalidToken"]);
    }

    const newToken = RandomGenerator.hash(tokenHash);
    if (tokenHash !== newToken) {
      throw HttpExceprtion.badRequest(Message["invalidToken"]);
    }

    const user = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw HttpExceprtion.notFound(Message["invalidEmail"]);
    }
    user.password = await BcryptUtils.hash(password);
    this.userRepository.save(user);
    return user;
  }
}