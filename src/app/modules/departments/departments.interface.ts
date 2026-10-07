import type { Types } from "mongoose";

export type DepartmentInterface={
    name:string;
    faculty:Types.ObjectId,
}