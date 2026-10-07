import type { Request, Response } from "express";
import {
  createAFacultySecvices,
  getAllFacultyServices,
} from "./faculty.services.js";

export const getAllFacultyControllar = async (req: Request, res: Response) => {
  try {
    const result = await getAllFacultyServices();

    res.status(200).json({
      success: true,
      message: "Get all faculty successfully.",
      data: result,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Get all faculty is Unsuccessfull.",
    });
  }
};

export const crateAFacultyControllar = async (req: Request, res: Response) => {
  try {
    const result = await createAFacultySecvices(req.body);

    res.status(200).json({
      success: true,
      message: "Create faculty successfully.",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Create faculty unSuccessfully.",
    });
  }
};
