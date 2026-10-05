import express from "express";
import { creastStudentControllar, getStudentBySemesterDepartmentYearControllar, getStudentControllar, } from "./student.controllar.js";
const studentRouter = express.Router();
studentRouter.get("", getStudentControllar);
studentRouter.get("/count-student", getStudentBySemesterDepartmentYearControllar);
studentRouter.post("/create-student", creastStudentControllar);
export default studentRouter;
//# sourceMappingURL=student.route.js.map