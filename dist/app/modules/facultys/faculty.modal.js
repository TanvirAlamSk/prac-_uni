import { model, Schema } from "mongoose";
const facultySchema = new Schema({
    name: {
        type: String,
        required: [true, "Faculty name is required."],
    },
});
facultySchema.index({ name: 1 }, { unique: true });
export const Faculty = model("Faculty", facultySchema);
//# sourceMappingURL=faculty.modal.js.map