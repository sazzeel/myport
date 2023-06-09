import "refelct-metadata"
import { DataSource } from "typeorm"
import Token from "../entity/token.entity"
import { User } from "../entity/user.entity"


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    // + used to convert the port number to a number data type, as environment variables are typically passed as strings.
    port: +process.env.DB_PORT !|| 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User, Token],
    synchronize: true,
    logging: false,

})