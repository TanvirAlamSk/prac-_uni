import type { Request, Response } from "express";
import {
  createADepaetmentService,
  getAllDepartmentsService,
  getOneDepartmentsService,
} from "./departments.services.js";

export const getAllDepartmentsControllar = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await getAllDepartmentsService();
    res.status(200).json({
      success: true,
      message: "Get all departments successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Does not get all departments",
    });
  }
};

export const createADepartmentsControllar = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await createADepaetmentService(req.body);
    res.status(200).json({
      success: true,
      message: "Create a department successfully",
      data: result,
    });
  } catch (err) {
    res.status(409).json({
      success: false,
      message: (err as Error).message,
    });
  }
};

export const getOneDepartmentsControllar = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  try {
    const result = await getOneDepartmentsService(id as string);
    res.status(201).json({
      success: true,
      message: "Create a department successfully",
      data: result,
    });
  } catch (err) {
     res.status(201).json({
      success: false,
      message: "The Request failed to obtain the department"
    });
  }
};
