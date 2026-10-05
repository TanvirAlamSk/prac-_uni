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
export const semester = model("semester", semesterSchema);
//# sourceMappingURL=semester.model.js.map