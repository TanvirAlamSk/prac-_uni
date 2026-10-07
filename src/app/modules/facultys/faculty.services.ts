import type { FacultyInterface } from "./faculty.interface.js";
import { faculty } from "./faculty.modal.js";

export const getAllFacultyServices = async () => {
  const result = await faculty.find();
  return result;
};

export const createAFacultySecvices = async (data: FacultyInterface) => {
  const result = await faculty.create(data);
  return result;
};
