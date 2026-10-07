import type { semesterDepartYear } from "../../utils/types.js";
import type { Student } from "./students.interface.js";
export declare const getAllStudentservice: () => Promise<(import("mongoose").Document<unknown, {}, Student, {}, import("mongoose").DefaultSchemaOptions> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const getStudentBySemesterDepartmentYearService: (data: semesterDepartYear) => Promise<number>;
export declare const createAStudentService: (data: Student) => Promise<import("mongoose").Document<unknown, {}, Student, {}, import("mongoose").DefaultSchemaOptions> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=student.service.d.ts.map