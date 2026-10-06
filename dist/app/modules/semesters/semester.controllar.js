import { createSemesterService, getAllSemesterService, } from "./semester.service.js";
export const getAllSemesterControllar = async (req, res) => {
    try {
        const result = await getAllSemesterService();
        res.status(200).json({
            success: true,
            message: "Get all Students",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
};
export const createSemesterControllar = async (req, res) => {
    try {
        const result = await createSemesterService(req.body);
        res.status(201).json({
            success: true,
            message: "Semester Create Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
};
//# sourceMappingURL=semester.controllar.js.map