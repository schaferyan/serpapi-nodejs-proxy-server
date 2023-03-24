import express, { json } from "express";
import dotenv from "dotenv";
import { config} from "serpapi";
import cors from "cors";
import router from "./routes.js"


dotenv.config();
// console.log(process.env);
config.api_key = process.env.SERPAPI_KEY;


const app = express();
app.use(cors());
app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello world!" });
  });

app.get("/search", async (req, res) => {
  const params = {...req.query};
  try {
    const data = await getJson("google", params);
    res.locals.result = data;
    res.status(200);
  } catch (error) {
    console.log(error)
    res.status(400);
  }
})


app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}\n-------------------------`);
});


