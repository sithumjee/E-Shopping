import express from "express";
import multer from "multer";
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../Controller/ProductController.js";

const productRouter = express.Router();

//image storage

const storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.post("/additem", upload.single("image"), addProduct);
productRouter.get("/listitem", listProduct);
productRouter.post("/removeitem", removeProduct);

export default productRouter;
