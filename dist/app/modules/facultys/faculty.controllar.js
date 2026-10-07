import { getAllFacultyServices } from "./faculty.services.js";
export const getAllFacultyControllar = async (req, res) => {
    try {
        const result = await getAllFacultyServices();
        res.status(200).json({
            success: true,
            message: "Get all faculty successfully.",
            data: result,
        });
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: "Get all faculty is Unsuccessfull.",
        });
    }
};
//# sourceMappingURL=faculty.controllar.js.map