import express from "express";
import cors from "cors";
import { connectDb } from "./Config/db.js";
import productRouter from "./Routers/ProductRouter.js";

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

app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
