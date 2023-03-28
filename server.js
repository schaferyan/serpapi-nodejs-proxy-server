import express, { json } from "express";
import dotenv from "dotenv";
import { config } from "serpapi";
import cors from "cors";
import {getResults, postResults, search } from './search.js';



dotenv.config();
// console.log(process.env);
config.api_key = process.env.SERPAPI_KEY;


const app = express();
app.use(cors({ origin: "http://yourdomain.com" }));
app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "response to default get request" });
});

app.get("/another-route", (req, res) => {
  res.status(200).json({ message: "here is another route" });
});

app.get("/keyword-search/:q", search, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.get("/search", getResults, search, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.post("/search", postResults, search, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}\n-------------------------`);
});