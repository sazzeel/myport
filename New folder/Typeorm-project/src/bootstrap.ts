import { getRepository } from "typeorm";
import { Tweet } from "./entity/Tweet";

import {User} from "./entity/User"



export const Bootstrap = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create ({
        firstName: "Alex",
        lastName: "ALex",
        age: 22,
    });
    await userRepo.save(user).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("New User Saved", user);
    
// make the user tweet a new tweet
    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = "bdbdhbfhbfjbkjdjkdbh jdb";
    tweet.content = "well well well it is what it is";
    tweet.user = user;

    await tweetRepo.save(tweet).catch((err)=> console.log(err));
};