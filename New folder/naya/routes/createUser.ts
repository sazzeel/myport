

// interface RequestBody {
//     name: string;
//     email: string;
//     password: string;
//   }

// const bcrypt = require ("bcrypt")
// // const app = require ("../dbServer")
// const express = require("express");
// const app = express();

// app.use(express.json())

// app.post("/createUser", async(req:Request, res: Response) => {
//     // const user = req.body ? req.body.name : null;
// //     const {name, email,password} = req.body;
// //     const hashedPassword = await bcrypt.hash(req.body ? req.body.password: null, 10);
// // })
// })

// // app.post ("/createUser", async (req: Request , res: Response)=>{
// //     try{
// //         const {name, email, password} =req.body;

// //         const hashedPassword = await bcrypt.hash(password, 10);

// //         res.status(201).send(`User ${name} registered successfully`);

// //     }catch (error){
// //         console.error(error);
// //         res.status(500).send ("Internal server error")
// //     }
// // })