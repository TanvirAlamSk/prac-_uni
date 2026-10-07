import { Semester } from "./semester.model.js";
export const getAllSemesterService = async () => {
    const result = await Semester.find();
    return result;
};
export const createSemesterService = async (data) => {
    const { year, name } = data;
    const isExist = await Semester.findOne({ name, year });
    if (isExist) {
        throw new Error(`The ${name} semester of ${year} is already exist.`);
    }
    const result = await Semester.create(data);
    return result;
};
//# sourceMappingURL=semester.service.js.map