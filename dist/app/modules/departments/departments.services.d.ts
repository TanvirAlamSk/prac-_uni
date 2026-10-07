import type { DepartmentInterface } from "./departments.interface.js";
export declare const getAllDepartmentsService: () => Promise<(import("mongoose").Document<unknown, {}, DepartmentInterface, {}, import("mongoose").DefaultSchemaOptions> & DepartmentInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const createADepaetmentService: (data: DepartmentInterface) => Promise<import("mongoose").Document<unknown, {}, DepartmentInterface, {}, import("mongoose").DefaultSchemaOptions> & DepartmentInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getOneDepartmentsService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, DepartmentInterface, {}, import("mongoose").DefaultSchemaOptions> & DepartmentInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | null>;
//# sourceMappingURL=departments.services.d.ts.map