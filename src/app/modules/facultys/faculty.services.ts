import type { FacultyInterface } from "./faculty.interface.js";
import { Faculty } from "./faculty.modal.js";

export const getAllFacultyServices = async () => {
  const result = await Faculty.find();
  return result;
};

export const createAFacultySecvices = async (data: FacultyInterface) => {
  const { name } = data;
  const isExits = await Faculty.findOne({ name });

  if(isExits){
    throw new Error(`${name} is already exists`)
  }

  const result = await Faculty.create(data);
  return result;
};
