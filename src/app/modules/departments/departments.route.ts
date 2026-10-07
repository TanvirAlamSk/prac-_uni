import express from "express";
import { createADepartmentsControllar, getAllDepartmentsControllar, getOneDepartmentsControllar } from "./departments.controllar.js";

const departmentRoute = express.Router();

departmentRoute.get("",getAllDepartmentsControllar);
departmentRoute.post("",createADepartmentsControllar);
departmentRoute.get("/:id",getOneDepartmentsControllar);

export default departmentRoute;