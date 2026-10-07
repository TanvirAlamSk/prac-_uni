import type { DepartmentInterface } from "./departments.interface.js";
export declare const getAllDepartmentsService: () => Promise<(import("mongoose").Document<unknown, {}, DepartmentInterface, {}, import("mongoose").DefaultSchemaOptions> & DepartmentInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const createADEpaetmentService: (data: DepartmentInterface) => Promise<import("mongoose").Document<unknown, {}, DepartmentInterface, {}, import("mongoose").DefaultSchemaOptions> & DepartmentInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=departments.services.d.ts.map