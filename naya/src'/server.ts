import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const PORT : string | undefined = process.env.PORT;

app.listen (PORT, () =>{
    console.log(`GRaphQL Server is now running on ${PORT}/graph`);
    console.log(`View Graphql at ${PORT}/graph`);
})

