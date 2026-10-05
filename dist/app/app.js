import express, {} from "express";
import cors from "cors";
import studentRouter from "./modules/students/student.route.js";
import semestrtRoute from "./modules/semesters/semester.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/semester", semestrtRoute);
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.get("/home", (req, res) => {
    res.send("This is home");
});
export default app;
//# sourceMappingURL=app.js.map