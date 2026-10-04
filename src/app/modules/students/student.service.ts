import { StudentModel } from "./student.schema.js";
import type { Student } from "./students.interface.js";

export const getStudentservice=async()=>{
    return "Api hit successfully";
}

export const studentCreateService=async( data:Student)=>{
    const result=await StudentModel.create(data);
    return result;
}