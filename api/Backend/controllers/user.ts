import {v4 as uuid} from "uuid";
import  express from "express";

interface User {
    name: string;
    email: string;
    id: string;
}

let users: User[] = [];

export const getUsers = (req: express.Request, res: express.Response) =>{
    res.send(users);
}

export const createUser = (req: express.Request, res: express.Response) => {
    const user = req.body;

    users.push ({...user, id: uuid() });
    res.send("user Added successfully");
};

export const getUser = (req: express.Request, res: express.Response) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
 console.log(singleUser)
    res.send(singleUser[0]??{});
}

export const deleteUser = (req: express.Request, res: express.Response) => {
    users = users.filter((users) => users.id !== req.params.id);
    res.send("Deleted done")
}

// export const updateUser = (req: express.Request, res: express.Response) =>{
//     const user = users.find ((user) => user.id === req.params.id);

//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.contact = req.body.contact;

//     res.send ("updated done");
// }


export const updateUser = (req :express.Request, res: express.Response) => {
    const userIndex = users.findIndex (user => user.id === req.params.id);

    if (userIndex === -1){
        return res.status(404).send ('User not found');

    }
    users [userIndex] = {...users [userIndex], ...req.body};
    res.send('Updated');
}