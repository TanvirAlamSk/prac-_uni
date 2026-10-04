import { StudentModel } from "./student.schema.js";
export const getStudentservice = async () => {
    return "Api hit successfully";
};
export const studentCreateService = async (data) => {
    const result = await StudentModel.create(data);
    return result;
};
//# sourceMappingURL=student.service.js.map