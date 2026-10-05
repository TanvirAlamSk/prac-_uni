import { Schema, model } from "mongoose";
const nameSchema = new Schema({
    firstName: { type: String, required: [true, "First Name must be required"] },
    lastName: { type: String, required: [true, "Last Name must be required"] },
});
const GuardianSchema = new Schema({
    name: {
        type: nameSchema,
        required: [true, "Guardian Name Must Be required"],
    },
    relation: {
        type: String,
        required: [true, "Relation status must be needed"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Gardian Phone Number Must be Reqired"],
    },
});
const studentSchema = new Schema({
    name: {
        type: nameSchema,
        required: true,
    },
    id: {
        type: String,
        required: [true, "ID must be required"],
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: [true, "Date Of Birth must be required"],
    },
    address: {
        type: String,
        required: [true, "Address must be required"],
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        enum: {
            values: ["male", "female"],
        },
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A", "B", "O", "AB"],
        },
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number Must be Required"],
    },
    guardian: {
        type: GuardianSchema,
        required: true,
    },
});
export const StudentModel = model("student", studentSchema);
//# sourceMappingURL=student.schema.js.map