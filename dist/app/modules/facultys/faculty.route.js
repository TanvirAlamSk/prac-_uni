import express from "express";
import { crateAFacultyControllar, getAllFacultyControllar } from "./faculty.controllar.js";
const facultyRoute = express.Router();
facultyRoute.get("", getAllFacultyControllar);
facultyRoute.post("", crateAFacultyControllar);
export default facultyRoute;
//# sourceMappingURL=faculty.route.js.map