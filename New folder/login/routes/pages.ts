// const express = require ("express");
// const router = express.Router();

// router.get("/", (req: Request, res: Response)=>{
//     res.render("index");
// })
import { Request, Response } from "express";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index");
});
router.get("/register", (req, res)=>{
    res.sendFile("", {root: "'/public"});

});

router.get("/login", (req, res)=>{
    res.sendFile("", {root: "./public/"})
})

export default router