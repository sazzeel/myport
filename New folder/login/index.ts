

import express, { Application, Express, Request, Response } from "express";
import path from "path";
import {createConnection} from "mysql2";
import cookieParser from "cookie-parser";
import {config} from  "dotenv"

config({path:__dirname+"/.env"})

const app : Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.use ("/ts", express.static(path.join(__dirname, "./public/ts")));
app.use("/css", express.static(path.join(__dirname, "./public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(cookieParser());
app.use(express.json());



// const db = createConnection({
//     host:process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

const db = createConnection({
    host:"localhost",
    user: "root",
    password: "1234",
    database: "login_sql"
});

app.use ("/", require("./routers/pages"));
app.use("/api", require("./controlers/auth"));
app.listen (PORT, () => {
    console.log(`server is listening to the port ${PORT}`)
})
