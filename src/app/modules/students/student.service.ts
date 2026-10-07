import type { semesterDepartYear } from "../../utils/types.js";
import { StudentModel } from "./student.schema.js";
import type { Student } from "./students.interface.js";

export const getAllStudentservice = async () => {
  const result=await StudentModel.find().populate("semester").populate("department");
  return result;
};

export const getStudentBySemesterDepartmentYearService = async (data:semesterDepartYear
) => {
  const result=await StudentModel.countDocuments(data);
  return result;
};

export const studentCreateService = async (data: Student) => {
  const result = await StudentModel.create(data);
  return result;
};
