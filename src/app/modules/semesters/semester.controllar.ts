import type { Request, Response } from "express";
import { createSemesterService } from "./semester.service.js";

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
