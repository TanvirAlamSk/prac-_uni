import { type Request, type RequestHandler, type Response } from "express";
import {
  getStudentBySemesterDepartmentYearService,
  getStudentservice,
  studentCreateService,
} from "./student.service.js";

export const getStudentControllar: RequestHandler = async (req, res) => {
  try {
    const result = await getStudentservice();
    res.status(200).json({
      success: true,
      message: "Successfully get all student.",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all Students",
      data: err,
    });
  }
};

export const getStudentBySemesterDepartmentYearControllar: RequestHandler =
  async (req, res) => {
    try {
      const { semester, department, year } = req.query;
      const data = {
        year: Number(year),
        semester: String(semester),
        department: String(department),
      };
      const result = await getStudentBySemesterDepartmentYearService(data);
      res.status(200).json({
        success: true,
        message: `List of all student of ${semester} semester from department of ${department} in ${year}`,
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: "Get Student failed",
        data: err,
      });
    }
  };

export const creastStudentControllar: RequestHandler = async (req, res) => {
  try {
    const result = await studentCreateService(req.body);
    res.status(201).json({
      success: true,
      message: "Successfully Student created",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Student created failed",
      data: err,
    });
  }
};
