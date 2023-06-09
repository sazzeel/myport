import {Request, Response} from "express";
import { getManager } from "typeorm";
import { Tweet } from "../entity/Tweet";
import { User } from "../entity/User";


export const getAllPosts = async (req: Request, res: Response) => {
    const postRepository = getManager().getRepository(Tweet);

    const tweets = await postRepository.find();

    res.send (tweets);

};


export const saveAllTweets =async (req: Request, res: Response) => {
    const userRepository = getManager().getRepository(User);
    const postRepository = getManager().getRepository(Tweet);
    let i;
    let newUsers: any = [];
    for (i=3; i<=5;i++){
        let newUser: any = await userRepository.findOne({
            where: {id:i},
            relations: ['tweets'],

        })
        if (newUser){
            newUser.name = "dbbd"+i;

            let newPost:any = await postRepository.findOne({
                where: {user: i}
            })

            newPost.title = "xbbd" + i;

            newUser.tweets = [newPost];

            // await userRepository.update(newUser, i);
            await userRepository.save(newUser);
            await postRepository.save(newPost);

        }
        else {
            let newUser = new User ();
            newUser.firstName = "dbdhb"+i;
            newUser.lastName = "dhdub" + i;

            let newPost = new Tweet ();
            newPost.user = i;
            newPost.title = "fbfjb" + i;

            await userRepository.save (newUser);
            await postRepository.save (newPost);
        }
    }

    res.send("completed");
}