import express from "express";
import { createSemesterControllar } from "./semester.controllar.js";

const semestrtRoute = express.Router();


semestrtRoute.get("")
semestrtRoute.post("/create-semester", createSemesterControllar);

export default semestrtRoute;
