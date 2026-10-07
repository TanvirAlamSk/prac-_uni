import { Semester } from "./semester.model.js";
export const getAllSemesterService = async () => {
    const result = await Semester.find();
    return result;
};
export const createSemesterService = async (data) => {
    const result = await Semester.create(data);
    return result;
};
//# sourceMappingURL=semester.service.js.map