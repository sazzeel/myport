import express from "express";
import cors from "cors";

import userRoutes from "./routes/user"

const app = express();
app.use(express.json())
const port = 5000;

app.use(cors());
app.use("/", userRoutes)

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello");
  });
  
  app.all("/", (req: express.Request, res: express.Response) => {
    res.send("It is blocked my guy!!!!!!");
  });
app.listen(port, () =>
console.log(`Server is running: http://localhost:${port}`)
);