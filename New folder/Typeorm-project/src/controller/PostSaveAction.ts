import {Request, Response} from "express";
import { getManager } from "typeorm";
import { Tweet } from "../entity/Tweet";


export async function postSaveAction (request: Request, response: Response){
    const postRepository = getManager().getRepository(Tweet);

    const newPost = postRepository.create(request.body);

    await postRepository.save(newPost);

    response.send(newPost);
}