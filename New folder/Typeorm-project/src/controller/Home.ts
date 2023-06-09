import {Request, Response} from "express";

export const showHomePage = async (req:Request, res: Response) => {
    res.send ("welcome to the HomePage");
}