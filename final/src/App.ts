import express from "express"



const App = () => {
    const app = express();
    app.use(express.json());

    app.get("/", async (res, req, next) =>{
        res.send ('success')
    })
    return app
}

export default App


// import express from "express"
// import { Server } from "http";
// import { Connection } from "typeorm";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const server = new Server (app);
// const port = process.env.PORT || 3000;


// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });


