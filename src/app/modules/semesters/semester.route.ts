import express from "express";
import { createSemesterControllar, getAllSemesterControllar } from "./semester.controllar.js";

const semestrtRoute = express.Router();


semestrtRoute.get("",getAllSemesterControllar)
semestrtRoute.post("", createSemesterControllar);

export default semestrtRoute;
