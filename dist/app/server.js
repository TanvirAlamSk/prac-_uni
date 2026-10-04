import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(port, () => {
        console.log("server is running on post 5000");
    });
}
main();
//# sourceMappingURL=server.js.map