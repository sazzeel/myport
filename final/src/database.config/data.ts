import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT !|| 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        "src/entity/**/*.ts"
    ],

})