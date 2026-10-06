import type { Request, Response } from "express";
import {
  createSemesterService,
  getAllSemesterService,
} from "./semester.service.js";

export const getAllSemesterControllar = async (req: Request, res: Response) => {
  try {
    const result = await getAllSemesterService();
    res.status(200).json({
      success: true,
      message: "Get all Students",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: (err as Error).message,
    });
  }
};

export const createSemesterControllar = async (req: Request, res: Response) => {
  try {
    const result = await createSemesterService(req.body);
    res.status(201).json({
      success: true,
      message: "Semester Create Successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: (err as Error).message,
    });
  }
};
