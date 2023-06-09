import {v4 as uuid} from "uuid";
// import express form "express";
import express = require("express")

interface book {
    id: string;
    name: string;
    author: string;
    genre: string;
    description: string;
    image: string;
}


let books: book[] = [];

export const getBooks = (req: express.Request, res: express.Response) => {
    res.send(books);
}

export const createBooks = (req:express.Request, res: express.Response)=> {
    const boook = req.body;
    books.push({...boook, id:uuid()});
    res.send("user Added");
};