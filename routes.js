import * as express from "express";
import {search, keywordSearch, axiosSearch, getResults} from './search.js';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "default get request" });
});

router.get("/keyword-search/:keyword", keywordSearch, (req, res) => {
    res.status(200).json(res.locals.result);
});

router.get("/search", getResults, (req, res) => {
    res.status(200).json(res.locals.result); 
});

router.post("/search", search, (req, res) => {
    res.status(200).json(res.locals.result);
});

export default router; 