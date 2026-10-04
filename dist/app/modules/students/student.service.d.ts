import type { Student } from "./students.interface.js";
export declare const getStudentservice: () => Promise<string>;
export declare const studentCreateService: (data: Student) => Promise<import("mongoose").Document<unknown, {}, Student, {}, import("mongoose").DefaultSchemaOptions> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=student.service.d.ts.map