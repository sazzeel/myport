import { AppDataSource } from "../config/db.config";
import Token from "../entity/token.entity";
import { User } from "../entity/user.entity";

export class TokenSer{
    constructor(private tokenRepo   =AppDataSource.getRepository(Token)){}
    create (userToken: string, expireAt: Date, user: User) {
        const token = new Token ()
        token.token = userToken

        if (user instanceof User) {
            token.user = user
        }

        token.expiresAt = expireAt
        return this.tokenRepo.save(token)
    }
}