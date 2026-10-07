import { model, Schema } from "mongoose";
import type { DepartmentInterface } from "./departments.interface.js";

const departmentSchema = new Schema<DepartmentInterface>({
  name: {
    type: String,
    required: [true, "Department Name must be required"],
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "Faculty",
    required:[true,"Faculty reference must be required and is should be existing facilty"]
  },
});

departmentSchema.index({ name: 1 }, { unique: true });

export const Department = model<DepartmentInterface>(
  "Department",
  departmentSchema,
);
