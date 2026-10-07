import { model, Schema } from "mongoose";
const semesterSchema = new Schema({
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
export const Semester = model("Semester", semesterSchema);
//# sourceMappingURL=semester.model.js.map