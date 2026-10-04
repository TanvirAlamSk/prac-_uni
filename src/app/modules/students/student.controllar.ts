import { type Request, type Response } from "express";
import { getStudentservice, studentCreateService } from "./student.service.js";



export const getStudentControllar=async(req:Request,res:Response)=>{

  const result=await getStudentservice();
  res.send("Api hit successfully")

}

export const creastStudentControllar = async (req: Request, res: Response) => {
  try {
    const result = await studentCreateService(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully Student created",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Student created failed",
      data: err,
    })
  }
};


