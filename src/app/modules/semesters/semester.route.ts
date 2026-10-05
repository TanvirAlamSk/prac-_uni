import express from "express";
import { createSemesterControllar } from "./semester.controllar.js";

const semestrtRoute = express.Router();

semestrtRoute.post("/create-semester", createSemesterControllar);
