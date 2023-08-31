import express, { Express } from "express";
import routes from "./routes"

const app: Express = express();
const port = 8000

app.use("/", routes)

app.listen(port, ()=> {
  console.log(`Server running on port ${port}`);
  
})
export default app