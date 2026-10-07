import { Department } from "./departments.schema.js";
export const getAllDepartmentsService = async () => {
    const result = await Department.find();
    return result;
};
export const createADEpaetmentService = async (data) => {
    const { name } = data;
    const isExist = await Department.findOne({ name });
    if (isExist) {
        throw new Error(`${name} department already created`);
    }
    const result = await Department.create(data);
    return result;
};
//# sourceMappingURL=departments.services.js.map