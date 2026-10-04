import express from "express"
import { creastStudentControllar, getStudentControllar } from "./student.controllar.js";

 const studentRouter=express.Router()

studentRouter.get("",getStudentControllar)
studentRouter.post("/create-student",creastStudentControllar);


export default studentRouter;