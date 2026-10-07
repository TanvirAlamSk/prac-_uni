import express from "express";
import {
  creastAStudentControllar,
  getStudentBySemesterDepartmentYearControllar,
  getStudentControllar,
} from "./student.controllar.js";

const studentRouter = express.Router();


studentRouter.get("", getStudentControllar);
studentRouter.get(
  "/count-student",
  getStudentBySemesterDepartmentYearControllar,
);
studentRouter.post("", creastAStudentControllar);


export default studentRouter;
