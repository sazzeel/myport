import express from "express";
import { AppDataSource } from "./src/config/db.config";


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use("/")

app.listen(8000, () => {
    console.log("Server has started")

    AppDataSource.initialize()
    .then(() => {
        console.log("Database Connected Successfully🚀!")
    })
    .catch((err) => {
        console.error("Databse connection error", err)
    })
})