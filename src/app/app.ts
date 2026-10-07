import express, { type Request, type Response } from "express";
import cors from "cors";
import studentRouter from "./modules/students/student.route.js";
import semestrtRoute from "./modules/semesters/semester.route.js";
import facultyRoute from "./modules/facultys/faculty.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/semesters", semestrtRoute);
app.use("/api/v1/faculties", facultyRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.get("/home", (req: Request, res: Response) => {
  res.send("This is home");
});

export default app;
