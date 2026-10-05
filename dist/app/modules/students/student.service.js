import { StudentModel } from "./student.schema.js";
export const getStudentservice = async () => {
    const result = await StudentModel.find();
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