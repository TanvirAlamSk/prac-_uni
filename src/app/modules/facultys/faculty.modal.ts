import { model, Schema } from "mongoose";
import type { FacultyInterface } from "./faculty.interface.js";

const facultySchema = new Schema<FacultyInterface>({
  name: {
    type: String,
    required: [true, "Faculty name is required."],
  },
});

facultySchema.index({ name: 1 }, { unique: true });
export const Faculty = model<FacultyInterface>("Faculty", facultySchema);
