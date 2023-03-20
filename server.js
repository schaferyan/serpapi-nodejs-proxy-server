import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes.js"
import { config} from "serpapi";

config.api_key = process.env.SERPAPI_KEY;
// const cors = require('cors');

const app = express();
// app.use(cors);
app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello world!" });
  });


app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}\n-------------------------`);
});


