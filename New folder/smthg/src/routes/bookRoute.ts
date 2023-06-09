import  { Express, Router } from "express";
import { createBooks, getBooks } from "../controllers/bookModel";


const router = Router();

router.get("/get", getBooks);
router.post("/post", createBooks);


export default router