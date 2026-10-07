import type { FacultyInterface } from "./faculty.interface.js";
export declare const getAllFacultyServices: () => Promise<(import("mongoose").Document<unknown, {}, FacultyInterface, {}, import("mongoose").DefaultSchemaOptions> & FacultyInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const createAFacultySecvices: (data: FacultyInterface) => Promise<import("mongoose").Document<unknown, {}, FacultyInterface, {}, import("mongoose").DefaultSchemaOptions> & FacultyInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=faculty.services.d.ts.map