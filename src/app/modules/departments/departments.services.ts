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

  const result = await Department.create(data);
  return result;
};

export const getOneDepartmentsService = async (id: string) => {
    const result=await Department.findById(id).populate("faculty");
    return result;
};
