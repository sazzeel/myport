
import {createConnection} from "mysql2"

console.log(process.env.DATABASE_USER)
const db = createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


export default db;