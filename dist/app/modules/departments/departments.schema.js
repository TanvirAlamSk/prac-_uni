import { model, Schema } from "mongoose";
const departmentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Department Name must be required"],
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: "Faculty",
        required: [true, "Faculty reference must be required and is should be existing facilty"]
    },
});
departmentSchema.index({ name: 1 }, { unique: true });
export const Department = model("Department", departmentSchema);
//# sourceMappingURL=departments.schema.js.map