import * as express from "express";
import querystring from 'querystring';
import {search, keywordSearch, axiosSearch} from './search.js';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "default get request" });
});

router.get("/search", (req, res) => {
    res.status(200).json({ message: "search" });
});

router.get("/:param", (req, res) => {
    res.status(200).json({ message: req.params.param });
});

router.get("/search/:keyword", keywordSearch, (req, res) => {
    res.status(200).json(res.locals.result);
});

router.get("/axiosSearch/:url", axiosSearch, (req, res) => {
    res.status(200).json(res.locals.result);
});



// router.get("/search/:param_string", (req, res) => {
//     const search_params = querystring.parse(req.params.param_string);
//     res.status(200).json(search_params);
// });


router.post("/search", search, (req, res) => {
    res.status(200).json(res.locals.result);
});

export default router; 