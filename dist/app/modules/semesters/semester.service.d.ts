import type { SemesterType } from "./semester.interface.js";
export declare const getAllSemesterService: () => Promise<(import("mongoose").Document<unknown, {}, SemesterType, {}, import("mongoose").DefaultSchemaOptions> & SemesterType & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const createSemesterService: (data: SemesterType) => Promise<import("mongoose").Document<unknown, {}, SemesterType, {}, import("mongoose").DefaultSchemaOptions> & SemesterType & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=semester.service.d.ts.map