import { semester } from "./semester.model.js";
export const createSemesterService = async (data) => {
    const result = await semester.create(data);
    return result;
};
//# sourceMappingURL=semester.service.js.map