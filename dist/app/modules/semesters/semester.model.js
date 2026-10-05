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
semesterSchema.pre("save", async function () {
    const isExist = await Semester.findOne({
        name: this.name,
        year: this.year,
    });
    if (isExist) {
        throw new Error(`The ${this.name} semester of ${this.year} already created.`);
    }
});
export const Semester = model("Semester", semesterSchema);
//# sourceMappingURL=semester.model.js.map