import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { schema } from "./schema";
import { welcomeQuery } from "./graphiQL";

dotenv.config();

const app: express.Application = express();

const helpMiddleware: express.RequestHandler[] = [
    cors({
        methods: ["POST"]
    }),
    bodyParser.json(),
    bodyParser.text({ type: "application/graphql" }),
    (req: express.Request, res: express.Response, next:any) => {
        if(req.is("application/graphql")){
            req.body = {query: req.body};

        }
        next();
    },
    
];
app.use(helmet());
app.use(compression());
app.use("/graph", ...helpMiddleware, graphqlExpress({schema}));
if(!process.env.PRODUCTION){
    app.use("/graph", graphiqlExpress({
        endpointURL: "/graphql",
        query: welcomeQuery,
    }));
}

export default app;