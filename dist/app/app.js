import express, {} from "express";
import cors from "cors";
import studentRouter from "./modules/students/student.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.get("/home", (req, res) => {
    res.send("This is home");
});
app.use("/api/v1/students", studentRouter);
export default app;
//# sourceMappingURL=app.js.map