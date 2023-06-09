import {graphqlHTTP} from "express-graphql"
import express from "express"
import { buildSchema } from "graphql"

const app=express();

const schema = buildSchema(`

`)

const rootValue = {

}


app.use("/graphql",graphqlHTTP({
    schema,
    rootValue,
    graphiql:true
}));

app.listen(3000, () => {
    console.log("Server strated on http://localhost:3000/graphql ")
})