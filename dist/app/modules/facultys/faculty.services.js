import { faculty } from "./faculty.modal.js";
export const getAllFacultyServices = async () => {
    const result = await faculty.find();
    return result;
};
export const createAFacultySecvices = async (data) => {
    const { name } = data;
    const isExits = await faculty.findOne({ name });
    if (isExits) {
        throw new Error(`${name} is already exists`);
    }
    const result = await faculty.create(data);
    return result;
};
//# sourceMappingURL=faculty.services.js.map