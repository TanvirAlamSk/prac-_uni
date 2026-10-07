import { StudentModel } from "./student.schema.js";
export const getAllStudentservice = async () => {
    const result = await StudentModel.find().populate("semester").populate("department");
    return result;
};
export const getStudentBySemesterDepartmentYearService = async (data) => {
    const result = await StudentModel.countDocuments(data);
    return result;
};
export const studentCreateService = async (data) => {
    const result = await StudentModel.create(data);
    return result;
};
//# sourceMappingURL=student.service.js.map