import mysql from 'mysql2';

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql2 = require("mysql2");

require("dotenv").config();


const db = mysql2.createPool({
    connectionLimit: 100,
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT

    
})
// db.getConnection ((err: mysql.QueryError | null, connection: mysql.PoolConnection)=>{
//     if (err) throw (err)
//     console.log("DB connectred successfully: 👏🙌👏🙌" + connection.threadId)
// })
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

db.getConnection((err: mysql.QueryError | null, connection: mysql.PoolConnection) => {
    if (err) {
        console.error(err);
    } else {
        console.log("DB connected successfully: 👏🙌👏🙌" + connection.threadId);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;