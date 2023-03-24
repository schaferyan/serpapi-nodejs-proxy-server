import { getJson } from "serpapi";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.SERPAPI_KEY;

export async function search(req, res, next) {
  const params = req.body;
  try {
    const data = await getJson("google", params);
    res.locals.result = data;
    res.status(200);
  } catch {
    res.status(400);
  }
  next();
}

export async function keywordSearch(req, res, next) {
  const params = {};
  params.q = req.params.keyword;
  try {
    const data = await getJson("google", params);
    res.locals.result = data;
    res.status(200);
  } catch {
    res.status(400);
  }
  next();
}

export async function axiosSearch(req, res, next) {
  try {
    const requestUrl =
      "https://serpapi.com/search.json?" +
      req.params.url +
      "&api_key=" +
      API_KEY;
    console.log('URL is ' + requestUrl);  
    const response = await axios.get(requestUrl);
    res.locals.result = response.data;
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
  next();
}

export async function getResults(req, res, next){
  const params = {...req.query};
  try {
    console.log(req.query);
    console.log(params)
    const data = await getJson("google", params);
    res.locals.result = data;
    res.status(200);
  } catch (error) {
    console.log(error)
    res.status(400);
  }
  next();
}