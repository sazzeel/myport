
import { Request, Response } from "express"
import {DataSource } from "typeorm"
// import "dotenv/config"
import {config} from "dotenv";
import bookRoute from "./routes/bookRoute"
import { Book } from "./entity/book"
import express = require("express")
// const dotenv = require("dotenv");


const app = express();
app.use(express.json()) 
config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req: Request, res: Response) => {
  res.send("It is working")
})

app.use("/book", bookRoute)


    let appDataSource=new DataSource({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "3306"),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Book],
      synchronize: true,
    })
    appDataSource.initialize().then(()=>{
      console.log("connected")
      console.log()
      console.log("Database connection established successfully.")
      app.listen(process.env.PORT)
    }).catch(error=>{
      console.log(error)
    })

 


