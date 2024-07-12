import express from "express";
import cors from "cors";
import { connectDb } from "./Config/db.js";
import productRouter from "./Routers/ProductRouter.js";
import userRouter from "./Routers/UserRouter.js";
import "dotenv/config";
// app configeration//

const app = express();
const port = 5000;

// middlewares

app.use(express.json());
app.use(cors());

// database connection
connectDb();

// api endpoints

app.get("/", (req, res) => {
  res.send("Welcome");
});
//==================================================
app.use("/images", express.static("upload"));
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

//===================================================

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
