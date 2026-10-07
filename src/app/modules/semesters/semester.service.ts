import type { SemesterType } from "./semester.interface.js";
import { Semester } from "./semester.model.js";

export const getAllSemesterService = async () => {
  const result = await Semester.find();
  return result;
};

export const createSemesterService = async (data: SemesterType) => {
  const result = await Semester.create(data);
  return result;
};



