import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.SERPAPI_KEY;

export async function postResults(req, res, next) {
  req.params = { ...req.body };
  next();
}

export async function getResults(req, res, next) {
  req.params = req.query;
  next();
}

export async function search(req, res, next) {
  const params = req.params;
  try {
    const data = await getJson("google", params);
    res.locals.result = data;
    res.status(200);
  } catch (error) {
    console.log(error)
    res.status(400);
  }
  next();
}


