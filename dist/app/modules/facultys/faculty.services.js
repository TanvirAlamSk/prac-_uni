import { faculty } from "./faculty.modal.js";
export const getAllFacultyServices = async () => {
    const result = await faculty.find();
    return result;
};
//# sourceMappingURL=faculty.services.js.map