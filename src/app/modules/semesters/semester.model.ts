import { model, Schema } from "mongoose";
import type { SemesterType } from "./semester.interface.js";

const semesterSchema = new Schema<SemesterType>({
  name: {
    type: String,
    required: [true, "Semester name is required."],
    enum: {
      values: ["spring", "summer", "fall"],
    },
  },
  year: {
    type: Number,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  endMonth: {
    type: String,
    required: true,
  },
});

semesterSchema.index({ name: 1, year: 1 }, { unique: true });

export const Semester = model<SemesterType>("Semester", semesterSchema);
