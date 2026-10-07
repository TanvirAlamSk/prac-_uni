import { model, Schema } from "mongoose";
import type { FacultyInterface } from "./faculty.interface.js";

const facultySchema = new Schema<FacultyInterface>({
  name: {
    type: String,
    required: [true, "Faculty name is required."],
  },
});

export const faculty = model<FacultyInterface>("faculty", facultySchema);
