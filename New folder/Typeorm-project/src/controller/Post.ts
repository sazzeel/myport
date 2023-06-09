import {Request, Response} from "express";
import { User } from "../entity/User";
import { Tweet } from "../entity/Tweet";
import { getManager } from "typeorm";

export const getAllTweets = async (req: Request, res: Response) => {
    const postRepsiotory = getManager().getRepository(Tweet);

    const tweets = await postRepsiotory.find();

    res.send(tweets);
};

export const saveAllTweets = async (req:Request, res:Response) =>{
    const userRepository = getManager().getRepository(User);
    const postRepository = getManager().getRepository(Tweet);
    let i;
    let newUsers:any =[];
    let newUser : any = {};

    let newPost : any = {};
    for (i=1; i<=6; i++){
        newUser = await userRepository.findOne({
            select : ["id"],
            where: {id:1}
        });

        console.log ("hiiii", newUser);
        if (typeof newUser == "undefined"){
            newUser = new User ();
            newPost = new Tweet();

        } else {
            console.log("update");
            newPost = await postRepository.findOne ({
                select: ["id", "user"],
                where: {user: i}
            });
        }

        newUser.name = "Test" + i;
        newPost.title = "post/tweet" + i;

        newUser.tweets = [newPost];
        newUsers.push(newUser);

    }

    await userRepository.save (newUsers);
    res.send ("completed");

};