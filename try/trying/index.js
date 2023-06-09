const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

// database sanga connection eta
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db ma post vayepachi dekhaune datas
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// view garda db ma haleko data dekhaune area
app.get("/api/get/:id", (req, res) => {
  const {id} =req.params;
  const sqlGet = "SELECT * FROM contact_db where id = ? ";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

// edit garyepachi edit hune area
app.put("/api/update/:id", (req, res) => {
  const {id} =req.params;
  const {name, email, contact} = req.body;
  const sqlUpdate = "UPDATE contact_db SET name = ?, email = ?, contact = ? WHERE id = ? ";
  db.query(sqlUpdate, [name, email, contact, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});
// edit garyepachi post hune area
app.post("/api/post",(req, res) => {
  const {name, email, contact} = req.body;
  const sqlInsert="INSERT INTO contact_db (name, email, contact) VALUES (?, ?, ?) ";
  db.query (sqlInsert, [name, email, contact], (error, result) =>{
    if (error){
      console.log(error);
    }
  })
})
// delete garne area
app.delete("/api/remove/:id",(req, res) => {
  const { id } = req.params;
  const sqlRemove="DELETE FROM contact_db WHERE id = ? ";
  db.query (sqlRemove,id, (error, result) =>{
    if (error){
      console.log(error);
    }
  })
})

app.get("/", (req, res) => {
  // const sqlInsert = "INSERT INTO contact_db (name, email, contact) VALUES('Sajil', 'sajil@gmail.com', 1234567890 )";
  // db.query(sqlInsert, (error,result) =>{
  //     console.log("error", error);
  //     console.log("result", result);
  //     res.send("yolo");
  // });
});

// server esma run hunxa vanera vaneko xa
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});















// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { createConnection } from 'typeorm';

// @Entity()
// class Contact {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   email: string;

//   @Column()
//   contact: string;
// }

// createConnection().then(async connection => {
//   const app = express();
//   app.use(cors());
//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(express.json());

//   app.get('/api/get', async (req, res) => {
//     const contacts = await connection.manager.find(Contact);
//     res.send(contacts);
//   });

//   app.get('/api/get/:id', async (req, res) => {
//     const { id } = req.params;
//     const contact = await connection.manager.findOne(Contact, id);
//     res.send(contact);
//   });

//   app.put('/api/update/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, email, contact } = req.body;
//     const contactToUpdate = await connection.manager.findOne(Contact, id);
//     contactToUpdate.name = name;
//     contactToUpdate.email = email;
//     contactToUpdate.contact = contact;
//     await connection.manager.save(contactToUpdate);
//     res.send(contactToUpdate);
//   });

//   app.post('/api/post', async (req, res) => {
//     const { name, email, contact } = req.body;
//     const newContact = new Contact();
//     newContact.name = name;
//     newContact.email = email;
//     newContact.contact = contact;
//     await connection.manager.save(newContact);
//     res.send(newContact);
//   });

//   app.delete('/api/remove/:id', async (req, res) => {
//     const { id } = req.params;
//     const contactToRemove = await connection.manager.findOne(Contact, id);
//     await connection.manager.remove(contactToRemove);
//     res.send(contactToRemove);
//   });

//   app.listen(5000, () => {
//     console.log('Server is running on port 5000');
//   });
// });

