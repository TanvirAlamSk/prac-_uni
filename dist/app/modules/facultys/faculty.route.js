import express from 'express';
import { getAllFacultyControllar } from "./faculty.controllar.js";
const facultyRoute = express.Router();
facultyRoute.get("", getAllFacultyControllar);
export default facultyRoute;
//# sourceMappingURL=faculty.route.js.map