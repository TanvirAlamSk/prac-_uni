import { Semester } from "./semester.model.js";
export const getAllSemesterService = async () => {
    const result = await Semester.find();
    return result;
};
export const createSemesterService = async (data) => {
    // const { name, year } = data;
    // const filter = {
    //   name,
    //   year,
    // };
    // const isExist = await Semester.findOne(filter);
    // if (isExist) {
    //   throw new Error(`The ${name} semester of ${year} already created.`);
    // }
    const result = await Semester.create(data);
    return result;
};
//# sourceMappingURL=semester.service.js.map