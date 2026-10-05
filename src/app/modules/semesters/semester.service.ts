import type { SemesterType } from "./semester.interface.js";
import { Semester } from "./semester.model.js";

export const createSemesterService = async (data: SemesterType) => {
  const { name, year } = data;
  const filter = {
    name,
    year,
  };

  const isExist = await Semester.findOne(filter);
  if (isExist) {
    throw new Error(`The ${name} semester of ${year} already created.`);
  }

  const result = await Semester.create(data);
  return result;
};
