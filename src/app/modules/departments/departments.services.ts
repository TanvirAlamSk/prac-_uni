import { Faculty } from "../facultys/faculty.modal.js";
import type { DepartmentInterface } from "./departments.interface.js";
import { Department } from "./departments.schema.js";

export const getAllDepartmentsService = async () => {
  const result = await Department.find();
  return result;
};

export const createADepaetmentService = async (data: DepartmentInterface) => {
  const { name } = data;
  const isExist = await Department.findOne({ name });

  if (isExist) {
    throw new Error(`${name} department already created`);
  }

  const faculty = await Faculty.findById(data.faculty);

  if (!faculty) {
    throw new Error("Provided faculty does not exist!");
  }

  const result = await Department.create(data);
  return result;
};

export const getOneDepartmentsService = async (id: string) => {
  const result = await Department.findById(id).populate("faculty");
  return result;
};
