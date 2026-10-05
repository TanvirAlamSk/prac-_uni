import type { Semester } from "./semester.interface.js";
import { semester } from "./semester.model.js";

export const createSemesterService =async (data: Semester) => {
  const result = await semester.create(data);
  return result;
};
