import { User } from "../entity/user.entity"; 
import db from "../index"
import { CreateUSerInput } from "../schemas/user.schema";

const userReposirtory = db.getRepository(User);

export const createUser = async (input: CreateUSerInput) => {
  return (await db.manager.save(
    db.manager.create(User, input)
  )) as User;
};

export const findUSerByEmail = async ({email}: {email: string}) =>{
  return await userReposirtory.findOneBy ({email});
  
};

export const findUserById = async (userId: string) => {
  return await userReposirtory.findOneBy ({id: userId});
};

export const findUser = async (query: Object) =>{
  return await userReposirtory.findOneBy(query);
};