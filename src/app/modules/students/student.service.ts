import type { semesterDepartYear } from "../../utils/types.js";
import { Department } from "../departments/departments.schema.js";
import { Semester } from "../semesters/semester.model.js";
import { StudentModel } from "./student.schema.js";
import type { Student } from "./students.interface.js";

export const getAllStudentservice = async () => {
  const result = await StudentModel.find()
    .populate("semester")
    .populate("department");
  return result;
};

export const getStudentBySemesterDepartmentYearService = async (
  data: semesterDepartYear,
) => {
  const result = await StudentModel.countDocuments(data);
  return result;
};

export const createAStudentService = async (data: Student) => {
  const department = await Department.findById(data.department);

  if (!department) {
    throw new Error("Provided department does not exist!");
  }

  const semester = await Semester.findById(data.semester);

  if(!semester){
    throw new Error("Provided semester does not exist!");
  }

  const result = await StudentModel.create(data);
  return result;
};
